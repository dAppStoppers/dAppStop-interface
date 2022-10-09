import { isAssetError } from "next/dist/client/route-loader";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccount, useContractRead } from "wagmi";
import { ChangeLog, ChangeLogProps } from "../components/detail/ChangeLog";
import { DappInfo, DappInfoProps } from "../components/detail/DappInfo";
import {
  DetailHeader,
  DetailHeaderProps,
} from "../components/detail/DetailHeader";
import {
  ImageCarousel,
  ImageCarouselProps,
} from "../components/detail/ImageCarousel";
import {
  InstallButton,
  InstallButtonProps,
} from "../components/install/InstallButton";
import { dappStopRegistry } from "../lib/dappStopRegistry";
import { transformIpfsLinkToGateway } from "../lib/transformIpfsLinkToGateway";

export default function Detail() {
  const router = useRouter();
  const data = router.query;

  const { address, isConnecting, isDisconnected } = useAccount();
  const {
    data: readData,
    isError,
    isLoading,
  } = useContractRead({
    addressOrName: "0x6e95ab8Ac7FB84baA9B54ad81D1E5b9Ea3dc19D8",
    contractInterface: dappStopRegistry.abi,
    functionName: "balanceOf",
    args: [address, data?.dappId],
    enabled: true,
  });

  useEffect(() => {
    console.log("contract read data", readData);
    console.log("iserror, ", isError);
    console.log("isloading, ", isLoading);
  }, [readData, isAssetError]);

  console.log("wtf is this data: ", data);
  const detailHeaderProps: DetailHeaderProps = { title: data.title as string };
  const installButtonProps: InstallButtonProps = {
    priceInEth: 0.1,
    purchaseNft: data.token_gated === "false",
    ipfsUri: data.apk_url,
  };
  const changeLogProps: ChangeLogProps = {
    changeLogItems: [
      {
        description: "Fix something",
        versionNumber: "1.1.1",
        date: "2021-01-01",
      },
      {
        description: "Add new feature",
        versionNumber: "1.1.0",
        date: "2021-01-01",
      },
    ],
  };
  const imageCarouselProps: ImageCarouselProps = {
    imageUrls: [
      transformIpfsLinkToGateway(data.preview_image_urls[0] as string),
      transformIpfsLinkToGateway(data.preview_image_urls[1] as string),
      // "https://placeimg.com/250/180/arch",
      // "https://placeimg.com/250/180/arch",
    ],
  };
  const dappInfoProps: DappInfoProps = {
    category: "Gaming",
    chains: ["Polygon", "Boba"],
    description: data.description as string,
    downloads: 42069,
    publisher: "publisher.eth",
    publisherIconUrl: transformIpfsLinkToGateway(data.app_icon_url as string),
    title: data.title as string,
  };

  return (
    <>
      <DetailHeader {...detailHeaderProps} />
      <DappInfo {...dappInfoProps} />
      <InstallButton {...installButtonProps} />
      <ImageCarousel {...imageCarouselProps} />
      <ChangeLog {...changeLogProps} />
    </>
  );
}
