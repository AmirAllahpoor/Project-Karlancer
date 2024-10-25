'use client'

import Image from "next/image";
import { RiSearchLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { useEffect, useState } from "react";
import SearchPanel from "../SearchPanel/SearchPanel";

export default function Header() {

  const [isScrolled , SetIsScrolled] = useState(false)        
  const [isOpenSearch , SetIsOpenSearch] = useState(false)        

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50) {
        SetIsScrolled(true)
      } else {
        SetIsScrolled(false)
      }
    }
    // وقتی کامپوننت مونت شد اجرا کنه
    window.addEventListener('scroll' , handleScroll)
    // وقتی ان مونت شد پاک کنه رویداد رو
    return () => {
      window.removeEventListener('scroll' , handleScroll)
    }
  },[])
 
  return (
    <>
    <header className={`w-full z-50 xl:px-28 pt-10 lg:px-10 md:px-14 px-4 flex flex-col justify-between items-center bg-three fixed transition-all duration-[0.4s] ease-in ${isScrolled ? "top-[-12rem]" : "top-0"}`}>
          {/* دکمه ورود */}
        <button className={`absolute outline-none lg:left-10 md:left-14 left-4 top-10 text-one text-sm flex flex-row justify-center gap-2 items-center lg:px-6 px-2 py-2 border-2 rounded-lg border-one hover:bg-one hover:text-five transition-all duration-[0.4s] ease-linear`}>
           <span className="lg:block hidden">ورود</span> 
           {/* ایکون ورود */}
           <FiLogIn className="text-base"/> 
          </button>
        {/* محل قرار گیری لوگو سایت */}
        <div className={`lg:w-[200px] w-[140px]`}>
            <Image src="/logo.png" width={100} height={100} alt="Logo Site" layout="responsive"/>
        </div>
        {/* محل قرار گیری متن راهنما */}
        <p className={`text-center md:text-sm xl:text-base text-xs font-medium text-five lg:mt-10 mt-6`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</p>
        {/* محل قرار گیری دکمه سرچ */}
        <button className="rounded-full w-20 h-20 bg-one flex flex-row justify-center items-center outline-none border-[8px] border-three 
        relative lg:top-[36px] top-[30px] before:w-[24px] before:h-[24px] before:rounded-tr-full before:absolute lg:before:right-[64.5px] before:right-[62px] lg:before:top-[36px] before:top-[40px]
        before:shadow-[4px_-4px_0px_#5cdb95] after:w-[24px] after:h-[24px] after:rounded-tl-full after:absolute lg:after:left-[64.5px]  after:left-[62px]
        lg:after:top-[36px] after:top-[40px] after:shadow-[-4px_-4px_0px_#5cdb95] lg:before:rotate-0 lg:after:rotate-0 before:rotate-[-10deg] after:rotate-[10deg]" onClick={() => SetIsOpenSearch(!isOpenSearch)}>
            {/* ایکون سرچ */}
            <RiSearchLine className="text-[28px] text-five"/> 
        </button>
    </header>
    {/* سرچ پنل */}
    <SearchPanel isOpenSearch={isOpenSearch} SetIsOpenSearch={SetIsOpenSearch}/>
    </>
  )
}
