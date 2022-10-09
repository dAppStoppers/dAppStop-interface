import { useEffect, useState } from "react";
import { DappList } from "../components/explore/DappList";
import { getDapps } from "../services/graphql.service";

export default function Home() {
  const [dapps, setDapps] = useState<any>(null);

  useEffect(() => {
    async function getIt() {
      const resp = await getDapps();
      console.log("resp: ", resp);
      setDapps(resp);
    }
    getIt();
  }, []);

  return (
    <>
      <DappList />
    </>
  );
}
