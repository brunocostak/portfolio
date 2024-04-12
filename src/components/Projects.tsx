import { useState, useEffect } from "react";
import Card from "./Card";
import { FaGithub } from "react-icons/fa";

interface Repository {
    name: string;
    description: string;
    html_url: string;
    }

const Projects = () => {

const [respositores, setRespositores] = useState<Repository | []>([]);

useEffect(() => {
    fetch("https://api.github.com/users/brunocostak/repos")
        .then((response) => response.json())
        .then((data) => setRespositores(data));
}, []);


return (
    <section className="max-w-7xl gap-6 mx-auto px-4 sm:px-6 lg:px-8 py-10" id="projetos">
    { Array.isArray(respositores) && respositores.length > 0 ? (
        <>
        <h1 className="text-4xl py-4 font-bold text-center animate__animated animate__fadeIn">Projetos</h1>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
            {respositores.map((repository: Repository) => (
               <Card
                key={repository.name}
                title={repository.name}
                description={repository.description}
                icon={<FaGithub size={48} />}
                url={repository.html_url}
                />
            ))}
        </div>
        </>
    ):(
        <p>Carregando...</p>
    )
    }
    </section>
)
}

export default Projects;