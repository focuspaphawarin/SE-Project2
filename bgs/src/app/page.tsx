'use client'

import {useContext} from "react";
import { GlobalContext } from "@/context";
import Image from "next/image";

export default function Page() {

  const {isAuthUser} = useContext(GlobalContext)
  return (

    <div>page</div>
  );
}
