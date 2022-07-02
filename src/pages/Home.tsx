import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import background from "../assets/Background.png";
import { Navigate, useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/movies');
  };
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
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <input required className="input" type="text" placeholder="Seu nome completo"/>
                  <input required className="input" type="email" placeholder="Digite seu email"/>
                  <input type="submit" value="GARANTIR MINHA VAGA" className="input-submit"/>
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
