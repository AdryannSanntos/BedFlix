interface GenreButtonProps {
  genre: string;
  icon: JSX.Element;
}

export function GenreButton(props : GenreButtonProps) {
  return (
    <a href="#" className="h-14 gap-1 bg-gray-500 p-2 rounded flex justify-center items-center hover:bg-gray-600 hover:transition-colors">
      {props.icon}
      <span className="uppercase font-semibold text-[16px]">{props.genre}</span>
    </a>
  )
  
}