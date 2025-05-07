import { LuMail, LuPhone } from 'react-icons/lu';
import { s3 } from '@/utility/s3';
import { Container } from '../layout/Container/Container';
const ReadyToStart = () => {
  const background = s3('ready-to-start-background.gif');

  return (
    <section
      className="bg-cover bg-center bg-no-repeat border-t-[#c8c0b8] border-b-[#c8c0b8] border-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Container className="grid md:grid-cols-2 items-center">
        <div className="col-span-1 pt-12 md:pt-0">
          <h2 className="text-3xl xl:text-5xl text-[#666] md:max-w-[75%] font-light pb-6 xl:leading-16 text-center md:text-left">
            Ready to start your next project? Contact me for more details.
          </h2>
          <div className="text-[#666] text-center md:text-left">
            <ul className="max-w-[14rem md:max-w-full mx-auto">
              <li className="flex items-center py-3">
                <LuMail className="mr-4 w-6 h-6 text-[#666]" />
                <a href="mailto:paddygriffin@gmail.com" className="hover:text-gray-800">
                  paddygriffin@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <LuPhone className="mr-4 w-6 h-6 text-[#666]" />{' '}
                <a href="tel:00353879908117" className="hover:text-gray-800">
                  +353 87 9908117
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="c-ready-to-start__image">
          <img src={s3('ready-to-start-graphic.svg')} alt="" className="my-20" />
        </div>
      </Container>
    </section>
  );
};

export default ReadyToStart;
