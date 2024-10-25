'use client'

import AOS from "aos"
import "aos/dist/aos.css"

export default function ParentProductCard ({children}) {
  AOS.init()
  return (
    <div className="w-full py-6 border-b-2 border-three flex xl:flex-row flex-wrap xl:justify-between justify-start items-center gap-x-20 gap-y-5" data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
        {children}
    </div>
  )
}
