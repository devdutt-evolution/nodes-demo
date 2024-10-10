import { Handle, Position } from '@xyflow/react';

export const TitleNode = ({
  data,
}: {
  data: { title: string; description: string };
}) => {
  return (
    <>
      <div className='max-h-96 max-w-52 border-white/45 flex flex-col p-3 border-2 border-dashed rounded-lg'>
        <div className=' mb-2 text-lg font-semibold'>{data.title}</div>
        <div className='flex justify-center flex-1'>{data.description} </div>
        <Handle type='source' position={Position.Right} className='' />
        <Handle type='target' position={Position.Left} className='' />
      </div>
    </>
  );
};
