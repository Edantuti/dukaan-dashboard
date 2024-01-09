import DownArrowBlack from "../assets/DownArrowBlack.svg"


const OverviewSection = () => {
  return (
    <>
      <div className="mx-8 my-8">
        <div className="flex items-center my-8">
          <h2 className="text-2xl font-medium">Overview</h2>
          <span className="p-2 border-2 rounded flex items-center ml-auto">
            <span className="text-[#565657] px-1">Last Month</span>
            <img src={DownArrowBlack} className="fill-black mx-2" />
          </span>
        </div>
        <div className="flex gap-5">
          <OverviewCard title="Online orders" content="231" />
          <OverviewCard title="Amount received" content="₹23,92,312.19" />
        </div>
      </div>
    </>
  )
}

const OverviewCard = (props: { title: string, content: string }) => {
  return (
    <>
      <div className="shadow-md rounded-lg w-[45vw] p-5 space-y-4 bg-white">
        <p className="text-[#4c4c4c]">{props.title}</p>
        <p className="text-4xl font-medium">{props.content}</p>
      </div>
    </>
  )
}

export default OverviewSection
