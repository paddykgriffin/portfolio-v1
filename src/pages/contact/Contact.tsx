import ContactCTA from '@/components/common/ContactCTA/ContactCTA';
import { Typography } from '@/components/common/Typography/Typography';
import SEO from '@/components/custom/SEO';
import { Container } from '@/components/layout/Container/Container';
import Layout from '@/components/layout/Layout';

function Contact() {
  return (
    <Layout pageTitle="Contact">
      <SEO title="Contact" description="Reach out to connect, say hello, or discuss a new project or collaboration!" />
      <section>
        <Container className="text-center">
          <div className="pt-12 pb-6">
            <Typography variant={'h1'} className="lg:text-6xl !font-medium text-primary">
              Contact Me
            </Typography>
          </div>
        </Container>
      </section>

      <ContactCTA title={false} />
    </Layout>
  );
}

export default Contact;
