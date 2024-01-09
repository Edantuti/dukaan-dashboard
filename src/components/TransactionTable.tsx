// import { useState } from "react"
// import {data} from "../data.json"
import Search from "../assets/Search.svg"
import Sort from "../assets/Sort.svg"
import Download from "../assets/Download.svg"
import Info from "../assets/Info.svg"
import Left from "../assets/Left.svg"
import Right from "../assets/Right.svg"

const TransactionTable = () => {
  //TODO: Making Pagination responsive
  // const [start, setStart] = useState<number>(0);
  // const [end, setEnd] = useState<number>(18);
  // function PaginationIncrement() {
  //   setStart(start + 18)
  //   setEnd(Math.min())
  // }
  return (
    <>
      <div className="my-5 bg-white mx-8 p-3 shadow rounded flex flex-col">
        <div className="flex items-center">
          <span className="relative">
            <img src={Search} className="absolute ps-4 inset-y-3 flex items-center" />
            <input type="text" placeholder="Search by order ID..." className="ps-10 border p-2 rounded-md" />
          </span>
          <div className="flex ml-auto gap-3">
            <span className="flex gap-2 px-3 py-1.5 border-2 rounded-md items-center">
              <p className="text-[#4d4d4d]">Sort</p>
              <img src={Sort} />
            </span>
            <span className="p-3 border-2 rounded-md">
              <img src={Download} />
            </span>
          </div>
        </div>
        <Table />
        <nav className="pagination mx-auto w-full flex items-center justify-center py-5">
          <div className="flex items-center p-1.5 gap-1 border-2 rounded-md text-[#4c4c4c]">
            <img src={Left} className="p-1.5" />
            <span className="px-1.5">Previous</span>
          </div>
          <ul className="flex flex-row items-center gap-2 px-6">
            <PaginationItem value="1" />
            <PaginationItem value="..." />
            <PaginationItem value="10" />
            <PaginationItem value="11" />
            <PaginationItem value="12" />
            <PaginationItem value="13" />
            <PaginationItem value="14" />
            <PaginationItem value="15" />
            <PaginationItem value="16" />
            <PaginationItem value="17" />
            <PaginationItem value="18" />
          </ul>
          <div className="flex items-center p-1.5 gap-1 border-2 rounded-md text-[#4c4c4c]">
            <span className="px-1.5">Next</span>
            <img src={Right} className="p-1.5" />
          </div>
        </nav>

      </div>
    </>
  )
}
const PaginationItem = (props: { value: string }) => {
  return (
    <>
      <li className="w-8 h-8 p-1 text-center text-[#4c4c4c] rounded hover:bg-[#146EB4] hover:bg-muted/100 hover:text-white">{props.value}</li>
    </>
  )
}
const Table = () => {
  return (
    <>
      <table className="w-full my-3 p-3 border-collapse">
        <thead className="bg-[#f2f2f2] text-[#4c4c4c] font-medium">
          <tr className="">
            <th scope="col" className="font-medium py-2.5 px-3 text-left rounded-s">Order ID</th>
            <th scope="col" className="font-medium py-2.5 text-left">Order date</th>
            <th scope="col" className="font-medium py-2.5 text-right">Order amount</th>
            <th scope="col" className="font-medium py-2.5 px-3 text-right rounded-e">
              <div className="inline-flex gap-1">
                Transaction fees
                <img src={Info} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="">
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
          <TableRow id={"#281209"} date="7 July, 2023" amount="₹1,278.23" transaction="₹22" />
        </tbody>
      </table>
    </>
  )
}
const TableRow = (props: { id: string, date: string, amount: string, transaction: string }) => {
  return (
    <>
      <tr className="border-b">
        <th scope="row" className="text-left text-blue-500 py-3.5 pl-3 font-medium">{props.id}</th>
        <td className="text-left py-3.5">{props.date}</td>
        <td className="text-right py-3.5">{props.amount}</td>
        <td className="text-right pr-3 py-3.5">{props.transaction}</td>
      </tr>
    </>
  )
}
export default TransactionTable
