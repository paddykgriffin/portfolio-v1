import Layout from '@/components/layout/Layout';
import { Typography } from '@/components/common/Typography/Typography';
import Hero from '@/components/common/Hero/Hero';
import CTA from '@/components/custom/CTA';
import CoreSkills from '@/components/custom/CoreSkills';
import UniqueIdeas from '@/components/custom/UniqueIdeas';
import FeaturedProjectsHome from '@/components/custom/projects/FeaturedProjectsHome';

function Home() {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <Typography variant="h1" align="center"></Typography>
      <UniqueIdeas />
      <CoreSkills />
      <FeaturedProjectsHome />
      <CTA />
    </Layout>
  );
}

export default Home;
