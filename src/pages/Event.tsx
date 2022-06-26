import { Header } from "../components/Header";
import { Movies } from "../components/Movies";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Sidebar />
        <Movies />
      </main>
    </div>
  )
}