import ProjectItem from './ProjectItem';

function Projects() {
    const projectList = [
        "Ricette del cuore",
        "Database compare",
        "Gestore attività in ambiente linux",
        "Creazione perceptrone multistrato",
        "Sistema di gestione parcheggi"
    ];
    return (
        <section>
            <h2>Progetti</h2>
            <ul>
                {projectList.map((project, index) => (
                    <ProjectItem key={index} name={project} />
                ))}
            </ul>
        </section>
    );
}
export default Projects;
