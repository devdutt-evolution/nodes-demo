import { Handle, NodeResizeControl, Position } from '@xyflow/react';
import { Link } from 'lucide-react';
import { Expand } from './Expand';
import { SelectedIcon } from './SelectedIcon';

export const OrderedModel = ({ data }: { data: { title: string } }) => {
  return (
    <div className='min-w-64 border-white/45 flex flex-col p-3 border-2 border-dashed rounded-lg'>
      <div className='flex items-center justify-between mb-2 text-lg font-semibold'>
        <p>{data.title}</p>
        <div className='relative flex gap-2'>
          <Link className='w-4 h-4 mr-6 cursor-pointer' />
          <NodeResizeControl
            style={{
              display: 'block',
              background: 'transparent',
              border: 'none',
              top: 4,
              left: 28,
            }}
            minWidth={260}
            minHeight={230}
            maxHeight={380}
          >
            <Expand />
            {/* className='w-4 h-4 cursor-pointer'  */}
          </NodeResizeControl>
        </div>
      </div>
      <p className='mb-2 font-semibold'>List of models</p>
      <ul className=' min-w-48 border-white/45 text-white bg-black border-2 rounded-md'>
        <li className='border-white/45 flex items-center justify-between px-2 py-1 border-b-2'>
          <p>Model 1</p> <SelectedIcon />
        </li>
        <li className='border-white/45 flex items-center justify-between px-2 py-1 border-b-2'>
          <p>Model 2</p> <SelectedIcon />
        </li>
        <li className='flex items-center justify-between px-2 py-1'>
          <p>Model 3</p> <SelectedIcon />
        </li>
      </ul>
      <Handle type='source' position={Position.Right} className='' />
      <Handle type='target' position={Position.Left} className='' />
    </div>
  );
};
