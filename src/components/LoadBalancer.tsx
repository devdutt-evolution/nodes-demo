import { Handle, NodeResizeControl, Position } from '@xyflow/react';
import { Link } from 'lucide-react';
import { Expand } from './Expand';

export const LoadBalancer = ({ data }: { data: { title: string } }) => {
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
          </NodeResizeControl>
        </div>
      </div>
      <p className='mb-2 font-semibold'>Model List</p>
      <ul className=' min-w-48 border-white/45 px-2 mb-2 text-white bg-black border-2 rounded-md'>
        <li className='py-1'>Input Source</li>
      </ul>
      <p className='mb-2 font-semibold'>Stratergy</p>
      <ul className=' min-w-48 border-white/45 px-2 text-white bg-black border-2 rounded-md'>
        <li className='py-1'>Best Cost</li>
      </ul>
      <Handle type='source' position={Position.Right} className='' />
      <Handle type='target' position={Position.Left} className='' />
    </div>
  );
};
