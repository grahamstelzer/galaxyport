import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';


export default function CustomNode({id, data:{text, title}}:NodeProps<{text:string, title:string}>) {
    const { setNodes, setCenter, getNode } = useReactFlow(); // gets nodes to look at for deletion and centering

    const handleClick = () => {
        const node = getNode(id);
        if (node) {
            const { position, width, height } = node;
            if (width !== undefined && height !== undefined) {
                if (width !== null && height !== null) {
                    setCenter(position.x + width / 2, position.y + height + 200, { zoom: 1.5 });
                }
            }
        }
    };

    return (
        <Flex
            alignItems={"center"}
            borderRadius="5px"
            bg={"black"}
            border="1px solid"
            borderColor={"white"}
            p={2}
            gap={2}
            maxWidth={"400px"}
            fontFamily="'freemono', sans-serif"            
            onClick={handleClick} // Add onClick handler
            sx={{
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
                boxShadow: '0 0 10px 2px white',
            },
            }}
        >

            <Text style={{ color: 'white' }}>{title}</Text>

            <Handle type="source" position={Position.Bottom} style={{ visibility: 'hidden' }}/>
            <Handle type="target" position={Position.Top} style={{ visibility: 'hidden' }}/>

        </Flex>
    );
}
