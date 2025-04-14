import { projectsData } from './data';

const AllProjects = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {projectsData.map((project, index) => (
        <div key={index} className="bg-red-600 text-center py-18">
          {project.name}
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
