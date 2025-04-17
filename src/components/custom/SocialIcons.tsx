import { Button } from '../common/Button/Button';
import { LuCodepen, LuGithub, LuLinkedin } from 'react-icons/lu';

const SocialIcons = () => {
  return (
    <div className="flex gap-4 flex-row justify-center items-center text-center mx-auto my-12">
      <Button variant={'icon'} href="https://github.com/paddykgriffin" className="" target="_blank">
        <LuGithub className="h-6 w-6" />
        <span className="hidden">github</span>
      </Button>
      <Button variant={'icon'} href="https://codepen.io/paddygriffin/" className="" target="_blank">
        <LuCodepen className="h-6 w-6" />
        <span className="hidden">github</span>
      </Button>
      <Button variant={'icon'} href="http://www.linkedin.com/in/paddygriffin" className="" target="_blank">
        <LuLinkedin className="h-6 w-6" />
        <span className="hidden">github</span>
      </Button>
    </div>
  );
};

export default SocialIcons;
