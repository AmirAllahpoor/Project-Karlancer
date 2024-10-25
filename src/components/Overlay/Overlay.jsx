export default function Overlay({isOpenSearch}) {
  return (
    <div className={`fixed top-0 w-screen h-screen bg-[#000000d4] z-[60] ${isOpenSearch ? "block" : "hidden"}`}></div>
  )
}
