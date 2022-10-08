export interface InstallButtonProps {
  priceInEth: number;
}

export const InstallButton = ({ priceInEth }: InstallButtonProps) => {
  return (
    <button className="btn btn-accent">Install for {priceInEth} ETH</button>
  );
};
