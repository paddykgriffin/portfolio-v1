import { LuTag } from 'react-icons/lu';
import { Project } from './Item';
import { s3 } from '@/utility/s3';
import { Button } from '../common/Button/Button';
import { Link } from 'react-router-dom';

const ProjectBlock = ({ name, id, logo, thumbnail, tags }: Project) => {
  return (
    <div className="grid text-center group overflow-hidden">
      <Link to={`/projects/${id}`} className="col-start-1 row-start-1 content-center z-20">
        <div className="relative h-1/2">
          <img
            src={`${s3(logo)}.svg`}
            alt={name}
            className="logo mx-auto absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-18/16 transition-transform duration-500 h-28 w-90"
          />

          <div className="col-start-1 row-start-1 tags flex text-white opacity-0 justify-center absolute left-1/2 -translate-x-1/2 top-1/2 group-hover:opacity-100 w-full">
            <LuTag className="text-4xl text-white w-5 h-5 mr-2" /> {tags.slice(0, 3).join(', ')}
          </div>

          <Button
            variant="outline"
            className="opacity-0  text-white text-xl font-normal py-5 px-24 hover:bg-white hover:text-black absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-8/6 transition-top duration-1000 transition-transform group-hover:opacity-100"
          >
            view project
          </Button>
        </div>
      </Link>
      <div className="bg-black/30 col-start-1 row-start-1 z-10" />
      <img src={`${s3(thumbnail)}.jpg`} alt={name} className="object-fill col-start-1 row-start-1" />
    </div>
  );
};

export default ProjectBlock;
//absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-center justify-center gap-2 p-4
