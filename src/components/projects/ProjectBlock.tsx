import { LuTag } from 'react-icons/lu';
import { Project } from './Item';
import { s3 } from '@/utility/s3';
import { Button } from '../common/Button/Button';

const ProjectBlock = ({ name, id, logo, thumbnail, tags }: Project) => {
  return (
    <div className="bg-amber-600 text-center relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col items-center justify-center gap-2 p-4">
        <img src={`${s3(logo)}.png`} alt={name} />

        <div className="font-normal text-white flex items-center mb-4">
          <LuTag className="text-4xl text-white w-5 h-5 mr-2" /> {tags.join(', ')}
        </div>

        <Button
          href={`/projects/${id}`}
          variant="outline"
          className="text-white text-xl font-normal py-5 px-24 hover:bg-white hover:text-black global-transition"
        >
          view project
        </Button>
      </div>

      <img src={`${s3(thumbnail)}.jpg`} alt={name} className="object-fill" />
    </div>
  );
};

export default ProjectBlock;
