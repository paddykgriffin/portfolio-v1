import { Typography } from '../common/Typography/Typography';
import { Container } from '../layout/Container/Container';

const UniqueIdeas = () => {
  return (
    <section className="text-center py-12 md:py-24 text-[#666] bg-[#f3f3f1]">
      <Container>
        <Typography variant="body1" className="leading-7 text-2xl mb-6 text-gray-600">
          Unique ideas requires great planning.
        </Typography>
        <Typography variant="body1" className="leading-7 text-2xl mb-6 text-gray-600">
          All my projects use 3 core processes to develop a beautiful site.
        </Typography>
      </Container>
    </section>
  );
};

export default UniqueIdeas;
