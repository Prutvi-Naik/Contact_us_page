import { IoMdCall } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";

function Design() {
  return (
    <div className="flex gap-5">
      <div>
        <form className="mt-14">
          <div className=" flex felx-col gap-8 ">
            <button className="flex items-center text-2xl border border-black-500 px-6 py-2 bg-gray-900 text-slate-100 gap-2 rounded-sm">
              <IoChatbox />
              via_suppor_chat
            </button>
            <button className="flex items-center text-2xl border border-black-500 px-6 bg-gray-900 text-slate-100 gap-2 rounded-sm">
              <IoMdCall /> via_call
            </button>
          </div>
            <input type="text" placeholder="via email from " className="border border-3 py-2 rounded-sm border-black-900 w-full uppercase text-center text-black-900 font-bold mt-4 "/>
        </form>
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/f3baadbbaca5c4dab15b4a811e8649d1f9f79473/project-2/public/images/contact.svg" alt="logo" className=""  />
      </div>
    </div>
  );
}

export default Design;
