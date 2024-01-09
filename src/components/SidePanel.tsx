import CompanyImage from '../assets/company.png'
import Home from "../assets/Home.svg"
import DownArrow from "../assets/DownArrow.svg"
import Audience from "../assets/Audience.svg"
import Order from "../assets/Order.svg"
import Tools from "../assets/Tools.svg"
import Plugins from "../assets/Plugins.svg"
import Delivery from "../assets/Delivery.svg"
import Payments from "../assets/Payments.svg"
import Products from "../assets/Products.svg"
import Analytics from "../assets/Analytics.svg"
import Discounts from "../assets/Discounts.svg"
import Marketing from "../assets/Marketing.svg"
import Appearance from "../assets/Appearance.svg"
import Wallet from "../assets/wallet.svg"


const SidePanel = () => {
  return (
    <>
      <div className="w-56 h-full bg-[#1E2640] flex flex-col">
        <div className="flex px-4  py-4">
          <img src={CompanyImage} width={"39"} />
          <div className="w-32 px-3">
            <p className="text-white font-medium">Nishyan</p>
            <p className="text-[#d6d9dd] text-xs underline-offset-2 underline">Visit store </p>
          </div>
          <img src={DownArrow} className="" />
        </div>
        <ul className="text-white space-y-2 font-medium">
          <MenuItem image={Home} name={"Home"} />
          <MenuItem image={Order} name={"Orders"} />
          <MenuItem image={Products} name={"Products"} />
          <MenuItem image={Delivery} name={"Delivery"} />
          <MenuItem image={Marketing} name={"Marketing"} />
          <MenuItem image={Analytics} name={"Analytics"} />
          <MenuItem image={Payments} name={"Payments"} />
          <MenuItem image={Tools} name={"Tools"} />
          <MenuItem image={Discounts} name={"Discounts"} />
          <MenuItem image={Audience} name={"Audience"} />
          <MenuItem image={Appearance} name={"Appearance"} />
          <MenuItem image={Plugins} name={"Plugins"} />
        </ul>
        <div className="flex bg-[#353C53] py-1.5 px-3 m-4 text-white items-center rounded mt-auto">
          <span className=" overflow-hidden">
            <img src={Wallet} className="p-2 bg-white bg-opacity-10 rounded" />
          </span>
          <div className="px-2">
            <p className="text-[#d6d9dd] text-sm">Available credits</p>
            <p className="font-medium">222.10</p>
          </div>
        </div>
      </div>
    </>
  )
}

const MenuItem = (props: { image: string, name: string }) => {
  return (
    <li className="flex gap-3 py-2 px-2 mx-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors text-[#d6d9dd]"><img src={props.image} /> {props.name}</li>
  )
}

export default SidePanel
