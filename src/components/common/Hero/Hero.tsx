import SocialIcons from '@/components/custom/SocialIcons';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { Container } from '@/components/layout/Container/Container';

const Hero = () => {
  const handleScroll = () => {
    const targetElement = document.getElementById('projects-home');
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-primary text-center border-b-[6px] border-secondary text-white py-8 md:py-0">
      <Container className="">
        <Typography
          variant="h1"
          className="text-white font-light text-5xl lg:text-[100px] border-b-[4px] mb-6 pb-6 inline-flex border-secondary/40"
        >
          Paddy Griffin
        </Typography>
        <Typography variant="body1" className="text-secondary lg:text-2xl">
          Frontend Engineer | UI Specialist
        </Typography>
        <Typography variant="body1" className="text-white font-light lg:text-2xl mb-10">
          Building visually engaging, performant web experiences.
        </Typography>
        <Button
          href="#projects-home"
          id="jsScroll"
          className="btn !py-6 !px-8  !bg-secondary !text-primary hover:!bg-secondary/60 "
          size={'large'}
          variant={'contained'}
          onClick={handleScroll}
        >
          See my work
        </Button>
        <SocialIcons />
      </Container>
    </section>
  );
};

export default Hero;
