import Layout from '@/components/layout/Layout';
import { Typography } from '@/components/common/Typography/Typography';
import { s3 } from '@/utility/s3';
import SEO from '@/components/custom/SEO';
import ContactCTA from '@/components/common/ContactCTA/ContactCTA';
import { Container } from '@/components/layout/Container/Container';
function About() {
  return (
    <Layout pageTitle="About">
      <SEO
        title="About"
        description="Learn more about me! from my background in the industry to where I am
  now and what drives me from day to day to stay motivated and driven in the web industry."
      />
      <section>
        <Container className="text-center">
          <div className="pt-12 ">
            <Typography variant={'h1'} className="lg:text-6xl !font-medium text-[#666]">
              About me
            </Typography>
            <Typography variant={'body1'} className="text-[#9d9da5] pt-6">
              Web Developer, Creative Designer & Excellent Problem Solver
            </Typography>
          </div>
        </Container>
      </section>
      <section>
        <div className="pt-12">
          <Container className="border-b-2 border-b-gray-500/30 pb-16 mb-16">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-7">
                <Typography variant={'h3'} className="text-secondary">
                  Who am I?
                </Typography>
                <Typography variant="body1" className="text-[#666] pb-4 xl:pr-60">
                  I am a Dublin-based Web Developer focusing on creating and building pixel perfect websites and
                  applications. I pride myself on my attention to detail and problem-solving whilst using my wide range
                  of skills to incorporate new technologies and methodologies.
                </Typography>

                <Typography variant="body1" className="text-[#666] pb-4  xl:pr-60">
                  I am passionate about what I do and endeavour to keep fully updated on the latest platforms and
                  technologies in web development.
                </Typography>

                <Typography variant="body1" className="text-[#666] pb-4  xl:pr-60">
                  I am currently employed as a Web Developer for a Accenture Ireland working on small to large scale
                  projects for global leading brands.
                </Typography>

                <Typography variant={'h3'} className="text-secondary">
                  Technical and Creative Skills
                </Typography>
                <Typography variant="body1" className="text-[#666] pb-4  xl:pr-60">
                  I have a very broad range of technical skills which include HTML, CSS, SCSS, TailwindCSS, MaterialUI,
                  Styled Components Javascript, ReactJS, Payload CMS & NextJS.
                </Typography>
                <Typography variant="body1" className="text-[#666] pb-4  xl:pr-60">
                  In my current role I have grown as a web developer learning new skills and technologies suchs as
                  ReactJs, NextJs and similar frameworks. I have gained a lot of experience in building ReactJS apps
                  with various techniques and using different libraries such as Redux, React Router, Axios and many
                  more.
                </Typography>
                <Typography variant="body1" className="text-[#666] md:pb-4 xl:pr-60">
                  As well as being a proficient coder, I have a passionate creative flair for designing websites,
                  interfaces, email newsletters and campaign landing pages using Adobe Creative Suite.
                </Typography>
              </div>
              <div className="md:col-span-5 md:text-right">
                <img
                  src={s3('photo-of-paddy.png')}
                  alt="Paddy Griffin UX Designer and Frontend Developer"
                  className="md:rotate-12 transiton-all duration-300 hover:rotate-0 md:mt-[96px]"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
      <ContactCTA />
    </Layout>
  );
}

export default About;
