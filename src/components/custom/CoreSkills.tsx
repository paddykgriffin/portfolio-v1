import { LuCode, LuLaptop, LuTablet } from 'react-icons/lu';
import { Container } from '../layout/Container/Container';
import { Typography } from '../common/Typography/Typography';

const data = [
  {
    title: 'User Experience',
    description: 'Crafting intuitive interfaces that delight users and drive engagement.',
    icon: <LuTablet className="w-14 h-14 lg:w-30 lg:h-30 mx-auto stroke-primary" />,
  },
  {
    title: 'Design',
    description: 'Transforming ideas into visually compelling and memorable digital experiences.',
    icon: <LuLaptop className="w-14 h-14 lg:w-30 lg:h-30 mx-auto stroke-primary" />,
  },
  {
    title: 'Development',
    description: 'Building robust, scalable, and maintainable frontend solutions with modern technologies.',
    icon: <LuCode className="w-14 h-14 lg:w-30 lg:h-30 mx-auto stroke-primary" />,
  },
];

const CoreSkills = () => {
  return (
    <section className="pt-8 lg:py-16">
      <Container>
        <div className="grid md:grid-cols-3">
          {data.map((item, index) => (
            <div key={index} className="text-center md:mt-[-65px] lg:mt-[-95px] mb-12 md:mb-6 lg:mb-0">
              <div className="bg-gray-200/50 md:bg-white rounded-full w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] mx-auto grid place-items-center">
                <span className="">{item.icon}</span>
              </div>
              <h3 className="text-2xl md:mb-6 lg:mb-4 pt-6 text-primary">{item.title}</h3>
              <Typography variant="body1" className="px-6 lg:px-12 text-lg lg:text-2xl text-gray-500">
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreSkills;
