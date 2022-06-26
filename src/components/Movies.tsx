import { MovieRow } from "./MovieRow";
import background from "../assets/Background.png";
import { Footer } from "./Footer";

export function Movies() {
  return (
    <div className="ml-[348px] mt-[68px] bg-no-repeat bg-cover" style={{backgroundImage: `url(${background})`, width: 'calc(100% - 348px)'}}>
      <div className="flex flex-col justify-between h-full">
        <div className="p-6 h-full">
          <MovieRow title="Últimos filmes"/>
          <MovieRow  title="Filmes de terror"/>
        </div>
        <div className="pr-5 pl-5"> 
          <Footer />
        </div>
      </div>
    </div>
  )
}