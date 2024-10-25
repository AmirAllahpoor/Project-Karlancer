import ParentProductCard from "../ParentProductCard/ParentProductCard"
import Num2persian from "num2persian"

export default function ProductCard({name , color , details , date , count , price , phonenumber}) {
  return (
   <ParentProductCard>
      <p className="text-one font-normal">
        {/* نوع محصول */}
        <span> محصول </span> <span className="font-bold"> {name} </span>
        {/* رنگ محصول */}
        <span>به رنگ </span> <span className="font-bold"> {color} </span>
        {/* مشخصه محصول */}
        <span> با مشخصه</span> <span className="font-bold"> {details} </span>
        {/* تاریخ ثبت */}
        <span> تا تاریخ </span> <span className="font-bold"> {date} </span>
        {/* تعداد محصول */}
        <span> به تعداد </span> <span className="font-bold"> {count} عدد</span>
        {/* قیمت محصول */}
        <span> و قیمت </span> <span className="font-bold"> {Num2persian(price)} </span>
        {/* شماره تماس فروشنده */}
        <span> شماره تماس</span> <span className="font-bold">{phonenumber}</span>
      </p>
      {/* دکمه حذف محصول */}
      <button className="outline-none bg-red-600 text-five font-semibold px-5 py-2 text-sm rounded-lg hover:bg-transparent border-2 hover:text-red-600 border-red-600 transition-all ease-linear duration-[0.3s]"> حذف محصول </button>
    </ParentProductCard>
  )
}
