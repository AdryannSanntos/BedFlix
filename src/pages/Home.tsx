import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import background from "../assets/Background.png";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <main className="flex flex-1 justify-around bg-no-repeat bg-cover" style={{backgroundImage: `url(${background})`}}>
          <div className="mt-20 w-full flex justify-around items-start">
            <div className="w-full flex justify-around items-center">
              {/* Text */}
              <div className="w-[45%]">
                <Logo />
                <h1 className="text-3xl mt-3 mb-4">
                  Assista filmes <span className="text-red-400 font-bold">gratuitamente</span>, sem sair da cama, com <span  className="text-red-400 font-bold">BedFlix</span>
                </h1>
                <span className="text-sm text-gray-200">Filmes lançados recentemente totalmente de graça para você! assitir filme nunca foi tão fácil</span>
              </div>
              {/* Form */}
              <div className="flex flex-col bg-gray-700 p-6 w-[28%]">
                <span className="font-bold text-lg mb-4">
                  Inscreva-se gratuitamente
                </span>
                <form className="flex flex-col">
                  <input className="input" type="text" placeholder="Seu nome completo"/>
                  <input className="input" type="email" placeholder="Digite seu email"/>
                  <a href="/event" className="input-submit">GARANTIR MINHA VAGA</a>
                </form>
              </div>
            </div>
          </div>
          
        </main>
        <div className="pl-4 pr-4">
          <Footer />
        </div>
    </div>
  )
}
