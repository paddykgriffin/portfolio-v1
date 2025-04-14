import { Button } from '@/components/common/Button/Button';
import { LuChevronsRight } from 'react-icons/lu';
import { projectsData } from './data';

const FeaturedProjectsHome = () => {
  return (
    <div className="bg-[#f3f3f1] py-30 inset-shadow-sm inset-shadow-stone-200">
      <h2 className="text-center mx-auto font-semibold text-[#666] text-4xl pb-12">My Latest Projects</h2>

      <div className="grid md:grid-cols-3">
        {projectsData
          .filter(project => project.showOnHome)
          .map((project, index) => (
            <div key={index} className="bg-red-600 text-center py-18">
              {project.name}
            </div>
          ))}
      </div>

      <div className="text-center mt-10">
        <Button
          variant="contained"
          className="btn text-center mx-auto text-2xl !py-9 !px-6 hover:!bg-primary"
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
