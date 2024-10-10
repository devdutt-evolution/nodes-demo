import { TitleNode } from './components/TitleNode';
import { OrderedModel } from './components/OrderedNode';
import { LoadBalancer } from './components/LoadBalancer';
import { MarkerType } from '@xyflow/react';

export const templateNodesOne = [
  {
    id: '1',
    type: 'titleType',
    position: { x: 0, y: 0 },
    data: { title: 'Input node', description: 'OpenAPI standard' },
  },
  {
    id: '2',
    type: 'titleType',
    position: { x: 190, y: -10 },
    data: { title: 'Input node', description: 'OpenAPI standard' },
  },
  {
    id: '3',
    type: 'orderedType',
    position: { x: 400, y: 10 },
    data: { title: 'Ordered Models' },
  },
  {
    id: '4',
    type: 'balancerType',
    position: { x: 700, y: -10 },
    data: { title: 'Load Balancer' },
  },
  {
    id: '5',
    type: 'titleType',
    position: { x: 1000, y: 130 },
    data: { title: 'Inference', description: 'Inference Engine' },
  },
  {
    id: '6',
    type: 'titleType',
    position: { x: 1200, y: -10 },
    data: { title: 'Output node', description: 'OpenAI API standard' },
  },
];
export const templateEdgesOne = [
  {
    id: 'e1-2',
    type: 'step',
    source: '1',
    target: '2',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e2-3',
    type: 'step',
    source: '2',
    target: '3',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e3-4',
    type: 'step',
    source: '3',
    target: '4',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e4-5',
    type: 'step',
    source: '4',
    target: '5',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e5-6',
    type: 'step',
    source: '5',
    target: '6',
    markerEnd: { type: MarkerType.Arrow },
  },
];
export const templateNodesTwo = [
  {
    id: '1',
    type: 'titleType',
    position: { x: 0, y: 0 },
    data: {
      title: 'Template Two',
      description: 'With different set of elements',
    },
  },
  {
    id: '2',
    type: 'orderedType',
    position: { x: 300, y: 10 },
    data: { title: 'Listing Something' },
  },
  {
    id: '3',
    type: 'titleType',
    position: { x: 320, y: -200 },
    data: { title: 'Text node', description: 'description about the topic' },
  },
];
export const templateEdgesTwo = [
  {
    id: 'e1-2',
    type: 'step',
    source: '1',
    target: '2',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e2-3',
    type: 'step',
    source: '2',
    target: '3',
    markerEnd: { type: MarkerType.Arrow },
  },
];
export const nodeTypes = {
  titleType: TitleNode,
  orderedType: OrderedModel,
  balancerType: LoadBalancer,
};
