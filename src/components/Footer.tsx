import { LogoGray } from "./LogoGray";

export function Footer() {
  return (
    <div className="flex justify-between items-center p-4 text-gray-300 border-t border-gray-300">
      <div className="flex items-center gap-7">
        <LogoGray />
        <span className="text-sm">BedFlix - Todos os direitos reservados</span>
      </div>
     <div>
      <span className="text-sm">Políticas de privacidade</span>
     </div>
    </div>
  )
}