import Layout from '@/components/layout/Layout';
import { Typography } from '@/components/common/Typography/Typography';
import Hero from '@/components/common/Hero/Hero';
//import { s3 } from '@/utility/s3';

function Home() {
  return (
    <Layout pageTitle="Homepage">
      <Hero />
      <Typography variant="h1" align="center">
        Homepage
      </Typography>

      {/* <img src={s3('marsumilae-e9kPHCJCHM8-unsplash.jpg')} alt="" />

      <img src={s3('kevin-bessat-lii7PGbpEZQ-unsplash.jpg')} alt="" /> */}
    </Layout>
  );
}

export default Home;
