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
          className={cn('size-7 text-white transition-all hover:text-white dark:text-white')}
        >
          <LuMenu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'right'} className={cn('w-screen p-0 sm:w-[450px] bg-secondary ')}>
        <SheetHeader className="bg-[#101023] px-6 py-6 border-b border-primary">
          <SheetTitle className="text-[#adadb9] text-[35px]">Menu</SheetTitle>
          <SheetDescription className="hidden">use links to navigate</SheetDescription>
        </SheetHeader>
        <div className=" ">
          {/* <div className="flex items-center justify-between border-t border-gray-300 px-6 py-3">
            <Button
              variant={'icon'}
              size={'icon'}
              disableElevation
              className={cn('size-7 text-black transition-all dark:text-white')}
            >
              <a href="/#" onClick={handleLinkClick}>
                <LuHome className="h-8 w-8" />
              </a>
            </Button>
          </div> */}
          <nav>
            <ul>
              {primaryMenuLinks.map(item => (
                <li key={item.label} className={cn('border-b border-primary')}>
                  <div className="flex items-center">
                    <a
                      onClick={handleLinkClick}
                      href={item.href}
                      className={cn(
                        `grow px-6 py-6 font-medium  text-[#adadb9] transition-colors hover:bg-primary aria-[current=page]:text-primary text-xl`,
                      )}
                    >
                      {item.label}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-[#adadb9] px-6 py-6">
            <ul className="o-list-bare">
              <li className="flex py-6">
                <a href="mailto:paddygriffin@gmail.com" className="flex items-center font-medium">
                  <LuMail className="mr-4 w-6 h-6" />
                  paddygriffin@gmail.com
                </a>
              </li>
              <li className="flex py-6">
                <a href="tel:00353879908117" className="flex items-center font-medium">
                  <LuPhone className="mr-4 w-6 h-6" />
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
