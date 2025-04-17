import SidebarNav from '@/components/navigation/SidebarNav';
import { Container } from './Container/Container';
import Logo from '../custom/Logo';

const Header = () => {
  return (
    <header className=" bg-primary text-white py-6">
      <Container className="flex flex-row items-center justify-between !max-w-full">
        <div>
          <Logo />
        </div>
        <div>
          <SidebarNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
