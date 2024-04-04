'use client'

import Image from "next/image";
import Link from 'next/link';
import UserNav from "@/component/Navbar/UserNav";

export default function Home() {
    return (
        <>
            <UserNav />
            <div className="mt-74px">
                <div className="w-full relative">
                    <Image
                        className="object-cover"
                        src="/cover.png"
                        width={4000}
                        height={4000}
                        alt="Picture of Cover"
                    />
                    <div className="absolute bottom-[170px] left-[400px]">
                        <button
                            className="bg-[#FCC362] hover:bg-green-500 text-white font-bold py-4 px-8 border border-b-2 border-gray-600 rounded-full shadow-2xl text-4xl 
                                            focus:shadow font-medium 
                                            ">
                            Buy now
                        </button>
                    </div>
                </div>
                {/* New bg */}
                <div className="mt-2 mb-2">
                    <div className="ml-10 mr-10 pt-3 pb-3 text-3xl font-semibold">New Board Games</div>
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-center mt-5 mb-5">
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
                                    alt="Picture of ThatNotHat game"
                                />
                                <h1 className="mt-3 flex text-lg font-semibold">That’s Not a Hat</h1>
                                <h1 className="flex text-sm font-semibold">price </h1>
                                <div className="flex items-center justify-center ">
                                    <button
                                        className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white 
                                        font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                                focus:shadow font-medium mb-5 mt-3 ">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
                                    alt="Picture of ThatNotHat game"
                                />
                                <h1 className="mt-3 flex text-lg font-semibold">That’s Not a Hat</h1>
                                <h1 className="flex text-sm font-semibold">price </h1>
                                <div className="flex items-center justify-center ">
                                    <button
                                        className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white 
                                        font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                                focus:shadow font-medium mb-5 mt-3 ">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
                                    alt="Picture of ThatNotHat game"
                                />
                                <h1 className="mt-3 flex text-lg font-semibold">That’s Not a Hat</h1>
                                <h1 className="flex text-sm font-semibold">price </h1>
                                <div className="flex items-center justify-center ">
                                    <button
                                        className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white 
                                        font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                                focus:shadow font-medium mb-5 mt-3 ">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
                                    alt="Picture of ThatNotHat game"
                                />
                                <h1 className="mt-3 flex text-lg font-semibold">That’s Not a Hat</h1>
                                <h1 className="flex text-sm font-semibold">price </h1>
                                <div className="flex items-center justify-center ">
                                    <button
                                        className="inline-flex w-full items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white 
                                        font-bold py-1 px-2 border border-b-2 border-gray-600 rounded-full shadow-2xl text-lg 
                                                focus:shadow font-medium mb-5 mt-3 ">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                {/* Catagory */}
                <div className="bg-[#FFF1C6] w-fill">
                    <div className="">
                        <div className="ml-10 mr-10 pt-3 pb-3 text-3xl font-semibold">Catagory</div>
                        <div className="flex justify-center">
                            <Link href="/category/party">
                                <div className="ml-10 mr-10 ">
                                    <Image
                                        className="object-cover border-2 border-black"
                                        src="/cate.jpeg"
                                        width={300}
                                        height={300}
                                        alt="Picture of Party game"
                                    />
                                    <h1 className="mt-3 flex justify-center text-lg mb-3 font-semibold">party game </h1>
                                </div>
                            </Link>
                            <Link href="/category/family">
                                <div className="ml-10 mr-10 ">
                                    <Image
                                        className="object-cover border-2 border-black"
                                        src="/cate.jpeg"
                                        width={300}
                                        height={300}
                                        alt="Picture of Party game"
                                    />
                                    <h1 className="mt-3 flex justify-center text-lg mb-3 font-semibold">family game </h1>
                                </div>
                            </Link>
                            <Link href="/category/strategy">
                                <div className="ml-10 mr-10 ">
                                    <Image
                                        className="object-cover border-2 border-black"
                                        src="/cate.jpeg"
                                        width={300}
                                        height={300}
                                        alt="Picture of Party game"
                                    />
                                    <h1 className="mt-3 flex justify-center text-lg mb-3 font-semibold">strategy game </h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* All bg */}
                <div className="mt-5">
                    <div className="ml-10 mr-10 pt-3 pb-3 text-3xl font-semibold">All Board Games</div>
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-center mt-10">
                        <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
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
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
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
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
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
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
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
                            </div>
                        </div>
                        <div className="flex flex-row justify-center mt-10">
                        <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
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
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
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
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
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
                            </div>
                            <div className="ml-10 mr-10 ">
                                <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={300}
                                    height={300}
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}