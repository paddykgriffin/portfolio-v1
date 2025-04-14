import { Typography } from '@/components/common/Typography/Typography';
import Layout from '@/components/layout/Layout';
import { LuMail, LuPhone } from 'react-icons/lu';

function Contact() {
  return (
    <Layout pageTitle="Contact">
      <section>
        <div className="container mx-auto text-center">
          <div className="pt-12 pb-24">
            <Typography variant={'h1'} className="lg:text-6xl !font-medium text-[#666]">
              Contact me
            </Typography>
            <Typography variant={'body1'} className="text-[#9d9da5] pt-6">
              Drop me a mail or give me a call to find out more
            </Typography>
          </div>
        </div>
      </section>

      <div className="pt-1 pb-24">
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
    </Layout>
  );
}

export default Contact;
