const timeoutPromise = (time = 1000) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time);
});

export async function getNodes() {
    await timeoutPromise();
    const data = [];

    let inicio = Math.floor(Math.random() * 300);

    for (let i = 0; i < Math.floor(Math.random() * 300); i++) {
        data.push({ id: i, title: 'Thawing Springs', url: `https://thawing-springs-${inicio++}.herokuapp.com`, status: i % 3 === 0 ? 'online' : 'offline' });
    }

    return data;
}

export async function getNodeData(id) {
    await timeoutPromise(1000 + id);
    const data = [];

    let inicio = Math.floor(Math.random() * 300);

    for (let i = 0; i < Math.floor(Math.random() * 300); i++) {
        data.push({ id: inicio++, nodeId: id, description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.' })
    }

    return data;
}
