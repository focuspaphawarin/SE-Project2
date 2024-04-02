'use client'


import Image from "next/image";
import { useRouter } from "next/navigation";


export default function UserNav() {
    return (
        <nav>
            <div className="text-black">
                <nav class="bg-[#FFF1C6] fixed top-0 left-0 right-0 z-50">
                    <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4 ">
                        <div className="w-2/3 flex justify-between">
                            <a href="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
                                <span class="self-center text-3xl font-semibold whitespace-nowrap">BGS</span>
                            </a>
                            
                        </div>

                        <div class="flex justify-end gap-10 items-center w-1/4  " id="navbar-user">
                            <div className="border-black border-2 rounded-full ">
                                <Image
                                    className="pt-2 pr-2 pb-2 pl-2"
                                    src="/profile.png"
                                    width={40}
                                    height={40}
                                    alt="Picture of Profle"
                                />
                            </div>

                        </div>
                    </div>
                </nav>

            </div>
        </nav>
    );
}
