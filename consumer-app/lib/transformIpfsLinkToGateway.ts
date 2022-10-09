export function transformIpfsLinkToGateway(ipfsUri: string) {
  return ipfsUri.replace("ipfs://", "https://ipfs.io/ipfs/");
}
