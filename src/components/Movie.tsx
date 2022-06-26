import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { MovieCapa } from "./MovieCapa";

interface MovieProps {
  title: string;
  image: string;
  date: Date;
}

export function Movie(props : MovieProps) {
  const availableDateFormatted = format(props.date, "MMM '.' dd ',' uuuu", {
    locale: ptBR
  });
  return (
    <div className="flex flex-col items-center">
      <a href="#" className="border-[1.5px] border-red-300 rounded-[7px]">
        <img className="w-[185px] h-[278px] hover:brightness-50 hover:" src={props.image}/>
      </a>
      <div className="mt-2 flex flex-col justify-center items-center">
        <a href="#" className="font-light text-lg text-center text-ellipsis w-[185px] overflow-hidden whitespace-nowrap hover:text-red-300 transition-colors">{props.title}</a>
        <span className="text-gray-400 text-xs">{availableDateFormatted}</span>
      </div>
    </div>
  )
}