'use client';

import Image from "next/image";
import UserNav from "@/component/Navbar/UserNav";
import Link from 'next/link';
import React, { useState } from 'react';
import CancleOrder from "@/component/ui/CancleOrder";
import 'reactjs-popup/dist/index.css';

export default function Wait() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <UserNav />
            <div className="mt-74px">
                <h1 className="pt-8 pb-8 w-full flex justify-center text-3xl font-semibold ">
                    Waiting for Shipment
                </h1>
            </div>
            <div className="bg-gray-200 ml-20 mr-20 pb-1 rounded-md">
                <div className="flex justify-between border-b-2 border-gray-500">
                    {/* product */}
                    <div className="mt-5 mb-5 ml-10">
                        <div className="flex flex-row">
                            <Image
                                className="object-cover border-2 border-black"
                                src="/ProjectL.png"
                                width={100}
                                height={100}
                                alt="Picture of Party game"
                            />
                            <div className=" ml-4 flex flex-col justify-center">
                                <h1 className="pb-5">Project L</h1>
                            </div>
                        </div>
                    </div>
                    {/* price */}
                    <div className="flex items-center jutify-center">
                        <h1 className="pb-5 mr-10">1440</h1>
                    </div>
                </div>
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
                                <h1 className="pb-5">Cat In The Box</h1>
                            </div>
                        </div>
                    </div>
                    {/* price */}
                    <div className="flex items-center jutify-center">
                        <h1 className="pb-5 mr-10">2200</h1>
                    </div>
                </div>
                <div className="mt-3 ml-5 mr-5 flex justify-between">
                    <button
                        className="inline-flex  items-center justify-center bg-[#ED3C3C] 
                        hover:bg-[#FCC362] text-white font-bold py-1 px-2 border border-b-2 
                        border-gray-600 rounded-full shadow-2xl text-lg 
                        focus:shadow font-medium mb-5 mt-3 "
                        onClick={() => setOpen(true)}
                    >
                        Cancle Order
                    </button>
                    <CancleOrder open={open} onClose={() => setOpen(false)}>
                        <div className="text-center w-56">
                            
                            <div className="mx-auto my-4 w-48">
                                <Image
                                    className="object-cover"
                                    src="/confirm.png"
                                    width={200}
                                    height={200}
                                    alt="Picture of confirm"
                                />
                                <h3 className="text-lg font-black text-gray-800">
                                    Are you sure ?
                                </h3>
                                <p className="text-sm text-gray-500">
                                    please be advised that once you click'Cancel Order'
                                    ,the transaction cannot be undone. Make sure you are
                                     certaion about your decision before proceeding.
                                     Thank you for your understanding.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="btn btn-light w-full"
                                    onClick={() => setOpen(false)}
                                >
                                    No
                                </button>
                                <button className="btn btn-danger w-full">
                                    Yes
                                </button>
                            </div>
                        </div>
                    </CancleOrder>
                    <Link href="/home">
                        <button
                            className="inline-flex  items-center justify-center bg-[#0899E7] 
                            hover:bg-[#0B87B2] text-white font-bold py-1 px-2 border border-b-2 
                            border-gray-600 rounded-full shadow-2xl text-lg 
                            focus:shadow font-medium mb-5 mt-3 ">
                            Back to home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
