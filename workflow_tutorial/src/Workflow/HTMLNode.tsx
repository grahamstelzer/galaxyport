import { Box, Flex, Text } from '@chakra-ui/react'
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';
import { useEffect } from 'react';


import { useState } from 'react';


export default function HTMLNode({ data: { link } }: NodeProps<{ link: string }>) {
  return (
    <div style={{ border: "2px solid red", overflow: "auto", transform: "scale(0.8)", transformOrigin: "top left", borderRadius: "10px", width: "500px", minHeight: "200px" }}>
      <iframe
      src={link}
      width="100%"
      height="400px"
      // style={{ border: "2px solid green" }}
      />
    </div>
  );
}


