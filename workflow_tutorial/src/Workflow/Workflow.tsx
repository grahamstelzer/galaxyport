import React, {
    useCallback
} from "react";

import { useRef } from "react";

import ReactFlow, { 
    Node, 
    Edge, 
    Background, 
    Controls, 
    MiniMap, 
    useNodesState, 
    useEdgesState, 
    Connection,
    addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import { Box } from "@chakra-ui/react";

import { initialEdges, initialNodes } from "./Workflow.constants";
import IframeNode from "./IframeNode";
import CustomEdge from "./CustomEdge";
import DocumentNode from "./DocumentNode";
import TitleNode from "./TitleNode";
import LinkNode from "./LinkNode";
import NameNode from "./NameNode";

import SpaceScene from "./space.js"


// const initialNodes: Node[] = [
//     {
//         id: "1", // must be unique
//         data:{
//             label: "Node 1"
//         },
//         position:{x:0, y:0},
//     },
//     {
//         id: "2",
//         data:{
//             label: "Node 2"
//         },
//         position:{x:200, y:200}
//     },
// ];

// const initialEdges:Edge[] = [
//     {
//         id:'1-2', // must be unique
//         source: "1", 
//         target: "2",
//         animated: true,
//     }
// ];


const nodeTypes = {
    // paymentInit:PaymentInit,
    iframeNode:IframeNode,
    titleNode:TitleNode,
    documentNode:DocumentNode,
    linkNode:LinkNode,
    nameNode:NameNode,
}

const edgeTypes = {
    customEdge:CustomEdge,
}



export const Workflow = () => {

    // hooks:
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
    

    const onConnect = useCallback((connection: Connection) => {
        const edge = {...connection, animated:true, id:`${edges.length} + 1`, type:"customEdge"}; // SPECIFY TYPE
        setEdges((prevEdges) => addEdge(edge, prevEdges));
    },[])
    

    return (
        <>

            <Box height={"100vh"} width={"100vw"}>
                <ReactFlow 
                    nodes={nodes} 
                    edges={edges} 
                    onNodesChange={onNodesChange} 
                    onEdgesChange={onEdgesChange} 
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    fitView 
                    style={{ backgroundColor: 'black' }}
                    fitViewOptions={{ padding: 0.2 }}
                >
                    <Background gap={100}/>
                    <Controls/>
                    <MiniMap/>
                    
                    <SpaceScene></SpaceScene>
                    
                </ReactFlow>
                
            </Box>
        </>
    );

};




