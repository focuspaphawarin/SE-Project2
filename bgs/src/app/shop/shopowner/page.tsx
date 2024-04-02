'use client';


import Image from "next/image";
import UserNav from "@/component/Navbar/UserNav";
import Link from 'next/link';


import React, { useState } from 'react';

import CancleOrder from "@/component/ui/CancleOrder";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Wait() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <UserNav />
            <div className="mt-74px ml-5 mr-5 flex justify-between">
                <div className="">
                    <h1 className="pt-8 pb-8 w-full flex justify-center text-3xl font-semibold ">Hello</h1>
                </div>
                <div className="mt-8">
                    <Link href="/shop/add">
                        <button
                            className="inline-flex items-center justify-center bg-white-400 hover:bg-gray-100 text-[#0899E7] font-bold py-2 px-4 border border-2 border-[#0899E7] rounded-full text-lg 
                                    font-medium 
                                "
                        >
                            Add +
                        </button>
                    </Link>
                </div>
            </div>
            <div className="bg-[#FFF1C6] rounded-lg ml-20 mr-20 pb-1 ">
                <div className="bg-[#FCC362] flex justify-around pb-1 rounded-t-lg text-lg font-medium text-white">
                    <h1>product</h1>
                    <h1>stock</h1>
                    <h1>edit</h1>
                    <h1>delete</h1>
                </div>
                {/* ช่องๆๆๆ */}
                <div className="flex justify-between">
                    {/* product */}
                    <div className="mt-5 mb-5 ml-10">
                        <div className="flex flex-row">
                            <Image
                                className="object-cover border-2 border-black rounded-lg"
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
                    {/* stock */}
                    <div className="flex items-center jutify-center">
                        <h1 className="pb-5 mr-10">100</h1>
                    </div>
                    {/* edit */}
                    <div className="flex items-center jutify-center">
                        <Link href="/shop/edit">
                            <Image
                                className="object-cover"
                                src="/bin.png"
                                width={40}
                                height={40}
                                alt="Picture of Edit"
                            />
                        </Link>
                    </div>
                    {/* delete */}
                    <div className="flex items-center jutify-center mr-10">
                        <Image
                            className="object-cover" onClick={() => setOpen(true)}
                            src="/bin.png"
                            width={40}
                            height={40}
                            alt="Picture of Bin"
                        />
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
                                    <h3 className="text-lg font-black text-gray-800">Are you sure ?</h3>
                                    <p className="text-sm text-gray-500">
                                        please be advised that once you click'Cancel Order' ,the transaction cannot be undone. Make sure you are certaion about your decision before proceeding.Thank you for your understanding.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="btn btn-light w-full"
                                        onClick={() => setOpen(false)}
                                    >
                                        No
                                    </button>
                                    <button className="btn btn-danger w-full">Yes</button>
                                </div>
                            </div>
                        </CancleOrder>
                    </div>
                </div>
            </div>
        </>
    );
}
