import { IoMdCall } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Design() {
  return (
    <div className="flex justify-around">
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
        <img src="..\img\img.png" alt="logo" className="w-6/12 flex-end"  />
      </div>
    </div>
  );
}

export default Design;
