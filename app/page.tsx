"use client";

import { Card, NavBar } from "@/components";
import { BsPlusLg } from "react-icons/bs";
import ReactGridLayout from "react-grid-layout";

const DUMMY_DATA = [
  {
    progress: 80,
    name: "Hanover North Cambridge",
    date: "9 May '23",
  },
  {
    progress: 12,
    name: "Kilsyth Manor Apartments",
    date: "19 May '23",
  },
  { progress: 40, name: "Ashlar Park", date: "23 May '23" },
  { progress: 60, name: "The Bon", date: "8 May '23" },
];

export default function Home() {
  return (
    <main className="w-full h-full bg-white flex flex-row overflow-hidden">
      <NavBar />
      <div className="w-full h-full">
        <div className="w-full h-40 pt-6 px-10 border-b border-neutral-300 flex flex-col justify-between items-start">
          <div></div>
          <span className="text-4xl font-medium">Main Dashboard</span>
          <div className="flex flex-row space-x-10 text-xs text-neutral-500">
            <span className="border-b-2 border-indigo-400 py-2 text-indigo-400 cursor-pointer">
              Active
            </span>
            <span className="py-2 cursor-pointer">Closed</span>
            <span className="py-2 cursor-pointer">Notifications</span>
          </div>
        </div>
        <div className="w-full flex flex-col px-10 my-10">
          <div>
            <span className="px-6 py-3 bg-neutral-100 text-neutral-500 text-sm rounded-md inline-flex justify-center items-center space-x-4 cursor-pointer transition duration-300 ease-in-out hover:shadow hover:text-neutral-600">
              <BsPlusLg /> <span>New Transaction</span>
            </span>
          </div>
          <div className="mt-10 flex">
            <span className="text-lg text-neutral-600">
              Recent Transactions
            </span>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-6">
            {DUMMY_DATA.map((props, index: number) => (
              <Card index={index} {...props} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
