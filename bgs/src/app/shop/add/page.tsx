
'use client'

import InputComponent from "@/component/FormElements/InputComponent"
import SelectComponent from "@/component/FormElements/SelectComponent"
import ShopNav from "@/component/ShopNav";
import Image from "next/image";
import { adminAddProductformControls } from "@/utils"


export default function AdminAddNewProduct() {

    function handleImage() {

    }

    return (
        <>
            <ShopNav />
            <div className="">
                <div className="w-full mt-20 mr-0 ml-0 relative">
                    <div className="flex flex-col items-centers justify-start w-full">
                        <div className="flex  ml-5 mr-5 mt-5 mb-5">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full ml-10 mr-10 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                            <div className="ml-5 mr-5 w-full">
                                <div className="">
                                    <label htmlFor="Boardgame Name"
                                        className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Boardgame Name</label>
                                    <input type="text" id="boardgame_name"
                                        className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 pt-4 pr-20 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                        placeholder="Enter boardename" required />
                                </div>

                                <div className="mt-5">
                                    <label htmlFor="Description"
                                        className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Description</label>
                                    <textarea id="description"
                                        className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full h-[120px] pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                        placeholder="Write your description here..."></textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-5 ml-10 mr-10">
                    <div className="flex flex-col justify-around items-center w-full mb-5 mt-5 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                        <div className="w-full">
                            <label htmlFor="price"
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Price</label>
                            <input type="number" id="price"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="Enter price" required />
                        </div>

                        <div className="w-full">
                            <label htmlFor="Number of players"
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Number of players</label>
                            <input type="text" id="number_of_players"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="Enter players" required />
                        </div>

                        <div className="w-full">
                            <label htmlFor="Play time"
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Play time</label>
                            <input type="text" id="play_time"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="Enter playtime" required />
                        </div>

                    </div>
                    <div
                        className="flex flex-col items-center w-full mb-5 mt-5 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                        <div className="w-full">
                            <label htmlFor="Age"
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Age</label>
                            <input type="text" id="span_of_age"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="Enter players" required />
                        </div>

                        <div className="w-full ">
                            {adminAddProductformControls.map((controlItem) =>
                                controlItem.componentType === "select" ? (
                                    <SelectComponent
                                        label={controlItem.label}
                                        options={controlItem.options}
                                    />
                                ) : null
                            )}
                        </div>

                        <div className="w-full">
                            <label htmlFor="Stocks"
                                className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">Stocks</label>
                            <input type="number" id="nventory_stocks"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="Enter stock" required />
                        </div>

                    </div>

                </div>
                <div className="flex justify-around">
                    <div>
                        <button className="inline-flex items-center justify-center bg-orange-400 hover:bg-green-500 text-white font-bold py-2 px-6 border border-b-2 border-gray-600 rounded-full shadow-2xl text-2xl 
                        focus:shadow font-medium mt-10 mb-60">
                            Cancel
                        </button>

                    </div>
                    {/* Confirm */}
                    <div>
                        <button className="inline-flex items-center justify-center bg-orange-400 hover:bg-green-500 text-white font-bold py-2 px-6 border border-b-2 border-gray-600 rounded-full shadow-2xl text-2xl 
                        focus:shadow font-medium mt-10 mb-60">
                            Confirm
                        </button>

                    </div>
                </div>
            </div>
       </>

    )
}