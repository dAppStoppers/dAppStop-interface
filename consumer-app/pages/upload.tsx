export default function Upload() {
  return (
    <>
    <div>
      <h1 className="text-4xl">Publish your app</h1>

      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">Title</span>
        </label>
        <label className="input-group">
          <input type="text" placeholder="App name" className="input input-bordered" />
        </label>
      </div>

      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">Description</span>
        </label>
        <label className="input-group">
          <textarea className="textarea textarea-bordered" placeholder="App description"></textarea>
        </label>
      </div>

      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">App icon</span>
        </label>
        <label className="uploader-group">
        <img src="/icons/Image-upload-square.svg" alt="image uploader"/>
        </label>
      </div>

      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">Preview images (up to 6)</span>
        </label>
        <label className="uploader-group flex">
        <img src="/icons/Image-uploader-rectangle.svg" className="mr-4" alt="image uploader"/>
        <img src="/icons/Image-uploader-rectangle.svg" className="mr-4" alt="image uploader"/>
        <img src="/icons/Image-uploader-rectangle.svg" className="mr-4" alt="image uploader"/>
        <img src="/icons/Image-uploader-plus.svg" alt="image uploader"/>
        </label>
      </div>

      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">Chain</span>
        </label>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">Select a chain 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a><img src="/icons/MATIC.png" className="w-8" alt="MATIC"/>Polygon</a></li>
              <li><a><img src="/icons/optimism.svg" className="w-8" alt="optimism"/>Optimism</a></li>
              <li><a><img src="/icons/Klaytn.png" className="w-8" alt="Klaytn"/>Klaytn</a></li>
            </ul>
          </div>
      </div>

      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">Category</span>
        </label>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">Select a category
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Game</a></li>
              <li><a>dApp</a></li>
            </ul>
          </div>
      </div>

      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">APK file</span>
        </label>
        <label className="uploader-group">
        <img src="/icons/apk-uploader.svg" alt="image uploader"/>
        </label>
      </div>

      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">Token-gated</span>
        </label>
        <div className="form-control mb-5">
          <label className="label cursor-pointer">
            <span className="label-text text-base">If you turn it on, we will generate non-transferrable NFT (ERC-1155) and users need to buy it for installing your app.</span> 
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
      </div>

      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">Price</span>
        </label>
        <label className="input-group flex">
          <input type="text" placeholder="0.10" className="input input-bordered" />
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">Token
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a><img src="/icons/ETH.png" className="w-8" alt="ETH"/>ETH</a></li>
              <li><a><img src="/icons/MATIC.png" className="w-8" alt="MATIC"/>MATIC</a></li>
            </ul>
          </div>
        </label>
      </div>


      <div className="form-control mb-5">
        <label className="label">
          <span className="label-text text-lg">App version</span>
        </label>
        <label className="input-group">
          <input type="text" placeholder="1.0.0" className="input input-bordered" />
        </label>
      </div>


      <button className="btn btn-primary">Publish New App</button>

    </div>
    </>
  );
}
