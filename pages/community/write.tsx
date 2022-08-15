import type { NextPage } from "next";
import Layout from "../../components/layout";

const Write: NextPage = () => {
  return (
    <Layout title="Community" canGoBack>
      <form className="px-4 py-10">
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-400 rounded-md focus:!outline-none border-gray-300 focus:border-orange-400"
          rows={4}
          placeholder="Ask a question"
        />
        <button className="mt-2 w-full flex-1 bg-orange-400 text-white py-3 rounded-md font-medium hover:bg-orange-500 focus:!outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Write;
