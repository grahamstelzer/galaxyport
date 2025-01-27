import { Box, Flex, Text } from '@chakra-ui/react'
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';
import { useEffect } from 'react';


export default function NameNode({id, data:{link, title}}:NodeProps<{link:string, title:string}>) {
    const { setNodes, setCenter, getNode } = useReactFlow(); // gets nodes to look at for deletion and centering

    const handleClick = () => {
        const node = getNode(id);
        if (node) {
            const { position, width, height } = node;
            if (width !== undefined && height !== undefined) {
                if (width !== null && height !== null) {
                    setCenter(position.x, position.y, { zoom: 1.5 });
                }
            }
        }
    };

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            bg="gray.700"
            border="2px solid"
            borderColor="gray.500"
            p={4}
            gap={4}
            maxW={"400px"}
            fontFamily="'freemono', sans-serif"
            onClick={handleClick}
            sx={{
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
            boxShadow: '0 0 15px 5px gray',
            },
            }}
        >
            <Text style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
            <a href={link} style={{ textDecoration: 'none', color: 'white' }}>{title}</a>
            </Text>

            <Handle type="source" position={Position.Bottom} style={{ visibility: 'hidden' }} />
            <Handle type="source" position={Position.Top} style={{ visibility: 'hidden' }} />
            <Handle type="source" position={Position.Left} style={{ visibility: 'hidden' }} />
            <Handle type="target" position={Position.Right} style={{ visibility: 'hidden' }} />
        </Flex>
    );
}
