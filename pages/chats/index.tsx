import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      <div className="px-4 flex mb-3 py-3 cursor-pointer items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-slate-300" />
        <div>
          <p className="text-medium font-medium text-gray-700">Steve Jebs</p>
          <p className="text-sm font-medium text-gray-500">
            See you tomorrow in the corner at 2pm!
          </p>
        </div>
      </div>
      <div className="px-4 flex mb-3 py-3 cursor-pointer items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-slate-300" />
        <div>
          <p className="text-medium font-medium text-gray-700">Steve Jebs</p>
          <p className="text-sm font-medium text-gray-500">
            See you tomorrow in the corner at 2pm!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
