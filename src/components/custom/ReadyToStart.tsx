import { LuMail, LuPhone } from 'react-icons/lu';
import { s3 } from '@/utility/s3';
const ReadyToStart = () => {
  const background = s3('ready-to-start-background.gif');

  return (
    <section
      className="bg-cover bg-center bg-no-repeat border-t-[#c8c0b8] border-b-[#c8c0b8] border-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center">
        <div className="col-span-1">
          <h2 className="text-5xl text-[#666] max-w-[75%] font-light pb-6 leading-16">
            Ready to start your next project? Contact me for more details.
          </h2>
          <div className="text-[#666]">
            <ul className="o-list-bare">
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
      </div>
    </section>
  );
};

export default ReadyToStart;
