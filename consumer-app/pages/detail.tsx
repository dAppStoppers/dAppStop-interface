import { ChangeLog, ChangeLogProps } from "../components/detail/ChangeLog";
import { Header, HeaderProps } from "../components/detail/Header";
import {
  ImageCarousel,
  ImageCarouselProps,
} from "../components/detail/ImageCarousel";
import {
  InstallButton,
  InstallButtonProps,
} from "../components/detail/InstallButton";

export default function Detail() {
  const headerProps: HeaderProps = { title: "Dummy Title" };
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

  return (
    <>
      <Header {...headerProps} />
      <InstallButton {...installButtonProps} />
      <ImageCarousel {...imageCarouselProps} />
      <ChangeLog {...changeLogProps} />
    </>
  );
}
