import { Project } from '@/types/common.types';
import { Typography } from '../common/Typography/Typography';
import ProjectBlock from './ProjectBlock';

interface RelatedProjectsProps {
  relatedIds: number[];
  allProjects: Project[];
}

const RelatedProjects = ({ relatedIds, allProjects }: RelatedProjectsProps) => {
  const relatedProjects = allProjects.filter(p => relatedIds.includes(p.id));

  if (relatedProjects.length === 0) return null;

  return (
    <div className="mt-12">
      <Typography variant="h2" className="text-center text-primary pb-6 md:pb-8 md:text-4xl">
        Liked this project? Check out some more...
      </Typography>
      <div
        className={`grid ${
          relatedProjects.length === 2 ? 'grid-cols-1 sm:grid-cols-2 justify-center' : 'sm:grid-cols-2 md:grid-cols-3'
        }`}
      >
        {relatedProjects.map(project => (
          <ProjectBlock {...project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
