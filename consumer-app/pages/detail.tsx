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

export default function Detail() {
  const detailHeaderProps: DetailHeaderProps = { title: "Dummy Title" };
  const installButtonProps: InstallButtonProps = { priceInEth: 0.1 };
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
      "https://placeimg.com/250/180/arch",
      "https://placeimg.com/250/180/arch",
      "https://placeimg.com/250/180/arch",
    ],
  };
  const dappInfoProps: DappInfoProps = {
    category: "Gaming",
    chains: ["Polygon", "Boba"],
    description: "Here is a description of the dapp.",
    downloads: 42069,
    publisher: "publisher.eth",
    publisherIconUrl: "https://placeimg.com/250/180/arch",
    title: "My Cool Game",
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
