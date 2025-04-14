import Layout from '@/components/layout/Layout';
import { Typography } from '@/components/common/Typography/Typography';
import { LuMail, LuPhone } from 'react-icons/lu';
import { s3 } from '@/utility/s3';
function About() {
  return (
    <Layout pageTitle="About">
      {' '}
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
      <section>
        <div className="pt-1 pb-24">
          <div className="max-w-[50rem] mx-auto text-center">
            <Typography variant={'h2'} className="lg:text-4xl !font-medium text-secondary">
              Interested to hear more?
            </Typography>
            <Typography variant={'body1'} className="text-[#9d9da5] pb-8">
              Drop me a mail or give me a call to find out more
            </Typography>
          </div>
          <div className="grid max-w-[50rem] mx-auto md:grid-cols-2">
            <div className="text-center">
              <span className="bg-gray-200/50 w-[200px] h-[200px] grid mx-auto place-items-center rounded-full mb-8">
                <LuPhone className="text-7xl text-[#666] text-center mx-auto" />
              </span>
              <Typography variant={'h3'} className="font-medium text-secondary pb-4">
                Phone
              </Typography>
              <a href="tel:00353879908117" className="text-gray-500 hover:text-primary/80 global-transition">
                +353879908117
              </a>
            </div>
            <div className="text-center">
              <span className="bg-gray-200/50 w-[200px] h-[200px] grid mx-auto place-items-center rounded-full mb-8">
                <LuMail className="text-7xl text-[#666] text-center mx-auto" />
              </span>
              <Typography variant={'h3'} className="font-medium text-secondary pb-4">
                Email
              </Typography>
              <a
                href="mailto:paddygriffin@gmail.com?subject=Website%20email%20enquiry"
                className="text-gray-500 hover:text-primary/80 global-transition"
              >
                paddygriffin@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
