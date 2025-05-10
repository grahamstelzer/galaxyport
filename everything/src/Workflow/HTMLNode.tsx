import { Box, Flex, Text } from '@chakra-ui/react'
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';
import { useEffect } from 'react';


import { useState } from 'react';


export default function HTMLNode({ data: { link } }: NodeProps<{ link: string }>) {
  return (
    <div style={{ border: "1px solid red", overflow: "auto", transform: "scale(0.4)", transformOrigin: "top left", borderRadius: "10px" }}>
      <iframe
      src={link}
      width="800px"
      height="600px"
      // style={{ border: "2px solid green" }}
      />
    </div>
  );
}


