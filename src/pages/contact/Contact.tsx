import ContactCTA from '@/components/common/ContactCTA/ContactCTA';
import { Typography } from '@/components/common/Typography/Typography';
import SEO from '@/components/custom/SEO';
import Layout from '@/components/layout/Layout';

function Contact() {
  return (
    <Layout pageTitle="Contact">
      <SEO
        title="Contact"
        description="Get in touch with me today to say hi or if you looking to get started
  on a new project or something else!"
      />
      <section>
        <div className="container mx-auto text-center">
          <div className="pt-12 pb-24">
            <Typography variant={'h1'} className="lg:text-6xl !font-medium text-[#666]">
              Contact me
            </Typography>
            {/* <Typography variant={'body1'} className="text-[#9d9da5] pt-6">
              Drop me a mail or give me a call to find out more
            </Typography> */}
          </div>
        </div>
      </section>

      <ContactCTA title={false} />
    </Layout>
  );
}

export default Contact;
