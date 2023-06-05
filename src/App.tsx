import Logo from './assets/Logo.svg';
import Animais from './assets/animais.png';
import Git from './assets/git.svg';
import Linkedin from './assets/linkedin.svg';
import Manual from './assets/manual.pdf';

function App() {

  return (
    <div className="bg-white flex flex-col justify-between min-h-screen">
      <div className="p-6 mx-auto">
        <img src={Logo} alt="Logo" className="sm:mx-auto mb-4 sm:w-[150px]" />
        <p className="leading-relaxed sm:text-lg py-3 max-w-3xl mx-auto text-justify bg-slate-100 p-4">
          <b className="ml-6">Teal</b> é uma plataforma de gerenciamento desenvolvida especialmente para atender às necessidades das pequenas ONGs de animais. <br />
          <b className="ml-6 font-normal">Com</b> nosso sistema abrangente e intuitivo, oferecemos às organizações a capacidade de administrar de forma eficiente todas as etapas do cuidado animal, desde o registro inicial até o processo de adoção responsável.
        </p>
        <p className="leading-relaxed sm:text-lg py-3 max-w-3xl mx-auto text-justify bg-slate-100 p-4">
          <b className="ml-6 font-normal">Junte-se</b> a nós nessa missão de fazer a diferença na vida dos animais e no funcionamento das ONGs. Simplifique a gestão, melhore a visibilidade e fortaleça o impacto da sua organização através da nossa plataforma de gerenciamento de ONGs de animais.
          <br />
          <b className="ml-6 font-normal">Comece</b> hoje mesmo e experimente uma forma mais eficiente e organizada de administrar sua ONG de animais!
        </p>
        <div className="flex flex-row justify-center items-center mt-6">
          <a href={Manual} download>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg text-lg">
              Comece agora
            </button>
          </a>
          <a href="https://github.com/p-Teal" target="_blank" rel="noreferrer">
            <img src={Git} alt="git" className="w-10 hover:cursor-pointer ml-6" />
          </a>
          <a href="https://www.linkedin.com/in/michelribeiro1/" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="linkedin" className="w-10 hover:cursor-pointer ml-6" />
          </a>
        </div>
      </div>


      <div className="max-w-3xl mx-auto mb-4">
        <img src={Animais} alt="Animais" />
      </div>
    </div>
  )
}

export default App
