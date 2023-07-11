import type { NextPage } from "next";
import Layout from "@/components/layout";
import Link from "next/link";

const Money: NextPage = () => {
    return (
    <Layout hasTabBar canGoBack title="가상 머니 충전">
        <div className="mt-4 px-4 py-4 flex items-center">
            <p className=" mr-4 px-8 text-sm font-semibold text-gray-700">가상 머니 잔액</p>
            <div className="relative flex items-center rounded-lg shadow-sm">
                <div className="flex flex-col cursor-pointer items-center space-x-3 rounded-lg border border-gray-300 shadow-sm px-24 py-2">30000원</div>
            </div>
        </div>
        <div className="px-4 py-4 flex items-center">
            <p className=" mr-4 px-10 text-sm font-semibold text-gray-700">충전할 금액</p>
            <div className="relative flex items-center rounded-lg shadow-sm">
            <input className="flex flex-col text-center cursor-pointer items-center rounded-lg border border-gray-300 shadow-sm px-10 py-2"/>
            </div>
        </div>
        <div className="mt-52 border-2 border-transparent rounded-md bg-black py-3 font-medium text-center text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1 ">충전하기</div>
        <div className="mt-4 border-2 border-gray-300 rounded-md bg-white py-3 font-medium text-center text-blacks hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1 ">취소하기</div>
    </Layout>
    );
};
export default Money;