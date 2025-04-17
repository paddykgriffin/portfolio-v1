import useScrollTrigger from '@/hooks/useScrollTrigger';
import { Button } from '../common/Button/Button';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'fixed right-5 mr-[var(--removed-body-scroll-bar-size)] hidden transition-[bottom] duration-300 md:block',
        {
          'bottom-0 opacity-0': !trigger,
          'bottom-12 opacity-100': trigger,
        },
      )}
    >
      <Button onClick={handleClick} size={'icon'} className="bg-primary rounded-full shadow-md">
        <Icon icon="fe:arrow-up" className="text-white" />
      </Button>
    </div>
  );
}

export default ScrollToTop;
