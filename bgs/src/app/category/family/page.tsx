
'use client'

import Image from "next/image";
import UserNav from "@/component/Navbar/UserNav";

export default function Family() {
    return (
        <>
        <UserNav />
        <div className="mt-74px">
            <div className="mt-5">
                <div className="ml-10 mr-10 pt-3 pb-3 text-3xl font-semibold">Family Board Games</div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
                                    alt="Picture of ThatNotHat game"
                                />
                                <h1 className="mt-3 flex text-lg font-semibold">Cat In The Box</h1>
                                <h1 className="flex text-sm font-semibold">1100.00 Baht</h1>
                                <div className="flex items-center justify-center ">
                                    <button
                                        className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                                focus:shadow font-medium mb-5 mt-3 ">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="ml-10 mr-10 ">
                            <Image
                                    className="object-cover border-2 border-black"
                                    src="/ProjectL.png"
                                    width={300}
                                    height={300}
                                    alt="Picture of ThatNotHat game"
                                />
                                <h1 className="mt-3 flex text-lg font-semibold">Project L</h1>
                                <h1 className="flex text-sm font-semibold">1440.00 Baht</h1>
                                <div className="flex items-center justify-center ">
                                    <button
                                        className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                                focus:shadow font-medium mb-5 mt-3 ">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/spendor.jpg"
                                    width={300}
                                    height={300}
                                    alt="Picture of ThatNotHat game"
                                />
                                <h1 className="mt-3 flex text-lg font-semibold">Splendor</h1>
                                <h1 className="flex text-sm font-semibold">1500.00 Baht</h1>
                                <div className="flex items-center justify-center ">
                                    <button
                                        className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                            focus:shadow font-medium mb-5 mt-3 ">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            {/* <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/ThatNotHat.jpg"
                                    width={200}
                                    height={200}
                                    alt="Picture of ThatNotHat game"
                                />
                                <h1 className="mt-3 flex text-lg font-semibold">That’s Not a Hat</h1>
                                <h1 className="flex text-sm font-semibold">price </h1>
                                <div className="flex items-center justify-center ">
                                    <button
                                        className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                            focus:shadow font-medium mb-5 mt-3 ">
                                        Add to cart
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="flex flex-row justify-center">
                        <div className="ml-10 mr-10 ">
                            <Image
                                className="object-cover border-2 border-black"
                                src="/Bubbly.jpg"
                                width={300}
                                height={300}
                                alt="Picture of ThatNotHat game"
                            />
                            <h1 className="mt-3 flex text-lg font-semibold">Bubbly</h1>
                            <h1 className="flex text-sm font-semibold">450.00 Baht </h1>
                            <div className="flex items-center justify-center ">
                                <button
                                    className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                            focus:shadow font-medium mb-5 mt-3 ">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        
                        </div> */}
                    </div>
                </div>
            
        
    </>
    );
  }