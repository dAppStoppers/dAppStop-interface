import { useEffect, useState } from "react";
import { DappList } from "../components/explore/DappList";
import { ComposeConnector } from "../services/ComposeConnector.service";
import { getDapps } from "../services/graphql.service";

const composeConnector = new ComposeConnector();

export default function Home() {
  const [dapps, setDapps] = useState<any>(null);

  useEffect(() => {
    async function getIt() {
      const resp = await getDapps();
      console.log("resp: ", resp?.data.dapps);

      const myDapps = resp?.data.dapps;
      const ceramicDocs = [];
      for (const dapp of myDapps) {
        const ceramicDoc = await composeConnector.findOne(dapp.ceramicURI);
        ceramicDocs.push(ceramicDoc);
      }
      console.log("ceramicDocs: ", ceramicDocs);
      setDapps(ceramicDocs);
    }
    getIt();
  }, []);

  return (
    <>
      <DappList dapps={dapps} />
    </>
  );
}
