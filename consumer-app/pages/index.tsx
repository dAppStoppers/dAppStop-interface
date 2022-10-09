import { useEffect, useState } from "react";
import { DappList } from "../components/explore/DappList";
import { AppData } from "../lib/schemas/appDataSchema";
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
      const dappData = [];
      for (const dapp of myDapps) {
        const ceramicDoc = await composeConnector.findOne(dapp.ceramicURI);
        console.log("ceramicDoc: ", ceramicDoc);
        console.log("dappId: ", dapp.id);
        const dappId = dapp.id;
        const data = { ...ceramicDoc, dappId };
        dappData.push(data);
      }
      console.log("dappData: ", dappData);
      setDapps(dappData);
    }
    getIt();
  }, []);

  return (
    <>
      <DappList dapps={dapps} />
    </>
  );
}
