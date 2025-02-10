import React, {
    useCallback,
    useState,
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
import { Box, Button } from "@chakra-ui/react";

import { initialEdges, initialNodes } from "./Workflow.constants";
import HTMLNode from "./HTMLNode";

const nodeTypes = {
    htmlNode: HTMLNode,
}

const edgeTypes = {}

export const Workflow = () => {

    // hooks:
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [isWorkflowMode, setIsWorkflowMode] = useState(false);

    const onConnect = useCallback((connection: Connection) => {
        const edge = { ...connection, animated: true, id: `${edges.length} + 1`, type: "customEdge" }; // SPECIFY TYPE
        setEdges((prevEdges) => addEdge(edge, prevEdges));
    }, [edges.length])

    const toggleLayout = useCallback(() => {
        setIsWorkflowMode((prev) => {
            if (prev) {
                // Reset to initial standard view when switching to site mode
                setNodes(initialNodes);
                setEdges(initialEdges);
                // Reset viewport
                const viewport = document.querySelector('.react-flow__viewport');
                if (viewport) {
                    (viewport as HTMLElement).style.transform = 'translate(0px, 0px) scale(1)';
                }
            }
            return !prev;
        });
    }, []);

    return (
        <>
            <Box height="100vh" width="100vw" overflow="auto">
                {isWorkflowMode ? (
                    <ReactFlow
                        nodes={nodes}
                        // nodes={nodes.map(node => ({
                        //     ...node,
                        //     style: {
                        //         ...node.style,
                        //         border: isWorkflowMode ? '2px solid blue' : '1px solid black',
                        //         backgroundColor: isWorkflowMode ? '#e0f7fa' : '#ffffff',
                        //         width: '150px', // Set a fixed width for nodes
                        //         height: '50px', // Set a fixed height for nodes
                        //     },
                        // }))}
                        nodeTypes={nodeTypes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        fitView
                        panOnDrag={isWorkflowMode} // Allow dragging only in workflow mode
                        nodesDraggable={isWorkflowMode} // Make nodes draggable only in workflow mode
                        zoomOnScroll={isWorkflowMode} // Disable zooming in site mode
                        panOnScroll={!isWorkflowMode} // Disable panning in site mode
 // Make elements selectable only in site mode
                        style={{ backgroundColor: isWorkflowMode ? '#f0f0f0' : 'black' }}
                    >
                        {isWorkflowMode && <Background gap={20} />} {/* Only show background in workflow mode */}
                        {isWorkflowMode && <Controls />} {/* Only show controls in workflow mode */}
                        {isWorkflowMode && <MiniMap />} {/* Only show MiniMap in workflow mode */}
                    </ReactFlow>
                ) : (
                    <Box height="100%" overflowY="auto">
                        {nodes.map((node) => (
                            <Box key={node.id} p={0} m={0} border="1px solid black">
                                <iframe 
                                    src={node.data.link} 
                                    title={node.data.title} 
                                    width="100%" 
                                    style={{ minHeight: '150px', height: 'auto' }} 
                                    onLoad={(e) => {
                                        const iframe = e.target as HTMLIFrameElement;
                                        if (iframe.contentWindow) {
                                            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
                                        }
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                )}

                <Box
                    position="absolute"
                    top={10}
                    right={10}
                    style={{ zIndex: 10, display: 'flex', flexDirection: 'column' }}
                    fontFamily="FreeMono, monospace"
                >
                    <Button 
                        variant="solid" 
                        colorScheme="teal" 
                        size="lg" 
                        onClick={toggleLayout}
                        boxShadow="lg"
                        _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                        _active={{ boxShadow: "md", transform: "scale(0.95)" }}
                    >
                        {isWorkflowMode ? 'Switch to Site Mode' : 'Magic Button (under development!!!)'}
                    </Button>
                </Box>
            </Box>
        </>
    );
};
