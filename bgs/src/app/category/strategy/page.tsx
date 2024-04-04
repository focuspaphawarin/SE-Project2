'use client'

import Image from "next/image";
import UserNav from "@/component/Navbar/UserNav";


export default function Strategy() {
    return (
        <>
        <UserNav />
        <div className="mt-74px">
            <div className="mt-5">
                <div className="ml-10 mr-10 pt-3 pb-3 text-3xl font-semibold">Strategy Board Games</div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                        <div className="ml-10 mr-10 ">
                            <Image
                                className="object-cover border-2 border-black"
                                src="/friday.jpg"
                                width={300}
                                height={300}
                                alt="Picture of ThatNotHat game"
                            />
                            <h1 className="mt-3 flex text-lg font-semibold">Friday</h1>
                            <h1 className="flex text-sm font-semibold">790.00 Baht </h1>
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
                                src="/Power.png"
                                width={300}
                                height={300}
                                alt="Picture of ThatNotHat game"
                            />
                            <h1 className="mt-3 flex text-lg font-semibold">Power Grid Recharged</h1>
                            <h1 className="flex text-sm font-semibold">1700.00 Baht</h1>
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
                                src="/boss.jpg"
                                width={300}
                                height={300}
                                alt="Picture of ThatNotHat game"
                            />
                            <h1 className="mt-3 flex text-lg font-semibold">I’m the boss</h1>
                            <h1 className="flex text-sm font-semibold">2250.00 Baht </h1>
                            <div className="flex items-center justify-center ">
                                <button
                                    className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                            focus:shadow font-medium mb-5 mt-3 ">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    );
  }