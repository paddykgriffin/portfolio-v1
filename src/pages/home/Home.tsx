import Layout from '@/components/layout/Layout';
import Hero from '@/components/common/Hero/Hero';
import ReadyToStart from '@/components/custom/ReadyToStart';
import CoreSkills from '@/components/custom/CoreSkills';
import UniqueIdeas from '@/components/custom/UniqueIdeas';
import FeaturedProjectsHome from '@/components/custom/FeaturedProjectsHome';
import SEO from '@/components/custom/SEO';

function Home() {
  return (
    <Layout pageTitle="Home">
      <SEO
        title="Home"
        description="Welcome to my portofolio website, you can learn more about me through
  the various projects I have been involved in and also via my about page"
      />
      <Hero />
      <UniqueIdeas />
      <CoreSkills />
      <FeaturedProjectsHome />
      <ReadyToStart />
    </Layout>
  );
}

export default Home;
