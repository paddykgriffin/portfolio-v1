import { Typography } from '../Typography/Typography';
import { LuMail, LuPhone } from 'react-icons/lu';

interface ContactCTAProps {
  title?: boolean | string;
  description?: boolean | string;
}

const ContactCTA = ({ title = true, description = true }: ContactCTAProps) => {
  const defaultTitle = "Let's work together";
  const defaultDescription =
    "Have a project or idea you want to discuss? Feel free to reach out and let's make something great.";

  return (
    <section>
      <div className="pt-1 pb-24">
        {title && (
          <div className="max-w-[50rem] mx-auto text-center">
            <Typography variant={'h2'} className="lg:text-4xl !font-medium text-secondary">
              {typeof title === 'string' ? title : defaultTitle}
            </Typography>
          </div>
        )}

        {description && (
          <div className="max-w-[50rem] mx-auto text-center">
            <Typography variant={'body1'} className="text-[#9d9da5] pb-8">
              {typeof description === 'string' ? description : defaultDescription}
            </Typography>
          </div>
        )}

        <div className="grid max-w-[50rem] mx-auto md:grid-cols-2">
          <div className="text-center">
            <span className="bg-gray-200/50 w-[200px] h-[200px] grid mx-auto place-items-center rounded-full mb-8">
              <LuPhone className="text-7xl text-[#666] text-center mx-auto" />
            </span>
            <Typography variant={'h3'} className="font-medium text-secondary pb-4">
              Phone
            </Typography>
            <a href="tel:00353879908117" className="text-gray-500 hover:text-primary/80 global-transition">
              +353879908117
            </a>
          </div>
          <div className="text-center">
            <span className="bg-gray-200/50 w-[200px] h-[200px] grid mx-auto place-items-center rounded-full mb-8">
              <LuMail className="text-7xl text-[#666] text-center mx-auto" />
            </span>
            <Typography variant={'h3'} className="font-medium text-secondary pb-4">
              Email
            </Typography>
            <a
              href="mailto:paddygriffin@gmail.com?subject=Website%20email%20enquiry"
              className="text-gray-500 hover:text-primary/80 global-transition"
            >
              paddygriffin@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
