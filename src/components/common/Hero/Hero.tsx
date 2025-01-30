import { LuCodepen, LuGithub, LuLinkedin } from 'react-icons/lu';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { Container } from '@/components/layout/Container/Container';

const Hero = () => {
  return (
    <section className="bg-primary text-center pb-[15rem] border-b-[6px] border-[#101023]">
      <Container className="bg-red-500">
        <Typography variant="h1">Paddy Griffin</Typography>
        <Typography variant="body1" className="c-hero__job-title">
          Frontend Developer &amp; UX Designer
        </Typography>
        <Typography>Creator of uniquely designed, high-quality websites.</Typography>
        <a href="#jsScrollTarget" id="jsScroll" className="c-btn c-btn--primary">
          See my work
        </a>
        <div className="bg-yellow-500 grid gap-4 grid-cols-3 justify-around items-center text-center w-[300px] mx-auto">
          <Button variant={'contained'} href="https://github.com/paddykgriffin" className="w-12 h-12 rounded-full">
            <LuGithub className="h-4 w-4" />
            <span className="hidden">github</span>
          </Button>
          <Button variant={'contained'} href="https://codepen.io/paddygriffin/" className="w-12 h-12 rounded-full">
            <LuCodepen className="h-4 w-4" />
            <span className="hidden">github</span>
          </Button>
          <Button
            variant={'contained'}
            href="http://www.linkedin.com/in/paddygriffin"
            className="w-12 h-12 rounded-full"
          >
            <LuLinkedin className="h-4 w-4" />
            <span className="hidden">github</span>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
