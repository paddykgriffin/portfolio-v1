import SocialIcons from '@/components/custom/SocialIcons';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { Container } from '@/components/layout/Container/Container';

const Hero = () => {
  return (
    <section className="bg-primary text-center border-b-[6px] border-secondary text-white">
      <Container className="">
        <Typography
          variant="h1"
          className="text-secondary font-light lg:text-[100px] border-b-[4px] mb-6 pb-6 inline-flex border-secondary/40"
        >
          Paddy Griffin
        </Typography>
        <Typography variant="body1" className="text-secondary lg:text-2xl">
          Frontend Developer &amp; UX Designer
        </Typography>
        <Typography variant="body1" className="text-secondary/80 font-light lg:text-2xl mb-10">
          Creator of uniquely designed, high-quality websites.
        </Typography>
        <Button href="#jsScrollTarget" id="jsScroll" className="btn" size={'large'} variant={'contained'}>
          See my work
        </Button>
        <SocialIcons />
      </Container>
    </section>
  );
};

export default Hero;
