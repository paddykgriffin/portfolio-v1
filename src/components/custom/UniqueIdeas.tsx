import { Typography } from '../common/Typography/Typography';
import { Container } from '../layout/Container/Container';

const UniqueIdeas = () => {
  return (
    <section className="text-center py-12 md:py-24 text-[#666] bg-[#f3f3f1]">
      <Container>
        <Typography variant="body1" className="leading-7 text-2xl mb-6 text-gray-600">
          Creative solutions start with thoughtful strategy.
        </Typography>
        <Typography variant="body1" className="leading-7 text-2xl mb-6 text-gray-600">
          Every project is built on three essential pillars for a stunning web application.
        </Typography>
      </Container>
    </section>
  );
};

export default UniqueIdeas;
