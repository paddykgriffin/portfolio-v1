import { useParams, Link } from 'react-router-dom';
import { projects } from './data';
import { Project } from './Item';
import { LuChevronsLeft } from 'react-icons/lu';
import { Button } from '../common/Button/Button';
import Layout from '../layout/Layout';

const ProjectDetails = () => {
  const { id } = useParams();
  const item: Project | undefined = projects.find(i => i.id === Number(id));

  if (!item) return <div>Item not found.</div>;

  return (
    <Layout pageTitle={item.name}>
      <div className="px-8 py-4">
        <Link to="/projects" className="text-gray-400 hover:text-secondary flex items-center global-transition">
          <LuChevronsLeft className="mr-2 w-4 h-4" /> Back to projects
        </Link>
      </div>
      <div className="container mx-auto">
        <div className="p-4 bg-red-500">
          <h2 className="text-2xl mb-2">{item.name}</h2>
          {/* <p>{item.description}</p> */}

          <div className="text-center mt-10">
            <Button
              href="/projects"
              className="btn text-center mx-auto text-2xl !py-9 !px-6 hover:!bg-primary/80 bg-primary inline-flex justify-between"
            >
              <LuChevronsLeft className="mr-4 w-6 h-6" />
              Back to projects
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
