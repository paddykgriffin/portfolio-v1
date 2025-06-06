import ContactCTA from '@/components/common/ContactCTA/ContactCTA';
import { Typography } from '@/components/common/Typography/Typography';
import SEO from '@/components/custom/SEO';
import { Container } from '@/components/layout/Container/Container';
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
        <Container className="text-center">
          <div className="pt-12 pb-6">
            <Typography variant={'h1'} className="lg:text-6xl !font-medium text-[#666]">
              Contact me
            </Typography>
          </div>
        </Container>
      </section>

      <ContactCTA title={false} />
    </Layout>
  );
}

export default Contact;
