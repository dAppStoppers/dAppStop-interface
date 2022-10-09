export interface InstallButtonProps {
  priceInEth: number;
}

export const InstallButton = ({ priceInEth }: InstallButtonProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
      <label htmlFor="my-modal-6" className="btn modal-button btn-primary mt-4 mb-4">
        Install for {priceInEth} ETH
      </label>
      </div>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Dapp name here</h3>
          <p className="py-2">
            This dapp will cost {priceInEth} ETH to install.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-primary mb-16">
              Install
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
