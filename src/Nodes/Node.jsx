import ChevronUp from './chevron-up.png';
import ChevronDown from './chevron-down.png';
import './node.style.css';
import Item from './Item';

import React, { useCallback, useEffect, useState } from 'react'
import { getNodeData } from '../services'

const styles = {
    container: {
        padding: 13,
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        background: "#FFFFFF",
        borderRadius: 3,
        filter: "drop-shadow(0px 4px 8px rgba(84, 110, 122, 0.24))",
        flexDirection: 'column',
    },
    line: {
        maxWidth: '600px',
        width: '80vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    status: {
        letterSpacing: '1.5px',
        textTransform: 'uppercase'
    },
    flex: {
        display: 'flex',
    },
    margin: {
        cursor: 'pointer',
        marginTop: -4,
    },
    title: {
        fontSize: 16,
        lineHeight: '24px',
        letterSpacing: '0.44px',
        color: '#263238',
    },
    url: {
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.25px',
        color: '#263238',
        opacity: 0.54,
        marginTop: 6,
        marginBottom: 6,
        textDecoration: 'none'
    }
}


function RenderNode({ node }) {
    const [isOpen, setIsOpen] = useState(undefined);
    function click(n) {
        if (isOpen) {
            setIsOpen(undefined);
        } else {
            setIsOpen(n);
        }
    }

    const [items, setItems] = useState();

    const fetchData = useCallback(() => {
        async function fetch() {
            const fetchedData = await getNodeData(isOpen.id);
            setItems(fetchedData);
        }
        isOpen && fetch();
    }, [isOpen]);

    useEffect(() => {
        isOpen && fetchData();
    }, [fetchData, isOpen]);

    return (<div style={styles.container}>
        <div style={styles.line}>
            <div style={styles.titleContainer}>
                <span style={styles.title}>{node.title}</span>
                <a style={styles.url} href={node.url} target="_blank" rel="noreferrer">{node.url}</a>
            </div>
            <div style={styles.flex}>
                <span className={`status ${node.status}`}>{node.status}</span>
                <div style={styles.margin} onClick={() => click(node)}>
                    <img src={isOpen ? ChevronUp : ChevronDown} alt="Expandir" />
                </div>
            </div>
        </div>
        <div style={styles.line}>
            {isOpen && items && <Item nodeItems={items} />}
        </div>
    </div>)
}

function Node({ nodes }) {
    return (<div>
        {!nodes && 'Loading...'}
        {nodes && nodes.map(n => <RenderNode key={n.id} node={n} />)}
    </div>)
}

export default Node
