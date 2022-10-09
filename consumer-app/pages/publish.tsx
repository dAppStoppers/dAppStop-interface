import { useForm } from "react-hook-form";
import { makeStorageClient } from "../lib/makeStorageClient";
import { ComposeConnector } from "../services/ComposeConnector.service";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { dappStopRegistry } from "../lib/dappStopRegistry";
import { useEffect, useState } from "react";
import { useDebounce } from "../core/useDebounce";
import { SmartContractPayload } from "../lib/schemas/SmartContractPayload";
import { CeramicPayload } from "../lib/schemas/ceramicPayload";

interface FormData {
  title: string;
  description: string;
  appIcon: FileList;
  preview1: FileList;
  preview2: FileList;
  chain: string;
  category: string;
  apkFile: FileList;
  tokenGated: boolean;
  price: string;
  appVersion: string;
}

interface TokenMetadataPayload {
  name: string;
  description: string;
  image: string;
  ceramicURI: string;
}

const storageClient = makeStorageClient();
const composeConnector = new ComposeConnector();

function makeIpfsUri(cid: string) {
  return `ipfs://${cid}`;
}

export default function Publish() {
  const { register, handleSubmit } = useForm<FormData>();
  const { address, isConnected } = useAccount();
  const [contractPayload, setContractPayload] =
    useState<SmartContractPayload | null>(null);
  const debouncedContractPayload = useDebounce(contractPayload, 500);
  // write to smart contract
  const { config } = usePrepareContractWrite({
    addressOrName: "0x6e95ab8Ac7FB84baA9B54ad81D1E5b9Ea3dc19D8",
    contractInterface: dappStopRegistry.abi,
    functionName: "register",
    args: [debouncedContractPayload],
    enabled: debouncedContractPayload !== null,
  });

  const { write } = useContractWrite(config);

  function writeIt() {
    write?.();
  }

  useEffect(() => {
    if (contractPayload) {
      console.log("hi");
    }
  }, [contractPayload]);

  // submit functionas
  const onSubmit = async (data: FormData) => {
    // upload each to ipfs
    const uploadPromises = [
      await storageClient.put(data.appIcon),
      await storageClient.put(data.preview1),
      await storageClient.put(data.preview2),
      await storageClient.put(data.apkFile),
    ];
    const [appIconCid, preview1Cid, preview2Cid, apkCid] = await Promise.all(
      uploadPromises
    );
    console.log("appIconCid:", appIconCid);
    console.log("preview1Cid:", preview1Cid);
    console.log("preview2Cid:", preview2Cid);
    console.log("apkCid:", apkCid);

    // post to compose
    const composePayload: CeramicPayload = {
      title: data.title,
      description: data.description,
      app_icon_url: makeIpfsUri(appIconCid) + "/" + data.appIcon[0].name,
      preview_image_urls: [
        makeIpfsUri(preview1Cid) + "/" + data.preview1[0].name,
        makeIpfsUri(preview2Cid) + "/" + data.preview2[0].name,
      ],
      chain: data.chain,
      category: data.category,
      apk_url: makeIpfsUri(apkCid) + "/" + data.apkFile[0].name,
      token_gated: data.tokenGated,
      price: data.price,
      version: data.appVersion,
    };

    console.log("composePayload: ", composePayload);

    const composeCreateResp = await composeConnector.create(composePayload);
    console.log("composeCreateResp:", composeCreateResp);

    // upload nft metadata to web3 storage
    const tokenMetadataPayload: TokenMetadataPayload = {
      name: data.title,
      description: data.description,
      image: makeIpfsUri(appIconCid),
      ceramicURI: `ceramic://${composeCreateResp}`,
    };
    const blob = new Blob([JSON.stringify(tokenMetadataPayload)], {
      type: "application/json",
    });
    const files = [new File([blob], "tokenMetadata.json")];
    const popURI = await storageClient.put(files);
    const ipfsPopUri = makeIpfsUri(`${popURI}/tokenMetadata.json`);

    // create smart contract payload
    const smartContractPayload: SmartContractPayload = {
      creator: address ?? "0x0000",
      popURI: ipfsPopUri,
      ceramicURI: `ceramic://${composeCreateResp}`,
      price: data.price,
    };
    console.log("smartContractPayload:", smartContractPayload);
    setContractPayload(smartContractPayload);
  };

  return (
    <div className="px-6">
      <h1 className="text-3xl">Publish your Dapp</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Title:</p>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-xs"
          {...register("title")}
        />
        <br />
        <br />
        <p>Description:</p>
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered w-full max-w-xs"
          {...register("description")}
        />
        <br />
        <br />
        <p>App icon:</p>
        <input type="file" {...register("appIcon")} />
        <br />
        <br />
        <p>Preview image 1:</p>
        <input type="file" {...register("preview1")} />
        <br />
        <br />
        <p>Preview image 2:</p>
        <input type="file" {...register("preview2")} />
        <br />
        <br />
        <p>Chain:</p>
        <select className="select w-full max-w-xs" {...register("chain")}>
          <option disabled selected>
            Select Chain
          </option>
          <option>Polygon</option>
          <option>Optimism</option>
          <option>Klaytn</option>
        </select>
        <br />
        <br />
        <p>Category:</p>
        <select className="select w-full max-w-xs" {...register("category")}>
          <option disabled selected>
            Category
          </option>
          <option>Game</option>
          <option>Dapp</option>
        </select>
        <br />
        <br />
        <p>APK file:</p>
        <input type="file" {...register("apkFile")} />
        <br />
        <br />
        <p>Token gating:</p>
        <p>
          If you turn it on, we will generate non-transferrable NFT (ERC-1155)
          and users need to buy it for installing your app.
        </p>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          {...register("tokenGated")}
        />
        <br />
        <br />
        <p>Price:</p>
        <input
          type="text"
          placeholder="Price"
          className="input input-bordered w-full max-w-xs"
          {...register("price")}
        />
        <br />
        <br />
        <p>App version:</p>
        <input
          type="text"
          placeholder="App version"
          className="input input-bordered w-full max-w-xs"
          {...register("appVersion")}
        />
        <br />
        <br />
        <div className="flex justify-evenly pb-16">
          <input
            className="btn btn-primary"
            type="submit"
            disabled={!isConnected}
          />
          <button
            className="btn btn-primary"
            disabled={!write}
            onClick={writeIt}
          >
            Mint
          </button>
        </div>
      </form>
    </div>
  );
}
