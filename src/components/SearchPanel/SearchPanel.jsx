import Overlay from "../Overlay/Overlay";
import { IoIosClose } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

export default function SearchPanel({isOpenSearch , SetIsOpenSearch}) {
  return (
    <>
        {/* باکس پنل سرچ */}
        <div className={`fixed ${isOpenSearch ? "top-0" : "top-[-50rem]"} transition-all duration-[0.3s] ease-linear flex flex-col justify-center items-center w-full h-full z-[70]`}>
            {/* بادی پنل سرچ */}
            <div className="px-4 py-10 lg:w-[420px] w-[320px] bg-five rounded-lg flex flex-col justify-between items-center gap-8 relative">
                {/* ایکون بستن پنل */}
                <IoIosClose className="absolute top-2 right-2 text-2xl text-one cursor-pointer" onClick={() => SetIsOpenSearch(!isOpenSearch)}/>
                {/* متن راهنما دو خطی */}
                <p className="text-center lg:text-xs text-xs text-one font-semibold">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها 
                </p>
                {/* باکس اینپوت */}
                <div className="flex flex-col justify-center items-center gap-2">
                    {/* اینپوت نام محصول */}
                    <input type="text" className="w-full h-10 rounded-md outline-none px-4 text-xs " placeholder="نام محصول را وارد کنید..."/>
                    {/* ردیف */}
                    <div className="flex flex-row justify-between items-center w-full gap-2">
                        {/* اینپوت رنگ */}
                        <input type="text" className="w-full h-10 rounded-md outline-none px-4 text-xs " placeholder="رنگ محصول را وارد کنید..."/>
                        {/* اینپوت تاریخ */}
                        <input type="text" className="w-full h-10 rounded-md outline-none px-4 text-xs " placeholder="تاریخ انقضا را وارد کنید..."/>
                    </div>
                </div>
                {/* متن راهنما سه خطی */}
                <p className="text-center lg:text-xs text-xs text-one font-semibold">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                </p>
            </div>
            {/* دکمه جستجو */}
            <button className="bg-five px-8 py-2 text-one font-semibold rounded-b-lg outline-none flex flex-row justify-center items-center gap-2"> <span>جستجو</span> <LuSearch className="text-lg" /> </button>
        </div>
        {/* اورلی سیاه شفاف */}
        <Overlay isOpenSearch={isOpenSearch}/>  
    </>
  )
}
