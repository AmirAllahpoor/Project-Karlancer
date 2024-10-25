'use client'

import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import Link from "next/link"
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
    // تابعی برای گرفتن سال شمسی
  function getPersianYear() {
    const date = new Date()
    const persianDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian" , {
        year : "numeric"
    }).format(date)
    return persianDate
  }
  AOS.init()
  return (
    <div className="mt-20 w-full lg:h-96 h-[350px] bg-one flex flex-col justify-start pt-10 items-center gap-8" data-aos="fade-up" data-aos-duration="1000" >
        {/* محل قرار گیری لوگو */}
        <div className="lg:w-[200px] w-[140px]">
            <Image src="/logo.png" width={100} height={100} alt="Logo Site" layout="responsive"/>
        </div>
        {/* راه های ارتباطی */}
        <div className="flex flex-row justify-center items-center gap-4">
            {/* اینستا */}
            <button className="p-3 rounded-full border-2 border-five flex justify-center items-center hover:bg-five text-five hover:text-one transition-all duration-[0.4s] ease-linear"> <Link href="/"> <AiFillInstagram className="text-2xl" /> </Link> </button>
            {/* تلگرام */}
            <button className="p-3 rounded-full border-2 border-five flex justify-center items-center hover:bg-five text-five hover:text-one transition-all duration-[0.4s] ease-linear"> <Link href="/"> <FaTelegramPlane className="text-2xl" /> </Link> </button>
            {/* واتساپ */}
            <button className="p-3 rounded-full border-2 border-five flex justify-center items-center hover:bg-five text-five hover:text-one transition-all duration-[0.4s] ease-linear"> <Link href="/"> <IoLogoWhatsapp className="text-2xl" /> </Link> </button>
        </div>
        {/* متن */}
        <h5 className="lg:text-base text-sm font-semibold text-five">© {getPersianYear()} تمامی حقوق برای اسم سایت محفوظ است.</h5>
    </div>
  )
}
