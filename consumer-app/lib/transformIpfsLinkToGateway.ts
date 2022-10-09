export function transformIpfsLinkToGateway(ipfsUri: string) {
  return ipfsUri.replace(
    "ipfs://",
    "https://propertys-nft.mypinata.cloud/ipfs/"
  );
}
