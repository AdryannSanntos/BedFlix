import { Knife, MagnifyingGlass } from "phosphor-react";
import { Genre } from "./Genre";
import { GenreButton } from "./GenreButton";

import { Scrollbars } from 'react-custom-scrollbars-2';


export function Sidebar() {
  return (
    <aside className="fixed mt-[68px] overflow-y-auto w-[348px] h-full bg-gray-700 p-6 border-r border-gray-600">
        <div className="flex flex-col">
          <span className="title">
            Pesquisa
          </span>
          <div className="flex justify-between items-center bg-gray-900 p-3 rounded mt-4 ">
            <input  className="bg-transparent outline-none" type="text" placeholder="Procurar..."/>
            <a href="#"><MagnifyingGlass /></a>
          </div>
          <div className="mt-4 flex gap-1 flex-wrap pb-6 mb-6 border-b border-gray-500 block">
            <Genre genre="Terror" />
            <Genre genre="Suspense" />
            <Genre genre="Ação" />
          </div>
          <div>
            <span className="title">
              Gênero
            </span>
            <div className="mt-4 mb-16 gap-4 flex flex-col pb-6  border-b border-gray-500 block">
              <GenreButton genre="terror" icon={<Knife size={21} weight="bold"/>}/>
              <GenreButton genre="suspense" icon={<Knife size={21} weight="bold" />}/>
              <GenreButton genre="comédia" icon={<Knife size={21} weight="bold" />}/>
              <GenreButton genre="ação" icon={<Knife size={21} weight="bold" />}/>
              <GenreButton genre="família" icon={<Knife size={21} weight="bold" />}/>
              <GenreButton genre="animação" icon={<Knife size={21} weight="bold" />}/>
            </div>
          </div>
        </div>
    </aside>
    
  )
}