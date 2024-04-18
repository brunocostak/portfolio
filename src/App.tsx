import Header from './components/Header'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaRegNewspaper } from "react-icons/fa6";
import 'animate.css';
import './App.css'
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Formacao } from './components/Formacao';

function App() {

  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pt-60 pt-32 flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold text-center animate__animated animate__fadeIn">Olá, meu nome é Bruno</h1>
          <p className="mt-4 text-center animate__animated animate__fadeIn"> Sou um desenvolvedor versátil com experiência em
          <b> JavaScript</b>, <b>TypeScript</b>, <b>JAVA</b>, <b>C#</b>, <b>Python</b>, <b>React</b>, <b>Spring boot</b>, <b>.NET</b> e <b>Bando de dados MySQL</b>.
          Estou pronto para enfrentar desafios de desenvolvimento e contribuir com soluções inovadoras.</p>
        </div>
        <ul className="flex space-x-4 justify-center py-4">
            <li>
                <a title='linkedin' href="https://www.linkedin.com/in/brunokrumreick/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='animate__animated animate__pulse animate__infinite' size={48} />
                </a>
            </li>
            <li>
                <a title='github' href="https://github.com/brunocostak" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='animate__animated animate__pulse animate__infinite' size={48} />
                </a>
            </li>
            <li>
                <a title='email' href="mailto:bruno.motteer@gmail.com">
                    <FaEnvelope className='animate__animated animate__pulse animate__infinite' size={48} />
                </a>
            </li>
            <li>
                <a title="curriculo" href="https://drive.google.com/file/d/1kQu_noZ9bi2Xv_L0Ed-6r42aB0VI0Or7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FaRegNewspaper className='animate__animated animate__pulse animate__infinite' size={48} />
                </a>
            </li>
        </ul>
      </section>
      <Formacao />
      <Skills />
      <Projects />
    </>
  )
}

export default App
