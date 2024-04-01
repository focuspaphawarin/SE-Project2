
'use client'

import InputComponent from "@/component/FormElements/InputComponent"
import SelectComponent from "@/component/FormElements/SelectComponent"
import { adminAddProductformControls } from "@/utils"

export default function AdminAddNewProduct() {

    function handleImage() {

    }

    return (
        <div className="w-full mt-5 mr-0 ml-0 relative">
            <div className="flex flex-col item-strat justify-start p-10 bg-white shadow-2xl rounded-xl relative">

                <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
                
                
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


                    {/* <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> */}
                    


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
    )
}