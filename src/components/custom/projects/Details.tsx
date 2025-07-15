import { useParams, Link } from 'react-router-dom';
import { projects } from './data';
import { Project } from '@/types/common.types';
import { LuChevronsLeft, LuLink } from 'react-icons/lu';
import { Button } from '../../common/Button/Button';
import Layout from '../../layout/Layout';
import { Container } from '../../layout/Container/Container';
import { Typography } from '../../common/Typography/Typography';
import RelatedProjects from '../RelatedProjects';
import { s3 } from '@/utility/s3';
import SEO from '../SEO';
import { slugify } from '@/utility/slugify';

const ProjectDetails = () => {
  // Get the route parameter
  const { name } = useParams<{ name: string }>();

  const item: Project | undefined = projects.find(project => slugify(project.name) === name);

  if (!item)
    return (
      <Layout>
        <div className="py-12">
          <Typography variant="h1" className="text-center pb-6">
            Project not found!
          </Typography>
          <Typography variant="body1" className="text-center">
            try again later
          </Typography>
        </div>
      </Layout>
    );

  return (
    <Layout pageTitle={item.name}>
      <SEO title={item.name} description={item.details.description} />
      <div className="px-8 py-4">
        <Link to="/projects" className="text-gray-400 hover:text-secondary flex items-center global-transition">
          <LuChevronsLeft className="mr-2 w-4 h-4" /> Back to projects
        </Link>
      </div>
      <Container>
        <div className="p-4  pb-12 max-w-(--breakpoint-md) mx-auto ">
          <div className="text-center">
            <Typography variant={'h1'} className="text-2xl mb-6 lg:text-6xl !font-medium text-primary">
              {item.name}
            </Typography>

            {item.details && (
              <Typography variant="body1" className="text-2xl text-gray-600">
                {item.details.description}
              </Typography>
            )}
          </div>

          {item.details && (
            <>
              <img
                src={`${s3(item.details.image)}.png`}
                alt={item.name}
                className="w-full h-auto mx-auto text-center my-12"
              />
              <div className="text-center [&_p]:pb-4 [&_p]:text-xl [&_p]:leading-10 pb-12 text-gray-600">
                <Typography
                  variant="h4"
                  className="relative inline-flex font-normal mb-4 pb-3 after:absolute after:block after:w-1/3 after:h-[2px] after:bg-gray-400 after:mx-auto after:left-1/2 after:-translate-x-1/2 after:bottom-0 text-primary text-2xl"
                >
                  My Role
                </Typography>
                {item.details.bodyText}
              </div>
            </>
          )}

          {item.tags && (
            <div className="text-center [&_p]:pb-4 [&_p]:text-xl [&_p]:leading-10">
              <Typography
                variant="h4"
                className="relative inline-flex font-normal mb-4 pb-3 after:absolute after:block after:w-1/3 after:h-[2px] after:bg-gray-400 after:mx-auto after:left-1/2 after:-translate-x-1/2 after:bottom-0 text-primary text-2xl"
              >
                Project Features
              </Typography>
              <ul className="list-disc flex justify-center items-center mx-auto max-w-(--breakpoint-sm) gap-4 flex-wrap">
                {item.tags.map((feature, index) => (
                  <li key={index} className="text-xl text-gray-600 pr-4">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.details && (
            <div className="text-center mt-12">
              <Button variant="contained" className="btn" href={item.details.link} target="_blank">
                <LuLink className="mr-2 w-4 h-4" />
                Visit site
              </Button>
            </div>
          )}
        </div>

        <div className="border-t-2 border-b-gray-300">
          {item.related && <RelatedProjects relatedIds={item.related} allProjects={projects} />}
        </div>
        <div className="text-center mt-10 pb-12">
          <Button href="/projects" className="btn">
            <LuChevronsLeft className="mr-4 w-6 h-6" />
            Back to projects
          </Button>
        </div>
      </Container>
    </Layout>
  );
};

export default ProjectDetails;
