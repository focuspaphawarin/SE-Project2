

'use client'

import Image from "next/image";
import Link from 'next/link';
import UserNav from "@/component/Navbar/UserNav";


export default function DetailProduct () {
    return (
        <>
            <UserNav />
            <div className="w-full mt-40 mr-0 ml-20 ">
                <div className="">
                    <div className="flex items-centers justify-star">
                        <div>
                            <Image
                                    className="object-cover border-2 border-black"
                                    src="/game1.png"
                                    width={400}
                                    height={400}
                                    alt="Picture of Party game"
                                />
                        </div>
                        < div className="ml-10 mr-5 ">
                            <h1 className="ml-10 mr-10 pb-3 text-4xl font-semibold">Cat In The Box</h1>
                            <p className="ml-10 mr-10 text-xl text-[#ED3C3C]">1,100.00 bath</p>
                            <div className="mt-3">
                                <h3 className="text-xl mt-2 mr-2 mb- ml-10 font-medium">Category</h3>
                                <p className="text-xl mr-0 mb-0 ml-14">Family</p>
                            </div>

                            <div>
                                <h3 className="text-xl mt-2 mr-0 mb-0 ml-10 font-medium">Age</h3>
                                <p className="text-xl mr-0 mb-0 ml-14">13+</p>
                            </div>

                            <div>
                                <h3 className="text-xl mt-2 mr-0 mb-0 ml-10 font-medium">Number of players</h3>
                                <p className="text-xl mr-0 mb-0 ml-14">2-5</p>
                            </div>

                            <div>
                                <h3 className="text-xl mt-2 mr-0 mb-0 ml-10 font-medium">Playing time</h3>
                                <p className="text-xl mr-0 mb-0 ml-14">20-40 min</p>
                            </div>

                            <div className="ml-10">
                                <button 
                                className="iinline-flex items-center justify-center bg-[#0899E7] hover:bg-[#0B87B2] text-white font-bold py-2 px-8 border border-b-2 border-gray-600 rounded-full shadow-2xl text-xl 
                                focus:shadow font-medium mb-5 mt-10">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        

                    </div>

                </div>
                
            </div>
            <div className="bg-[#FFF1C6] w-fill mt-5">
                    <div className="">
                        <div className="ml-10 mr-10 pt-5 pb-3 text-3xl font-semibold">Product Details</div>
                        <div className="flex justify-center pt-5 pl-8 pr-8 pb-8">
                            <p>Cat in the Box: Deluxe Edition is the quintessential quantum trick-taking card game for 2 - 5 cool cats, where your card’s color isn’t defined until you play it! Hypothesize how many tricks you will win, and record your bid. Place tokens on the community research board as you play your hand, and connect large groups of tokens to score even more points. Plan your tricks carefully as you cannot claim the color of a card with the same number that has already been declared. Doing so would be pawsitively catastrophic as you have just created a paradox!</p>
                        </div>
                    </div>
                </div>
        </>

        
    );
}
