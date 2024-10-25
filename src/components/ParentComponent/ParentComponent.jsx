'use client'

import { useEffect, useState } from "react"

export default function ParentComponent({children}) {

    const [isScrolled , SetIsScrolled] = useState(false)

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
    <div className={`relative ${isScrolled ? "top-[14rem]" : "top-[19rem]"} transition-all duration-[0.4s] ease-linear`}>
        {children}
    </div>
  )
}
