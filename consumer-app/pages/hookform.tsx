import { useForm } from "react-hook-form";
import { makeStorageClient } from "../lib/makeStorageClient";
import { ComposeConnector } from "../services/ComposeConnector.service";
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

interface ComposePayload {
  title: string;
  description: string;
  appIconUrl: string;
  previewImageUrls: string[];
  chain: string;
  category: string;
  apkUrl: string;
  tokenGated: boolean;
  price: string;
  appVersion: string;
}

const storageClient = makeStorageClient();
const composeConnector = new ComposeConnector();

function makeIpfsUri(cid: string) {
  return `ipfs://${cid}`;
}

export default function HookForm() {
  const { register, handleSubmit } = useForm<FormData>();

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
    const composePayload: ComposePayload = {
      title: data.title,
      description: data.description,
      appIconUrl: makeIpfsUri(appIconCid),
      previewImageUrls: [makeIpfsUri(preview1Cid), makeIpfsUri(preview2Cid)],
      chain: data.chain,
      category: data.category,
      apkUrl: makeIpfsUri(apkCid),
      tokenGated: data.tokenGated,
      price: data.price,
      appVersion: data.appVersion,
    };

    const composeCreateResp = await composeConnector.create(composePayload);
    console.log("composeCreateResp:", composeCreateResp);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Title:</p>
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full max-w-xs"
        {...register("title")}
      />
      <br />
      <p>Description:</p>
      <input
        type="text"
        placeholder="Description"
        className="input input-bordered w-full max-w-xs"
        {...register("description")}
      />
      <br />
      <p>App icon:</p>
      <input type="file" {...register("appIcon")} />
      <br />
      <p>Preview image 1:</p>
      <input type="file" {...register("preview1")} />
      <p>Preview image 2:</p>
      <input type="file" {...register("preview2")} />
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
      <p>Category:</p>
      <select className="select w-full max-w-xs" {...register("category")}>
        <option disabled selected>
          Category
        </option>
        <option>Game</option>
        <option>Dapp</option>
      </select>
      <br />
      <p>APK file:</p>
      <input type="file" {...register("apkFile")} />
      <br />
      <p>Token gating:</p>
      <input type="checkbox" className="toggle" {...register("tokenGated")} />
      <br />
      <input
        type="text"
        placeholder="Price"
        className="input input-bordered w-full max-w-xs"
        {...register("price")}
      />
      <br />
      <input
        type="text"
        placeholder="App version"
        className="input input-bordered w-full max-w-xs"
        {...register("appVersion")}
      />
      <br />

      <input className="btn btn-primary" type="submit" />
    </form>
  );
}
