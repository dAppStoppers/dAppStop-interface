import * as PushAPI from "@pushprotocol/restapi";
import { useSigner, chain, useAccount } from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Alerts() {
  const { data: signer } = useSigner();
  const { address } = useAccount();
  const _signer: any = signer;
  console.log(_signer);
  console.log(chain);
  const _address: any = address;

  const notify = () => toast("Thanks for subscribing!");

  const subscribe = async () => {
    await PushAPI.channels.subscribe({
      signer: _signer,
      channelAddress: "eip155:5:0xB0853B57326e08aA536663D6aC78304c0b3E38Da", // channel address in CAIP
      userAddress: _address, // user address in CAIP
      onSuccess: () => {
        notify();
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging"
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container flex justify-center">
        <div className="flex flex-col justify-center items-center pt-8">
          <img
            src="/icons/push.svg"
            className="place-items-center justify-center m-4"
            alt="Avatar Tailwind CSS Component"
          />
          <p className="text-xl font-bold text-center m-4">
            Subscribe push notification and receive updates from dApps
          </p>
          <p className="text-lg text-center m-4">
            You will receive updates from dApps and games you downloaded. You
            can check it through Push Protocol App.
          </p>
          <button
            onClick={subscribe}
            className="btn btn-primary m-4 place-content-center"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
