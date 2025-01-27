import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';


export default function DocumentNode({id, data:{doc_link, title}}:NodeProps<{doc_link:string, title:string}>) {
    
    
    return (
        <Box width="400px" height="600px" overflow="hidden">
            <iframe src={doc_link} width="100%" height="100%" />
            
            <Handle type="target" position={Position.Right} style={{ visibility: 'hidden' }}/>
        </Box>
    );
}
