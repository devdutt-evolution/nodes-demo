import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Panel,
  Connection,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import {
  ChevronLeft,
  ChevronRight,
  Flashlight,
  Layers2,
  Plus,
} from 'lucide-react';
import {
  nodeTypes,
  templateEdgesOne,
  templateEdgesTwo,
  templateNodesOne,
  templateNodesTwo,
} from './constants';

export default function App() {
  const [blink, setBlink] = useState(false);
  const [open, setOpen] = useState(false);
  const [afterDelay, setAfterDelay] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(templateNodesOne);
  const [edges, setEdges, onEdgesChange] = useEdgesState(templateEdgesOne);

  useEffect(() => {
    if (blink) {
      setTimeout(() => {
        setBlink(false);
      }, 200);
    }
  }, [blink]);

  useEffect(() => {
    let t: number | undefined = undefined;
    if (open) {
      t = setTimeout(() => setAfterDelay(true), 500);
    } else {
      setAfterDelay(false);
    }

    return () => clearTimeout(t);
  }, [open]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    setNodes((v) => [
      ...v,
      {
        id: `${v.length + 1}`,
        type: 'titleType',
        position: {
          x: Math.random() * (window.innerHeight * 0.9),
          y: Math.random() * (window.innerHeight * 0.9),
        },
        data: {
          title: `Random node ${v.length + 1}`,
          description: `description for nde ${v.length + 1}`,
        },
      },
    ]);
  };

  return !blink ? (
    <div
      style={{ width: '100dvw', height: '100dvh' }}
      className='bg-neutral-900 flex text-sm text-white'
    >
      <div
        className={`${
          open ? 'w-48' : 'w-16'
        } border-white/35 flex flex-col h-full gap-4 px-4 py-3 border-r-2 border-dashed overflow-clip`}
        style={{ transition: 'width 500ms' }}
      >
        {open ? (
          <ChevronLeft className='w-6 h-6' onClick={() => setOpen((v) => !v)} />
        ) : (
          <ChevronRight
            className='w-6 h-6'
            onClick={() => setOpen((v) => !v)}
          />
        )}
        <div
          className='flex items-center gap-6 cursor-pointer'
          onClick={() => {
            setNodes(templateNodesOne);
            setEdges(templateEdgesOne);
          }}
        >
          <Layers2 className='w-6 h-6' />
          {afterDelay && (
            <p
              className='text-lg'
              style={{ animation: 'lengthy 1s linear forwards' }}
            >
              Template 1
            </p>
          )}
        </div>
        <div
          className='flex items-center gap-6 cursor-pointer'
          onClick={() => {
            setNodes(templateNodesTwo);
            setEdges(templateEdgesTwo);
          }}
        >
          <Layers2 className='w-6 h-6' />
          {afterDelay && (
            <p
              className='text-lg'
              style={{ animation: 'lengthy 1s linear forwards' }}
            >
              Template 2
            </p>
          )}
        </div>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 60 }}
        className='bg-stone-800 flex-1'
      >
        <Controls className='text-black' orientation='horizontal' />
        <Panel position='top-right' className='flex gap-4'>
          <button
            className='text-white/85 border-white/85 flex items-center gap-2 px-3 py-2 font-semibold border-2 rounded-md'
            onClick={() => setBlink(true)}
          >
            <Flashlight />
          </button>
          <button
            className='text-white/85 border-white/85 flex items-center gap-2 px-3 py-2 font-semibold border-2 rounded-md'
            onClick={() => setOpen((v) => !v)}
          >
            Templates
          </button>
          <button
            className='flex items-center gap-2 px-3 py-2 font-semibold text-black bg-white rounded-md'
            onClick={addNode}
          >
            <Plus className='w-5 h-5' /> Add Node
          </button>
        </Panel>
      </ReactFlow>
    </div>
  ) : (
    <div
      style={{ width: '100dvw', height: '100dvh', backgroundColor: 'white' }}
    ></div>
  );
}
