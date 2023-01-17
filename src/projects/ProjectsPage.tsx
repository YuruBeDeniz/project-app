import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';

export default function ProjectsPage() {
  return (
    <>
    <h1>PROJECTS</h1>
    <ProjectList projects={MOCK_PROJECTS} />
    </>
    )
}



/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */
