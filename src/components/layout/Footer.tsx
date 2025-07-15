//import FooterNav from '@/components/navigation/FooterNav';
import siteConfig from '@/site-config';
import SocialIcons from '@/components/custom/SocialIcons';
import Logo from '@/components/custom/Logo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-b-[6px] border-secondary">
      <div className="container mx-auto flex items-center justify-center py-8">
        {/* <FooterNav /> */}
        <div className="text-center mx-auto">
          <div className="text-center mx-auto flex items-center justify-center [&>svg]:h-10">
            <Logo />
          </div>
          <div className="py-4 text-white">
            &copy; {year} Copyright - {siteConfig.siteName}
          </div>
          <div className="[&>div]:my-0 [&_a]:!w-8 [&_a]:!h-8 [&_a]:px-2">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
