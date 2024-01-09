import Help from "../assets/Help.svg"
import Search from "../assets/Search.svg"
import Announcement from "../assets/Annoucement.svg"
import DownArrowFill from "../assets/DownArrowFill.svg"

const Header = () => {
  return (
    <>
      <header className="h-20 flex items-center pl-8 border-2 shadow-sm bg-white">
        <div className="flex w-96 gap-4">
          <h1 className="text-xl">Payments</h1>
          <div className="flex items-center gap-1">
            <img src={Help} height="6" width="16" />
            <p className="text-sm text-neutral-600">How it works</p>
          </div>
        </div>
        <div className="relative mx-40">
          <img src={Search} className="absolute left-3 top-3" />
          <input type="text" placeholder="Search features, tutorials, etc." className=" w-[440px] p-2 ps-8 bg-[#f2f3f3] rounded" />
        </div>
        <div className="flex gap-2 ml-auto mr-8">
          <span className="bg-[#E6E6E6] p-3 rounded-full">
            <img src={Announcement} className=" h-5 w-5" height="20px" width="20px" />
          </span>
          <span className="bg-[#E6E6E6] p-3 rounded-full">
            <img src={DownArrowFill} className="h-5 w-5" height="20px" width="20px" />
          </span>
        </div>
      </header>
    </>
  )
}

export default Header
