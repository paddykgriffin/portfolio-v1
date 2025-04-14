import { Button } from '@/components/common/Button/Button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { LuMail, LuMenu, LuPhone } from 'react-icons/lu';

import { primaryMenuLinks } from './MenuLinks';

export default function SidebarNav() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant={'icon'}
          size={'icon'}
          disableElevation
          className={cn(
            'size-12 text-secondary transition-all duration-500 hover:text-white dark:text-white bg-transparent',
          )}
        >
          <LuMenu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'right'} className={cn('w-screen p-0 sm:w-[450px] bg-primary ')}>
        <SheetHeader className="bg-secondary px-6 py-6 border-b border-primary">
          <SheetTitle className="text-white text-[35px]">Menu</SheetTitle>
          <SheetDescription className="hidden">use links to navigate</SheetDescription>
        </SheetHeader>
        <div className=" ">
          <nav>
            <ul>
              {primaryMenuLinks.map(item => (
                <li key={item.label} className={cn('border-b border-secondary/50')}>
                  <div className="flex items-center">
                    <a
                      aria-current={window.location.pathname === item.href ? 'page' : undefined}
                      onClick={handleLinkClick}
                      href={item.href}
                      className={cn(
                        `grow px-6 py-6 font-medium text-secondary transition-colors hover:bg-secondary hover:text-white aria-[current=page]:text-white text-xl global-transition`,
                      )}
                    >
                      {item.label}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-secondary px-6 py-6">
            <ul className="o-list-bare">
              <li className="flex py-6">
                <a
                  href="mailto:paddygriffin@gmail.com"
                  className="flex items-center font-medium hover:text-white global-transition"
                >
                  <LuMail className="mr-4 w-6 h-6 text-white/50" />
                  paddygriffin@gmail.com
                </a>
              </li>
              <li className="flex py-6">
                <a
                  href="tel:00353879908117"
                  className="flex items-center font-medium hover:text-white global-transition"
                >
                  <LuPhone className="mr-4 w-6 h-6 text-white/50" />
                  +353 87 9908117
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
