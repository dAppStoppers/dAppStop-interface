export interface InstallButtonProps {
  priceInEth: number;
}

export const InstallButton = ({ priceInEth }: InstallButtonProps) => {
  return (
    <>
      <label htmlFor="my-modal-6" className="btn modal-button btn-primary">
        Install for {priceInEth} ETH
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Dapp name here</h3>
          <p className="py-4">
            This dapp will cost {priceInEth} ETH to install.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-primary">
              Install
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
