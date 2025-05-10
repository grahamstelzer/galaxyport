import { Edge, Node } from "reactflow";

export const initialEdges: Edge[] = [
    {
        id: 'e1',
        source: 'header',
        target: 'about',
        type: 'smoothstep',
    }

];

export const initialNodes: Node[] = [
    {
        id: 'header',
        type: 'htmlNode',
        position: { x: 0, y: 0 },
        data: { 
            link: './header.html', 
            title: 'header'
        },
        draggable: false,
    },


    {
        id: 'about',
        type: 'htmlNode',
        position: { x: 500, y: 0 },
        data: { 
            link: './about.html', 
            title: 'about'
        },
        draggable: false,
    },


    {
        id: 'projects',
        type: 'htmlNode',
        position: { x: 0, y: 400 },
        data: { 
            link: './projects.html', 
            title: 'about'
        },
        draggable: false,
    },


    
    {
        id: 'codemuseum',
        type: 'htmlNode',
        position: { x: 500, y: 400 },
        data: { 
            link: './codemuseum.html', 
            title: 'about'
        },
        draggable: false,
    },


    {
        id: 'hobbies',
        type: 'htmlNode',
        position: { x: 0, y: 800 },
        data: { 
            link: './hobbies.html', 
            title: 'about'
        },
        draggable: false,
    },

];
