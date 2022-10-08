import { useAccount } from "wagmi";

export default function Profile() {
  const { address } = useAccount();

  if (address) {
    return <div>Connected to {address}</div>;
  } else {
    return <p>Not connected, click connect up there</p>;
  }
}
