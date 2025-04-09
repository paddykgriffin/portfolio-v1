import FooterNav from '@/components/navigation/FooterNav';
import siteConfig from '@/site-config';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="">
          &copy; {year} Copyright - {siteConfig.siteName}
        </div>
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
