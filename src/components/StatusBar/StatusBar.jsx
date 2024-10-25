import { GoPlus } from "react-icons/go";

export default function StatusBar() {
  return (
    <div className="fixed z-50 bottom-[-20px] lg:bottom-[-6px] xl:bottom-[-2px] bg-three w-full flex flex-col justify-start items-center">
        {/* محل قرار گیری دکمه افزودن */}
        <button className="rounded-full w-20 h-20 bg-one flex flex-row justify-center items-center outline-none border-[8px] border-three 
        relative top-[-36px] before:w-[24px] before:h-[24px] before:rounded-br-full before:absolute before:right-[64px] before:top-[4px] 
        before:shadow-[4px_4px_0px_#5cdb95] after:w-[24px] after:h-[24px] after:rounded-bl-full after:absolute after:left-[64px] 
        after:top-[4px] after:shadow-[-4px_4px_0px_#5cdb95]">
            {/* ایکون بعضافه */}
            <GoPlus className="text-[36px] text-five"/> 
        </button>
    </div>
  )
}
