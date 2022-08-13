import type { NextPage } from "next";

const CommuityPostDetail: NextPage = () => {
  return (
    <div className="px-5">
      <span className=" inline-flex my-3 items-center px-2.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        Any Question
      </span>
      <div className="flex mb-3 py-3 cursor-pointer border-b items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-slate-300" />
        <div>
          <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
          <p className="text-xs font-medium text-gray-500">
            View profile &rarr;
          </p>
        </div>
      </div>
      <div>
        <div className="mt-2 text-gray-700">
          <span className="text-orange-400 font-medium">Q.</span> What is the
          best mandu restaurant?
        </div>
        <div className="flex space-x-5 mt-3 text-gray-800 py-2.5 border-t border-b-[2px] w-full">
          <span className="flex space-x-2 items-center">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Like 1</span>
          </span>
          <span className="flex space-x-2 items-center">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>Comment 1</span>
          </span>
        </div>
      </div>
      <div className="px-4 my-5 space-x-5">
        <div className="flex items-start space-x-3">
          <div className="w-9 h-9 bg-slate-200 rounded-full" />
          <div>
            <span className="text-sm block font-medium text-gray-700">
              Steve Jebs
            </span>
            <span className="text-xs text-gray-500">2 Hours ago</span>
            <p className="text-gray-700 mt-2">
              The best mandu restaurant is the one next
            </p>
          </div>
        </div>
      </div>
      <div>
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-400 rounded-md focus:!outline-none border-gray-300 focus:border-orange-400"
          rows={4}
          placeholder="Answer this question"
        />
        <button className="mt-2 w-full flex-1 bg-orange-400 text-white py-3 rounded-md font-medium hover:bg-orange-500 focus:!outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
          Reply
        </button>
      </div>
    </div>
  );
};
export default CommuityPostDetail;
