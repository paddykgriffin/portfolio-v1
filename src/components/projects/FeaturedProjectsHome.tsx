import { Button } from '@/components/common/Button/Button';
import { LuChevronsRight } from 'react-icons/lu';
import { projects } from './data';
import ProjectBlock from './ProjectBlock';

const FeaturedProjectsHome = () => {
  return (
    <div className="bg-[#f3f3f1] py-30 inset-shadow-sm inset-shadow-stone-200" id="projects-home">
      <h2 className="text-center mx-auto font-light text-[#666] text-5xl pb-12">My Latest Projects</h2>

      <div className="grid md:grid-cols-3">
        {projects
          .filter(project => project.showOnHome)
          .map(item => (
            <ProjectBlock key={item.id} {...item} />
          ))}
      </div>

      <div className="text-center mt-10">
        <Button
          variant="contained"
          className="btn text-center mx-auto text-2xl !py-9 !px-6 hover:!bg-primary/80 bg-primary"
          href="/projects"
        >
          View recent projects
          <LuChevronsRight className="ml-4 w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProjectsHome;
