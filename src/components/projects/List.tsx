import { projects } from './data';
import ProjectBlock from './ProjectBlock';

const ProjectList = () => {
  return (
    <div className="grid grid-cols-3">
      {projects.map(item => (
        <ProjectBlock key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProjectList;
