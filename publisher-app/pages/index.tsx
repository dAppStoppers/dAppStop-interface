import { DappList } from "../components/explore/DappList";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <DappList />
      </div>
      <Footer />
    </>
  );
}
