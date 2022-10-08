export default function Profile() {
  return (
    <div className="pb-10 md:pb-24">
      <img
        src="/icons/cover-image.png"
        className="object-cover w-full pl-0 pr-0"
        alt="Avatar Tailwind CSS Component"
      />
      <div className="md:ml-20 px-5 ">
        <img
          src="/icons/game-studio.png"
          alt="Avatar Tailwind CSS Component"
          style={{
            height: "150px",
            width: "150px",
            position: "sticky",
            marginTop: "-5rem"
          }}
        />
        <p className="pt-2">Game studio name</p>
        <p className="pt-0" style={{ color: "#F4511E" }}>
          @gamestudio.eth
        </p>
      </div>
      <div className="flex justify-between pt-10 pb-5 mx-5">
        <p style={{ fontSize: "1.5rem" }}>Published App</p>
        <button className="btn btn-primary">Publish New App</button>
      </div>
      <div
        className="overflow-x-auto mx-5"
        style={{
          borderRadius: ".5rem",
          border: "1px solid rgba(255, 255, 255, 0.15)"
        }}
      >
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>

              <th>Title</th>
              <th>Category</th>
              <th>Download</th>
              <th>Version</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <div />
            <tr
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                width: "100%"
              }}
            >
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/icons/test-app.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Good dApp</td>
              <td>dApp</td>
              <td>100k</td>
              <td>1.0.0</td>
              <td>
                <button className="btn btn-outline btn-white">
                  Edit/Update
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/icons/test-app.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Bad Game</td>
              <td>Game</td>
              <td>1080</td>
              <td>1.2.0</td>
              <td>
                <button className="btn btn-outline btn-white">
                  Edit/Update
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/icons/test-app.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>Good Game</td>
              <td>Game</td>
              <td>52,200</td>
              <td>2.4.6</td>
              <td>
                <button className="btn btn-outline btn-white">
                  Edit/Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
