import React from "react";
import image1 from "../../public/home-screen-pics/AxieInfinity.png";
import image2 from "../../public/home-screen-pics/BenjiBananas.png";
import image3 from "../../public/home-screen-pics/KarmaverseZombie.png";
import image4 from "../../public/home-screen-pics/MagicEden.png";
import image5 from "../../public/home-screen-pics/SweatCoin.png";
import image6 from "../../public/home-screen-pics/Upland.jpeg";


const DappCardListed = () => {
  return (
    <>
      <p style={{ color: "white", fontSize: "1.5rem" }} className={"pb-3 pl-7"}>
        Newest
      </p>
      <div className="flex justify-start">
        <div>
          <div
            className="flex items-center justify-between  ml-7 pt-10 mb-16"
            style={{ maxHeight: "50px" }}
          >
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                <img src={image1.src} alt="Avatar Tailwind CSS Component" />
              </div>
              <div className="pl-4 text-lg font-semibold">
                <h3>Axie Infinity</h3>
                <div className="badge badge-secondary py-2 mt-1">
                  4.5{" "}
                  <span className="pl-2 " style={{ fontSize: "10px" }}>
                    ⭐
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="flex items-center justify-between  ml-7 pt-10 mb-16"
            style={{ maxHeight: "50px" }}
          >
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
              <img src={image2.src} alt="Avatar Tailwind CSS Component" />
              </div>
              <div className="pl-4 text-lg font-semibold">
                <h3>Benji Bananas</h3>
                <div className="badge badge-secondary py-2 mt-1">
                  4.5{" "}
                  <span className="pl-2 " style={{ fontSize: "10px" }}>
                    ⭐
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div
            className="flex items-center justify-between  ml-7 pt-10 mb-16"
            style={{ maxHeight: "50px" }}
          >
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
              <img src={image3.src} alt="Avatar Tailwind CSS Component" />
              </div>
              <div className="pl-4 text-lg font-semibold">
                <h3>Karmaverse Zombie</h3>
                <div className="badge badge-secondary py-2 mt-1">
                  4.5{" "}
                  <span className="pl-2 " style={{ fontSize: "10px" }}>
                    ⭐
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          <div
            className="flex items-center justify-between  ml-7 pt-10 mb-16"
            style={{ maxHeight: "50px" }}
          >
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
              <img src={image4.src} alt="Avatar Tailwind CSS Component" />
              </div>
              <div className="pl-4 text-lg font-semibold">
                <h3>Magic Eden</h3>
                <div className="badge badge-secondary py-2 mt-1">
                  4.5{" "}
                  <span className="pl-2 " style={{ fontSize: "10px" }}>
                    ⭐
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-between  ml-7 pt-10 mb-16"
            style={{ maxHeight: "50px" }}
          >
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
              <img src={image5.src} alt="Avatar Tailwind CSS Component" />
              </div>
              <div className="pl-4 text-lg font-semibold">
                <h3>Sweat Coin</h3>
                <div className="badge badge-secondary py-2 mt-1">
                  4.5{" "}
                  <span className="pl-2 " style={{ fontSize: "10px" }}>
                    ⭐
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-between  ml-7 pt-10 mb-16"
            style={{ maxHeight: "50px" }}
          >
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
              <img src={image6.src} alt="Avatar Tailwind CSS Component" />
              </div>
              <div className="pl-4 text-lg font-semibold">
                <h3>Upland</h3>
                <div className="badge badge-secondary py-2 mt-1">
                  4.5{" "}
                  <span className="pl-2 " style={{ fontSize: "10px" }}>
                    ⭐
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-between  ml-7 pt-10 mb-16"
            style={{ maxHeight: "50px" }}
          >
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
              <img src={image2.src} alt="Avatar Tailwind CSS Component" />
              </div>
              <div className="pl-4 text-lg font-semibold">
                <h3>Benji</h3>
                <div className="badge badge-secondary py-2 mt-1">
                  4.5{" "}
                  <span className="pl-2 " style={{ fontSize: "10px" }}>
                    ⭐
                  </span>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default DappCardListed;
