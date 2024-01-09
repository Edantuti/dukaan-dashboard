import Header from "./components/Header"
import OverviewSection from "./components/OverviewSection"
import SidePanel from "./components/SidePanel"
import TransactionSection from "./components/TransactionsSection"

function App() {

  return (
    <>
      <SidePanel />
      <section className="bg-[#FBFBFB]">
        <Header />
        <OverviewSection />
        <TransactionSection />
      </section>
    </>
  )
}

export default App
