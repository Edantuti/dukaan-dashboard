import Header from "./components/Header"
import OverviewSection from "./components/OverviewSection"
import SidePanel from "./components/SidePanel"
import TransactionSection from "./components/TransactionsSection"

function App() {

  return (
    <>
      <SidePanel />
      <section className="bg-gray-50 md:w-full w-[543px]">
        <Header />
        <OverviewSection />
        <TransactionSection />
      </section>
    </>
  )
}

export default App
