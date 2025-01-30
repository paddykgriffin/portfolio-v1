import siteConfig from '@/site-config';
import { s3 } from '@/utility/s3';
import SidebarNav from '@/components/navigation/SidebarNav';
import { Container } from './Container/Container';

const Header = () => {
  return (
    <header className=" bg-primary text-white py-6">
      <Container className="flex flex-row items-center justify-between" maxWidth="5xl">
        <div>
          <img src={s3('site-logo.svg')} alt={siteConfig.siteName} className="w-[4.5rem]" />
        </div>
        <div>
          <SidebarNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
