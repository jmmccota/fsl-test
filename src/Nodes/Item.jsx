import React from 'react'


function pad(num, size) {
    var s = "00" + num;
    return s.substring(s.length - size);
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 8,
        background: 'rgba(0, 0, 0, 0.12)',
        borderRadius: '2px',
        marginTop: 4,
    },
    spanId: {
        fontWeight: 'bold',
        fontSize: 10,
        lineHeight: '16px',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        color: '#304FFE',
    },
    description: {
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.25px',
        color: '#263238',
    }
};

function RenderItem({ item }) {
    return (<div style={styles.container}>
        <span style={styles.spanId}>{pad(item.id, 3)}</span>
        <spam>{item.description}</spam>
    </div>);
}

function Item({ nodeItems }) {
    console.log(nodeItems);
    return (
        <div>
            {!nodeItems && 'Loading...'}
            {nodeItems && nodeItems.map(n => <RenderItem key={n.id} item={n} />)}
        </div>
    )
}

export default Item
