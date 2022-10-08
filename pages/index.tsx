import { DappList } from "../components/dappList";
import { NavigationBar } from "../components/navigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="container mx-auto px-4">
        <DappList />
      </div>
    </>
  );
}
