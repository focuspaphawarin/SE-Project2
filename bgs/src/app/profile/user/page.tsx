
'use client'

import InputComponent from "@/component/FormElements/InputComponent"
import SelectComponent from "@/component/FormElements/SelectComponent"
import ShopNav from "@/component/ShopNav";
import Image from "next/image";
import UserNav from "@/component/Navbar/UserNav";
import { adminAddProductformControls } from "@/utils"


export default function AdminAddNewProduct() {

    return (
        <>
            <UserNav />
            <div className="">
                <div className="w-full mt-20 mr-0 ml-0 relative">
                    <div className="flex flex-col items-centers justify-start w-full">
                        <div className="flex  ml-10 mr-5 mt-10 mb-5">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center object-cover p-1 rounded-full ring-indigo-300 dark:ring-indigo-500 cursor-pointer b">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Image
                                        className="object-cover p-1 rounded-full ring-indigo-300 dark:ring-indigo-500"
                                        src="/nongwonyong.png"
                                        width={400}
                                        height={400}
                                        alt="Picture of nongwonyong"
                                    />
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                            <div className="ml-5 mr-5 w-full flex items-center">
                                <div className="flex flex-col item-center">
                                    <div className="pb-1 ml-10 mr-20 flex text-3xl font-semibold">
                                        <h1>Wonyong</h1>
                                    </div>
                                    <div className="pb-1 pt-5 ml-10 mr-20 flex text-xl ">
                                        <h1>@email.com</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-5 ml-10 mr-10">
                    <div className="flex flex-col justify-around items-center w-full mb-5 mt-5 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                        <div className="w-full">
                            <label htmlFor="Number of players"
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">First Name</label>
                            <input type="text" id="number_of_players"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="" required />
                        </div>

                        <div className="w-full">
                            <label htmlFor="Play time"
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Last Name</label>
                            <input type="text" id="play_time"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="" required />
                        </div>

                    </div>
                    <div className="flex flex-col justify-around items-center w-full mb-5 mt-5 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                        <div className="w-full">
                            <label htmlFor="Number of players"
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Birthday</label>
                            <input type="text" id="number_of_players"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="" required />
                        </div>

                        <div className="w-full">
                            <label htmlFor=""
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Phone Number</label>
                            <input type="text" id="play_time"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="" required />
                        </div>

                    </div>
                    <div className="flex flex-col justify-around items-center w-full mb-5 mt-5 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                        <div className="w-full">
                            <label htmlFor="Number of players"
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Address</label>
                            <input type="text" id="number_of_players"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full h-[100px] pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="" required />
                        </div>

                    </div>


                </div>
                <div className="flex justify-center">
                    {/* Confirm */}
                    <div>
                        <button className="inline-flex items-center justify-center bg-orange-400 hover:bg-green-500 text-white font-bold py-2 px-6 border border-b-2 border-gray-600 rounded-full shadow-2xl text-2xl 
                        focus:shadow font-medium mt-10 mb-60">
                            Save
                        </button>

                    </div>
                </div>
            </div>
        </>

    )
}