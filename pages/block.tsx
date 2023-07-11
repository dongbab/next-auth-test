import type { NextPage } from "next";
import Layout from "@/components/layout";
import Link from "next/link";

const Block: NextPage = () => {
    return (
    <Layout hasTabBar canGoBack title="사용자 차단 목록">
        {[1, 1, 1, 1].map((_, i) => (
        <div key={i} className="px-4 border-b">
            <div className="flex items-center space-x-3 rounded-lg px-3 py-3">
                <div className="h-12 w-12 rounded-full bg-gray-500" />
                <div className="flex-col-2 flex px-4">
                <span className="text-md font-bold text-gray-900">김혜수</span>
                </div>
                <div className="flex flex-grow justify-end"></div>
                <button className="rounded-lg bg-black px-4 py-2 text-sm text-white shadow-sm">
                차단해제
                </button>
            </div>
        </div>
        ))}
    </Layout>

    );
};
export default Block;
