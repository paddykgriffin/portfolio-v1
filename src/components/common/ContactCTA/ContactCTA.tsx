import { Container } from '@/components/layout/Container/Container';
import { Typography } from '../Typography/Typography';
import { LuMail, LuPhone } from 'react-icons/lu';

interface ContactCTAProps {
  title?: boolean | string;
  description?: boolean | string;
}

const sharedStyles = 'w-14 h-14 md:w-20 md:h-20  text-gray-500 text-center mx-auto';

const data = [
  {
    title: 'Phone',
    text: '+353879908117',
    icon: <LuPhone className={sharedStyles} />,
  },
  {
    title: 'Email',
    text: 'paddygriffin@gmail.com',
    icon: <LuMail className={sharedStyles} />,
  },
];

const ContactCTA = ({ title = true, description = true }: ContactCTAProps) => {
  const defaultTitle = "Let's work together";
  const defaultDescription =
    "Have a project or idea you want to discuss? Feel free to reach out and let's make something great.";

  return (
    <section>
      <Container>
        <div className="pt-1 pb-24">
          {title && (
            <div className="max-w-[50rem] mx-auto text-center">
              <Typography variant={'h2'} className="lg:text-4xl !font-medium text-secondary">
                {typeof title === 'string' ? title : defaultTitle}
              </Typography>
            </div>
          )}

          {description && (
            <div className="max-w-[40rem] mx-auto text-center">
              <Typography variant={'body1'} className="text-gray-400 pb-8">
                {typeof description === 'string' ? description : defaultDescription}
              </Typography>
            </div>
          )}

          <div className="grid max-w-[50rem] mx-auto grid-cols-2">
            {data.map((item, index) => (
              <div key={index} className="text-center mb-12 md:mb-0">
                <span className="bg-gray-200/50 w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] grid mx-auto place-items-center rounded-full mb-8">
                  {item.icon}
                </span>
                <Typography variant={'h3'} className="font-medium text-secondary pb-4">
                  {item.title}
                </Typography>
                <a
                  href={item.title === 'Phone' ? `tel:${item.text}` : `mailto:${item.text}`}
                  className="text-gray-500 hover:text-primary/80 global-transition"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
