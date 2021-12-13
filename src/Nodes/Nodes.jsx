import React, { useEffect, useState, useCallback } from 'react'
import { getNodes } from '../services'
import Node from './Node'

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
    }
}

function Nodes() {
    /** Can be changed to hook */
    const [nodes, setNodes] = useState();
    const fetchNodes = useCallback(() => {
        async function fetch() {
            const fetchedNodes = await getNodes();
            setNodes(fetchedNodes);
        }
        fetch();
    }, []);
    useEffect(() => {
        fetchNodes();
    }, [fetchNodes]);

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h2>Nodes</h2>
                <Node nodes={nodes} />
            </div>
        </div>
    )
}

export default Nodes
