
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
            <div className="w-full mt-20 mr-0 ml-0 relative">
                <div className="flex flex-col item-strat justify-start p-10 bg-white shadow-2xl rounded-xl relative">

                    <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">

                        <div className="mb-2 sm:mb-6">
                            <label for="Boardgame Name"
                                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Boardgame Name</label>
                            <input type="text" id="boardgame_name"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 pt-4 pr-20 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="Enter boardename" required />
                        </div>

                        <div className="mb-6">
                            <label for="Description"
                                class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Description</label>
                            <textarea id="description" rows="4"
                                className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                placeholder="Write your bio here..."></textarea>
                        </div>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                        <input
                            className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            id="file_input"
                            type="file"
                        />

                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label for="price"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Price</label>
                                <input type="number" id="price"
                                    className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                    placeholder="Enter price" value="" required />
                            </div>

                            <div className="w-full">
                                <label for="Number of players"
                                    class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Number of players</label>
                                <input type="text" id="number_of_players"
                                    className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                    placeholder="Enter players" value="" required />
                            </div>

                            <div className="w-full">
                                <label for="Play time"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Play time</label>
                                <input type="text" id="play_time"
                                    className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                    placeholder="Enter playtime" value="" required />
                            </div>

                        </div>

                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label for="Age"
                                    class="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Age</label>
                                <input type="text" id="span_of_age"
                                    className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                    placeholder="Enter players" value="" required />
                            </div>

                            <div className="w-full">
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
                                <label for="Stocks"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Stocks</label>
                                <input type="number" id="nventory_stocks"
                                    className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
                                    placeholder="Enter stock" value="" required />
                            </div>

                        </div>


                        {/* {adminAddProductformControls.map((controlItem) =>
                    controlItem.componentType === "input" ? (
                        <InputComponent
                        type={controlItem.type}
                        placeholder={controlItem.placeholder}
                        label={controlItem.label}
                        />
                    ) : controlItem.componentType === "select" ? (
                        <SelectComponent
                        label={controlItem.label}
                        options={controlItem.options}
                        />
                    ) : null
                    )} */}
                        <button className="inline-flex items-center justify-center bg-orange-400 hover:bg-green-500 text-white font-bold py-2 px-4 border border-b-2 border-gray-600 rounded-full shadow-2xl text-2xl 
                                        focus:shadow font-medium mt-20 mb-60
                                        ">
                            Add Product
                        </button>

                    </div>
                </div>
            </div>
        </>

    )
}