import { IoMdCall } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";

function Design() {
   const ClickViaChat =() =>{
       console.log("click via chat ")
    }

    const ClickViaCall =() =>{
       console.log("click via call ")
    }
   
    const onSubmit =  (event) =>{
      event.preventDefault()
      console.log(event.target[0].value)
      console.log(event.target[1].value)
      console.log(event.target[2].value)

    }

  return (
    
    <div className="flex gap-x-5">
      <div>
        <div className=" flex felx-col gap-8 mt-14 ">
            <button onClick={ClickViaChat} className="flex items-center text-2xl border border-black-500 px-6 py-2 bg-gray-900 text-slate-100 gap-2 rounded-sm">
              <IoChatbox />
              via_suppor_chat
            </button>
            <button onClick={ClickViaCall} className="flex items-center text-2xl border border-black-500 px-6 bg-gray-900 text-slate-100 gap-2 rounded-sm">
              <IoMdCall /> via_call
            </button>
           
          </div>
           <input
            type="text"
            placeholder="via email from "
            className="border-3 py-2 rounded-md border-black-900 w-full uppercase text-center text-black-900 font-bold mt-4 focus:outline-none focus:border-blue-500 "
          />
        <form className="mt-4" onSubmit={onSubmit}>
          
          <div className="relative my-5">
            <input
              type="text" name="uname"
              className="w-full px-3 py-2 border-3 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="username" 
              className="absolute -top-3 left-2 bg-white px-1 text-lg text-gray-900"
            >
              Name
            </label>
          </div>
          <div className="relative my-5">
            <input
              type="email"name="email"
              className="w-full px-3 py-2 border-3 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="username"
              className="absolute -top-3 left-2 bg-white px-1 text-lg text-gray-900"
            >
              E-mail
            </label>
          </div>
          <div>
            <div className="relative my-5">
              <textarea
                name="address"
                className="w-full px-3 py-2 border-3 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="absolute -top-3 left-2 bg-white px-1 text-lg text-gray-900"
              >
                Address
              </label>
            </div>
          </div>
          <button className="flex items-center text-2xl border border-black-500 px-6 py-2 bg-gray-900 text-s rlate-100 gap-2 rounded-sm  text-amber-50 relative right-[-315px]">Submit</button>
        </form>
      </div>
      <div>
        <img
          src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/f3baadbbaca5c4dab15b4a811e8649d1f9f79473/project-2/public/images/contact.svg"
          alt="logo"
          className=""
        />
      </div>
    </div>
  );
}

export default Design;
