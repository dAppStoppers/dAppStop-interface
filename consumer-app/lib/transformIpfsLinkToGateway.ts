export function transformIpfsLinkToGateway(ipfsUri: string) {
  if (ipfsUri) {
    return ipfsUri.replace(
      "ipfs://",
      "https://propertys-nft.mypinata.cloud/ipfs/"
    );
  } else {
    return "";
  }
}
