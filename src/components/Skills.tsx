import Card from "./Card";
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaPython, FaJava, FaUserFriends } from 'react-icons/fa';
import { DiAptana } from "react-icons/di";

const Skills = () => {

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="habilidades">
        <h1 className="text-4xl py-4 font-bold text-center animate__animated animate__fadeIn">Habilidades</h1>
        <div className='flex flex-wrap gap-6 items-center justify-center'>
          <Card
            title="React"
            description="Desenvolvimento de interfaces de usuário interativas e dinâmicas."
            icon={<FaReact size={48} />}
          />
          <Card
            title="Node.js"
            description="Construção de aplicativos back-end escaláveis e de alto desempenho."
            icon={<FaNodeJs size={48} />}
          />
          <Card
            title="Banco de Dados"
            description="Design e gerenciamento eficiente de bancos de dados relacionais e não relacionais."
            icon={<FaDatabase size={48} />}
          />
          <Card
          title="Java"
          description="Desenvolvimento de aplicativos robustos e escaláveis usando a linguagem de programação Java."
          icon={<FaJava size={48} />}
          />
          <Card
            title="Python"
            description="Desenvolvimento de software, análise de dados e automação de processos utilizando Python."
            icon={<FaPython size={48} />}
          />
          <Card
            title="Express"
            description="Construção de APIs web rápidas e eficientes com o framework Express.js."
            icon={<FaNodeJs size={48} />}
          />
          <Card
            title="Spring Boot"
            description="Desenvolvimento de aplicativos Java empresariais e de microsserviços com Spring Boot."
            icon={<FaServer size={48} />}
          />
          <Card
            title=".NET"
            description="Desenvolvimento de aplicativos web, desktop e móveis usando o framework .NET."
            icon={<DiAptana size={48} />}
          />
          <Card
          title="Soft Skills"
          description="Excelentes habilidades de comunicação, trabalho em equipe, resolução de problemas e capacidade de adaptação a novas situações."
          icon={<FaUserFriends size={48} />}
          />
        </div>
      </section>
    )
}

export default Skills;