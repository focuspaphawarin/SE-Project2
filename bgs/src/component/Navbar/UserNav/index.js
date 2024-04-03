'use client'

import Link from 'next/link';
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
                            <div className="w-full ml-20">
                            <form class="max-w-md mx-auto">
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-black dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-black border border-gray-600 border-2 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-black dark:bg-[#FFF1C6] dark:bg-opacity-0 dark:border-black dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for game boards ..." required />
                                </div>
                            </form>
                            </div>
                        </div>

                        <div class="flex justify-end gap-10 items-center w-1/4  " id="navbar-user">
                            <Link href="/cart">
                                <Image
                                    className="object-cover"
                                    src="/cart.png"
                                    width={40}
                                    height={40}
                                    alt="Picture of Cart"
                                />
                            </Link>
                            {/* <a href="#" class="">Contact</a> */}
                            <div className="border-black border-2 rounded-full ">
                                <Link href="/profile/user">
                                    <Image
                                        className="pt-2 pr-2 pb-2 pl-2"
                                        src="/profile.png"
                                        width={40}
                                        height={40}
                                        alt="Picture of Profle"
                                    />
                                </Link>
                            </div>

                        </div>
                    </div>
                </nav>

            </div>
        </nav>
    );
}
