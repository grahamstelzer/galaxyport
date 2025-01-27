import { IconButton, Select, Switch } from '@chakra-ui/react'
import React, { useState } from 'react'
import { X } from 'react-bootstrap-icons'
import { BezierEdge, EdgeLabelRenderer, EdgeProps, getBezierPath, getSmoothStepPath, getStraightPath, getSimpleBezierPath, useReactFlow } from 'reactflow'

export default function CustomEdge(props: EdgeProps) {
    const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;
    const [selectedEdgeType, setSelectedEdgeType] = useState('default');
    const [showDropdown, setShowDropdown] = useState(true);

    const { setEdges } = useReactFlow();

    const getEdgePath = () => {
        switch (selectedEdgeType) {
            case 'straight':
                return getStraightPath({ sourceX, sourceY, targetX, targetY });
            case 'step':
                return getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });
            case 'smoothstep':
                return getSmoothStepPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });
            case 'simplebezier':
                return getSimpleBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });
            default:
                return getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition });
        }
    };

    const [edgePath, labelX, labelY] = getEdgePath();

    const handleEdgeTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEdgeType(event.target.value);
    };

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <path d={edgePath} className="react-flow__edge-path" style={{ zIndex: 999999999999 }} />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        pointerEvents: 'all',
                        zIndex: 10,
                    }}
                >
                </div>
            </EdgeLabelRenderer>
            <style>
                {`
                    .react-flow__edge-path {
                        stroke: white;
                        stroke-width: 1;
                        animation: glow 1s infinite alternate;
                    }

                    @keyframes glow {
                        from {
                            stroke: white;
                            stroke-opacity: 1;
                        }
                        to {
                            stroke: white;
                            stroke-opacity: 1;
                        }
                    }
                `}
            </style>
        </>
    )
}
