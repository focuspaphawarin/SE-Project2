"use client";

import Image from "next/image";
import InputComponent from "@/component/FormElements/InputComponent";
import SelectComponent from "@/component/FormElements/SelectComponent";
import { registrationFormControls } from "@/utils";

const isRegistered = false;


export default function Register() {
    return (
        <div className="h-full flex">
            <div className="w-1/2">
                <div className="flex w-full items-center justify-center mr-auto lg:flex-row ">
                    <div className="w-full flex flex-col items-center justify-start pt-5 pr-20 pb-5 pl-20 bg-white shadow-2xl rounded-xl relative z-10">
                        <h1 className="text-lg mb-1 font-semibold">BoardGameShop</h1>
                        <p className="w-full text-5xl font-medium text-center font-bold ">
                            {isRegistered
                                ? "Registration Successfull !"
                                : "SIGN UP"}
                        </p>
                        {isRegistered ? (
                            <button
                                className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                                text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                                "
                            >
                                Login
                            </button>
                        ) : (
                            <div className=" w-full mt-5 mr-0 mb-0 ml-0 relative space-y-8">
                                {registrationFormControls.map((controlItem) =>
                                    controlItem.componentType === "input" ? (
                                        <InputComponent
                                            type={controlItem.type}
                                            placeholder={controlItem.placeholder}
                                            label={controlItem.label}
                                            onChange={(e: any) => console.log(e)}
                                            value=""
                                        />
                                    ) : controlItem.componentType === "select" ? (
                                        <SelectComponent
                                            options={controlItem.options}
                                            label={controlItem.label}
                                            value=""
                                            onChange={(e: any) => console.log(e)}
                                        />
                                    ) : null
                                )}
                                <div className="flex items-center justify-center">
                                    <button
                                        className="inline-flex items-center justify-center bg-orange-400 hover:bg-green-500 text-white font-bold py-2 px-4 border border-b-2 border-gray-600 rounded-full shadow-2xl text-2xl 
                                        focus:shadow font-medium 
                                        ">
                                        Create an account
                                    </button>
                                </div>
                            </div>
                        )
                        }
                    </div>

                </div>
            </div>
            <div className="w-1/2">
                <Image
                    className="object-cover h-full w-full"
                    src="/SignUpImage.jpg"
                    width={1000}
                    height={1000}
                    alt="Picture of Sign up"
                />
            </div>
        </div>
    );
}