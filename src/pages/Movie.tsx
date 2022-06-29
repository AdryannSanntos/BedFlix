import { Header } from "../components/Header";
import { SelectedMovie } from "../components/SelectedMovie";
import { Sidebar } from "../components/Sidebar";

export function Movie() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Sidebar />
        <SelectedMovie 
          title="Lightyear"
          description="A aventura de ação e ficção científica apresenta a história de origem definitiva de Buzz Lightyear – o herói que inspirou o brinquedo – apresentando o lendário Space Ranger que conquistaria gerações de fãs."
          imageUrl="https://mmfilmeshd.top/wp-content/uploads/2022/05/nNLPA7tPvyFeMjcCuODH9sKTcXx-185x278.jpg"
          movieUrl="www.github.com/adryannsanntos"
          date=""
        />
      </main>
    </div>
  )
}