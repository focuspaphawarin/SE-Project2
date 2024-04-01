'use client'

import Image from "next/image";
import UserNav from "@/component/Navbar/UserNav";

import QuantityInput from "@/component/ui/InputNumber";

import React, { useState } from 'react';
import Modal from "@/component/ui/Modal";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function Cart() {

    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <UserNav />
            <div className="mt-74px">
                <h1 className="pt-8 pb-8 w-full flex justify-center text-3xl font-semibold ">YOUR CART</h1>
            </div>
            {/* Title */}
            <div className="flex justify-around border-b-2 border-gray-500 pb-1">
                <h1>product</h1>
                <h1>amount</h1>
                <h1>price</h1>
                <h1>total price</h1>
            </div>
            {/* cart */}
            <div className="flex justify-around border-b-2 border-gray-500 pb-1">
                {/* product */}
                <div className="mt-5 mb-5">
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
                            <div className="pt-2 ">
                                <button
                                    className="text-[#ED3C3C]">
                                    remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* amount */}
                <div className=" flex jutify-item-center">
                    <QuantityInput />
                </div>
                {/* price */}
                <div>

                </div>
                {/* totalprice */}
                <div>

                </div>

            </div>
            {/* total */}
            <div>
                <div className="flex items-center justify-center ">
                    <button
                        className="inline-flex items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                                focus:shadow font-medium mb-5 mt-3"
                        onClick={() => setOpen(true)}
                    >
                        Submit
                    </button>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <Image
                                className="object-cover"
                                src="/check.png"
                                width={200}
                                height={200}
                                alt="Picture of Check"
                            />
                            <p>Order Complete Successfully</p>
                            <p>Thank You!</p>
                        </div>
                    </Modal>
                </div>
            </div>

        </>
    );
}