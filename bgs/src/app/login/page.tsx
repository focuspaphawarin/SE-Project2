
'use client'

import Image from "next/image";
import InputComponent from "@/component/FormElements/InputComponent";
import { useRouter } from "next/navigation";
import { loginFormControls } from "@/utils";


export default function Login() {

    const router = useRouter();

    return (
        <div className="flex">
            <div className="w-1/2">
                <Image
                    className="object-cover h-full w-full"
                    src="/SignUpImage.jpg"
                    width={1000}
                    height={1000}
                    alt="Picture of Sign up"
                />
            </div>
            <div className="w-1/2 h-full">
                <div className="flex w-full h-full items-center justify-center mr-auto lg:flex-row">
                    <div className="w-full flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                        <div className="w-full flex justify-end gap-3">
                            <p className="mt-3 text-sm">Don't you have an accout ?</p>
                            <button
                                className="flex justify-end inline-flex items-center justify-center bg-white-400 hover:bg-gray-200 text-black font-bold py-2 px-4 border border-b-2 border-gray-600 rounded-full text-lg 
                                font-medium 
                            "
                                onClick={() => router.push("/register")}
                            >
                                Sign up
                            </button>
                        </div>
                        <h1 className="mt-20 text-lg mb-1 font-semibold">BoardGameShop</h1>
                        <p className="w-full text-5xl font-medium text-center font-bold">
                            Login
                        </p>
                        <div className="w-full mt-10 mr-0 mb-0 ml-0 relative space-y-8">
                            {loginFormControls.map((controlItem) =>
                                controlItem.componentType === "input" ? (
                                    <InputComponent
                                            type={controlItem.type}
                                            placeholder={controlItem.placeholder}
                                            label={controlItem.label}
                                            onChange={(e: any) => console.log(e)}
                                            value=""
                                    />
                                ) : null
                            )}
                            <div className="flex items-center justify-center">
                                    <button
                                        className="inline-flex items-center justify-center bg-orange-400 hover:bg-green-500 text-white font-bold py-2 px-4 border border-b-2 border-gray-600 rounded-full shadow-2xl text-2xl 
                                        focus:shadow font-medium mt-20 mb-60
                                        ">
                                        Login
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}