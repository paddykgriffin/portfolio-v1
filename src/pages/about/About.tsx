import Layout from '@/components/layout/Layout';
import { Typography } from '@/components/common/Typography/Typography';
import { LuMail, LuPhone } from 'react-icons/lu';
import { s3 } from '@/utility/s3';
import SEO from '@/components/custom/SEO';
import { Contact } from 'lucide-react';
import ContactCTA from '@/components/common/ContactCTA/ContactCTA';
function About() {
  return (
    <Layout pageTitle="About">
      <SEO
        title="About"
        description="Learn more about me! from my background in the industry to where I am
  now and what drives me from day to day to stay motivated and driven in the web industry."
      />
      <section>
        <div className="container mx-auto text-center">
          <div className="pt-12 ">
            <Typography variant={'h1'} className="lg:text-6xl !font-medium text-[#666]">
              About me
            </Typography>
            <Typography variant={'body1'} className="text-[#9d9da5] pt-6">
              Frontend Developer, Creative Designer & Excellent Problem Solver
            </Typography>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-12">
          <div className="container mx-auto border-b-2 border-b-gray-500/30 pb-16 mb-16">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="col-span-7">
                <Typography variant={'h3'} className="text-secondary">
                  Who am I?
                </Typography>
                <Typography variant="body1" className="text-[#666] pb-4 pr-60">
                  I am a Dublin-based Frontend Developer &amp; UX Designer, focusing on creating and building pixel
                  perfect websites and interfaces. I pride myself on my attention to detail and problem-solving whilst
                  using my wide range of skills to incorporate new technologies and methodologies.
                </Typography>

                <Typography variant="body1" className="text-[#666] pb-4  pr-60">
                  I am passionate about what I do and endeavour to keep fully updated on the latest platforms and
                  technologies in web development.
                </Typography>

                <Typography variant="body1" className="text-[#666] pb-4  pr-60">
                  I am currently employed as a Senior Frontend Developer for a leading, award-winning digital
                  transformation agency in Dublin.
                </Typography>

                <Typography variant={'h3'} className="text-secondary">
                  Awards{' '}
                </Typography>
                <Typography variant="body1" className="text-[#666] pb-4  pr-60">
                  In my current role, I have worked on the <a href="/projects/cpw.html">Carphone Warehouse</a> website,
                  which was awarded{' '}
                  <a
                    className="text-primary decoration-dotted underline hover:text-primary/80"
                    href="https://www.kentico.com/customers/site-of-the-year/site-of-the-year-2015#site44254"
                    target="_blank"
                  >
                    "Best Customer Success Site of the Year"
                  </a>{' '}
                  in 2015.
                </Typography>

                <Typography variant={'h3'} className="text-secondary">
                  Technical and Creative Skills
                </Typography>
                <Typography variant="body1" className="text-[#666] pb-4  pr-60">
                  I have a very broad range of technical skills which include HTML, CSS, SCSS, jQuery &amp; Javascript.{' '}
                </Typography>
                <Typography variant="body1" className="text-[#666] pb-4  pr-60">
                  I have gained experience using the .NET framework in my current role.{' '}
                </Typography>
                <Typography variant="body1" className="text-[#666] pb-4  pr-60">
                  As well as being a proficient coder, I have a passionate creative flair for designing websites,
                  interfaces, email newsletters and campaign landing pages using Adobe Creative Suite.
                </Typography>
              </div>
              <div className="col-span-5 md:text-right">
                <img
                  src={s3('photo-of-paddy.png')}
                  alt="Paddy Griffin UX Designer and Frontend Developer"
                  className="rotate-12 transiton-all duration-300 hover:rotate-0 mt-[96px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </Layout>
  );
}

export default About;
