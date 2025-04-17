import Layout from '@/components/layout/Layout';
import { Typography } from '@/components/common/Typography/Typography';
import { Outlet } from 'react-router-dom';
import SEO from '@/components/custom/SEO';
import ContactCTA from '@/components/common/ContactCTA/ContactCTA';

const Projects = () => {
  return (
    <Layout pageTitle="Projects">
      <SEO
        title="Projects"
        description="View my wide range of projects, my projects are mixture of standalone project
s to collabrative projects, industries include telecommunications, engineering, service and more. find out more"
      />
      <section>
        <div className="container mx-auto text-center">
          <div className="pt-12 pb-12">
            <Typography variant={'h1'} className="lg:text-6xl !font-medium text-[#666]">
              Projects
            </Typography>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto border-b-2 border-b-gray-500/30 pb-16 mb-16">
          <Outlet />
        </div>
      </section>
      <ContactCTA title="Like what you see?" description="Feel free to drop me a line if your interested" />
    </Layout>
  );
};

export default Projects;
