import Image from "next/image";
import UserNav from "@/component/Navbar/UserNav";
import Link from 'next/link';
import QuantityInput from "@/component/ui/InputNumber";

import React, { useState } from 'react';
import Modal from "@/component/ui/Modal";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Wait() {
    return (
        <>
            <UserNav />
            <div className="mt-74px">
                <h1 className="pt-8 pb-8 w-full flex justify-center text-3xl font-semibold ">Wait</h1>
            </div>
            <div className="bg-gray-200 ml-20 mr-20 pb-1 rounded-md">
                {/* ช่องๆๆๆ */}
                <div className="flex justify-between border-b-2 border-gray-500">
                    {/* product */}
                    <div className="mt-5 mb-5 ml-10">
                        <div className="flex flex-row">
                            <Image
                                className="object-cover border-2 border-black"
                                src="/game1.png"
                                width={100}
                                height={100}
                                alt="Picture of Party game"
                            />
                            <div className=" ml-4 flex flex-col justify-center">
                                <h1 className="pb-5">name</h1>
                            </div>
                        </div>
                    </div>
                    {/* price */}
                    <div className="flex items-center jutify-center">
                        <h1 className="pb-5 mr-10">20$</h1>
                    </div>
                </div>
                <div className="mt-3 ml-5 mr-5 flex justify-between">
                    <Link href="/home">
                        <button
                            className="inline-flex  items-center justify-center bg-[#ED3C3C] hover:bg-[#FCC362] text-white font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                                    focus:shadow font-medium mb-5 mt-3 ">
                            Cancle Order
                        </button>
                    </Link>
                    <Link href="/home">
                        <button
                            className="inline-flex  items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                                    focus:shadow font-medium mb-5 mt-3 ">
                            Back to home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
