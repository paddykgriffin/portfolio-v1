import { LuCode, LuLaptop, LuPencil, LuTablet } from 'react-icons/lu';

const CoreSkills = () => {
  return (
    <div className="md:py-16">
      <div className="container mx-auto">
        <div id="jsCoreSkills" className="grid md:grid-cols-3">
          <div className="text-center mt-[-95px]">
            <div className="bg-white rounded-full w-[200px] h-[200px] mx-auto grid place-items-center">
              <span className="text-center mx-auto">
                <LuTablet className="w-30 h-30 text-center mx-auto stroke-primary/70" />
              </span>
            </div>
            <h3 className="text-2xl mb-12 pt-6 text-secondary">UX</h3>
            <p className="px-12">
              User experience is a crucial to ensuring the end product works successfully to maximise results.
            </p>
          </div>

          <div className="text-center mt-[-95px]">
            <div className="bg-white rounded-full w-[200px] h-[200px] mx-auto grid place-items-center relative">
              <span className="">
                <LuLaptop className="w-30 h-30 text-center mx-auto stroke-primary/70" />
              </span>
              <span className="absolute top-10 right-5 ">
                <LuPencil className="w-15 h-15 stroke-primary/95" />
              </span>
            </div>
            <h3 className="text-2xl mb-12 pt-6 text-secondary">Visual Design</h3>
            <p className="px-12">From a blank canvas, a unique design is created.</p>
          </div>

          <div className="text-center mt-[-95px]">
            <div className="bg-white rounded-full w-[200px] h-[200px] mx-auto grid place-items-center">
              <span className="">
                <LuCode className="w-30 h-30 text-center mx-auto stroke-primary/70" />
              </span>
            </div>
            <h3 className="text-2xl mb-12 pt-6 text-secondary">Frontend</h3>
            <p className="px-12">
              With a personalised design in place, your website will be coded to the highest standard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreSkills;
