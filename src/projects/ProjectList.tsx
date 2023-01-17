import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    //<pre>{JSON.stringify(projects, null, ' ')}</pre>
    <div className="row">
     {projects.map((project) => (
       <div key={project.id} className="cols-sm">
         <ProjectCard project={project} />
       </div>
     ))}
   </div>
  )
}
