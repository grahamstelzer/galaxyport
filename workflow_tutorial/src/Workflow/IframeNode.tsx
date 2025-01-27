import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';


export default function CustomNode({id, data:{shows, title}}:NodeProps<{shows:string, title:string}>) {
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

        const iframe = document.createElement('iframe');
        iframe.src = shows;
        console.log(shows);
        iframe.style.position = 'absolute';
        iframe.style.top = '50%';
        iframe.style.left = '50%';
        iframe.style.transform = 'translate(-50%, -50%)';
        iframe.style.width = '80%';
        iframe.style.height = '80%';
        iframe.style.border = '2px solid black';
        iframe.style.zIndex = '1000';
        iframe.style.backgroundColor = 'white';
        document.body.appendChild(iframe);

        const closeButton = document.createElement('button');
        closeButton.innerText = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '80px';
        closeButton.style.right = '150px';
        closeButton.style.zIndex = '1001';
        closeButton.style.backgroundColor = 'red';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '50%';
        closeButton.style.width = '30px';
        closeButton.style.height = '30px';
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = () => {
            document.body.removeChild(iframe);
            document.body.removeChild(closeButton);
        };
        document.body.appendChild(closeButton);

    };

    return (
        <Flex
            alignItems={"center"}
            borderRadius="5px"
            bg={"tan"}
            // border="2px solid"
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

            <Text fontSize="sm" textAlign="center" color="black">{title}</Text>

            <Handle type="source" position={Position.Bottom} style={{ visibility: 'hidden' }}/>
            <Handle type="target" position={Position.Top} style={{ visibility: 'hidden' }}/>

        </Flex>
    );
}
