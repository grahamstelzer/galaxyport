import { Edge, Node } from "reactflow";

export const initialEdges: Edge[] = [
    {
        id: 'name-nnpython',
        source: 'name',
        target: 'projects',
        type: 'customEdge',
        style: { stroke: 'rgba(0, 255, 0, 1)' },
    },
    {
        id: 'proj-tf',
        source: 'projects',
        target: 'transformer',
        type: 'customEdge',
        style: { stroke: 'rgba(0, 255, 0, 1)' },
    },
    {
        id: 'proj-bsAI',
        source: 'projects',
        target: 'bsAI',
        type: 'customEdge',
        style: { stroke: 'rgba(0, 255, 0, 1)' },
    },
    {
        id: 'name-resume',
        source: 'name',
        target: 'resume',
        type: 'customEdge',
        style: { stroke: 'rgba(0, 255, 0, 1)' },
    },
];

export const initialNodes: Node[] = [
    {
        id: 'name',
        type: 'nameNode',
        position: { x: 0, y: -200 },
        data: { 
            text: '', 
            title: 'graham stelzer'
        },
        draggable: false,
    },


    {
        id: 'resume',
        type: 'documentNode',
        position: { x: -1000, y: -500 },
        data: { 
            doc_link: 'https://drive.google.com/file/d/109O2H1DSEFhTMD3moYbCb9lGhSO9zFWg/preview',
            title: 'resume'
        },
        draggable: false,
    },

    {
        id: 'linkedin',
        type: 'linkNode',
        position: { x: -400, y: -100 },
        data: { 
            link: 'https://www.linkedin.com/in/graham-stelzer/',
            title: 'linkedin'
        },
        draggable: false,
    },
    {
        id: 'email',
        type: 'linkNode',
        position: { x: -350, y: -50 },
        data: { 
            link: 'mailto:graham.stelzer.01@gmail.com',
            title: 'graham.stelzer@gmail.com'
        },
        draggable: false,
    },
    {
        id: 'phone',
        type: 'linkNode',
        position: { x: -200, y: -0 },
        data: { 
            link: '',
            title: '978-732-9733'
        },
        draggable: false,
    },





    {
        id: 'projects',
        type: 'titleNode',
        position: { x: 30, y: 100 },
        data: { 
            text: '', 
            title: 'projects'
        },
        draggable: false,
    },
    {
        id: 'transformer',
        type: 'titleNode',
        position: { x: -400, y: 200 },
        data: { 
            shows: '', 
            title: 'transformer'
        },
        draggable: false,
    },
    {
        id: 'transformer-arch',
        type: 'iframeNode',
        position: { x: -500, y: 300 },
        data: { 
            shows: './transformer_arch.html', 
            title: 'architecture diagram'
        },
        draggable: false,
    },
    {
        id: 'transformer-ghub',
        type: 'iframeNode',
        position: { x: -250, y: 300 },
        data: { 
            shows: '', 
            title: 'github'
        },
        draggable: false,
    },



    {
        id: 'bsAI',
        type: 'titleNode',
        position: { x: 400, y: 200 },
        data: { 
            text: '', 
            title: 'beta-sprAI'
        },
        draggable: false,
    },
    {
        id: 'bsAI-workflow',
        type: 'iframeNode',
        position: { x: 300, y: 300 },
        data: { 
            shows: './workflow_diagram/workflow.html', 
            title: 'architecture diagram'
        },
        draggable: false,
    },
    {
        id: 'bsAI-site',
        type: 'iframeNode',
        position: { x: 550, y: 300 },
        data: { 
            shows: '', 
            title: 'website'
        },
        draggable: false,
    },
];
