'use client'

import React from "react";
import Link from 'next/link';

type propTypes = {
    open: boolean;
    onClose: ()=> void;
    children: React.ReactNode;
}


const Modal: React.FC<propTypes> = ({open,onClose,children}) => 
{
    return (
        <div className={`fixed flex justify-center item-center 
        trasition-colors ${open ? "visible bg-black/20" : "invisible"}
        `}
        onClick={onClose}
        >  
            <div className={`bg-white rounded-lg shadow p-6 transition-all max-w-md 
            ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
            onClick={(e) => e.stopPropagation()}
            >
                <Link href="/waitingForShipment">
                    <button className="absolute top-2 right-2 py-1 px-2 
                    border berder-neutral-200 rounded-md text-gray-400
                    bg-white hover:bg-gray-50 hover:text-gray-600"
                    onClick={onClose}
                    >
                        X
                    </button>
                    {children}
                </Link>
            </div>

        </div>
    );
};

export default Modal;