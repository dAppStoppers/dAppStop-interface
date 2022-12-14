import { Carousel } from "react-responsive-carousel";
import { CeramicPayload } from "../../lib/schemas/ceramicPayload";
import image1 from "../../public/home-screen-pics/AxieInfinity.png";
import image2 from "../../public/home-screen-pics/BenjiBananas.png";
import image3 from "../../public/home-screen-pics/KarmaverseZombie.png";
import image4 from "../../public/home-screen-pics/MagicEden.png";
import image5 from "../../public/home-screen-pics/SweatCoin.png";
import image6 from "../../public/home-screen-pics/Upland.jpeg";
import { DappCard } from "../explore/DappCard";
import { transformIpfsLinkToGateway } from "../../lib/transformIpfsLinkToGateway";

interface CarouselProps {
  dapps: CeramicPayload[];
}

const Carousel_ = ({ dapps }: CarouselProps) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      autoPlay
      className="pt-3 md:px-36"
    >
      {dapps?.map((dapp) => {
        console.log("my dapp yah:", dapp);
        return (
          <div key={dapp.title}>
            <DappCard
              {...dapp}
              name={dapp.title}
              // imgSrc={transformIpfsLinkToGateway(dapp.preview_image_urls[0])}
              // description={dapp.description}
              // previewImage1={dapp.preview_image_urls[0]}
              // previewImage2={dapp.preview_image_urls[1]}
              // rating={4.7}
            />
          </div>
        );
      })}
      {/* <div>
        <DappCard imgSrc={image1.src} name="Dapp Game" rating={4.5} />
      </div>
      <div>
        <DappCard imgSrc={image2.src} name="Dapp Game" rating={4.5} />
      </div>
      <div>
        <DappCard imgSrc={image3.src} name="Dapp Game" rating={4.5} />
      </div>
      <div>
        <DappCard imgSrc={image4.src} name="Dapp Game" rating={4.5} />
      </div>
      <div>
        <DappCard imgSrc={image5.src} name="Dapp Game" rating={4.5} />
      </div>
      <div>
        <DappCard imgSrc={image6.src} name="Dapp Game" rating={4.5} />
      </div> */}
    </Carousel>
  );
};

export default Carousel_;
