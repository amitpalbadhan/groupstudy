import Header from "../Header"

const Demo = () => {
  return (
    <div className="h-screen">
      <Header title="GROUPSTUDY" />
      <main className="mx-24 my-12">
        <div className="flex m-5 w- py-6 px-12 bg-white rounded-xl shadow-xl justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-700">ULHacks</h1>
            <p className="text-sm mt-2 text-gray-700">Computer Science (Grade 12)</p>
            <p className="text-sm italic mt-2 text-gray-700">4 / 20</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{width: "20%"}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"></div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="px-5">
              <img className="rounded-full w-28 h-28 shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
            </div>
            <div className="px-5">
              <img className="rounded-full w-28 h-28 shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500" src="https://randomuser.me/api/portraits/men/54.jpg" alt="" />
            </div>
            <div className="px-5">
              <img className="rounded-full w-28 h-28 shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500" src="https://randomuser.me/api/portraits/men/94.jpg" alt="" />
            </div>
            <div className="px-5">
              <img className="rounded-full w-28 h-28 shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500" src="https://randomuser.me/api/portraits/women/34.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="m-5 w- p-6 bg-white rounded-xl shadow-xl justify-around items-center">
          <h1 className="text-black text-2xl flex justify-center border-b-2 py-2 mb-4">Chat</h1>
          <div className="py-5">
            <div className="chat-message">
              <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">i just can't figure it out :/ how do you invert a binary tree?</span></div>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="My profile" className="w-6 h-6 rounded-full order-2" />
              </div>
            </div>
            <div className="chat-message pb-5">
              <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">An inversion, or mirror, of a Binary Tree (T),​ is just a Binary Tree M(T) whose left and right children (of all non-leaf nodes) are swapped.</span></div>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/94.jpg" alt="My profile" className="w-6 h-6 rounded-full order-1" />
              </div>
            </div>
            <div className="chat-message">
              <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">It can be tricky, try reading this and let me know if you're still confused.</span></div>
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">https://www.educative.io/edpresso/how-to-invert-a-binary-tree</span></div>
                  </div>
                  <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="My profile" className="w-6 h-6 rounded-full order-1" />
              </div>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Write Something" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Demo
