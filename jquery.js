if (p2pml.hlsjs.Engine.isSupported()) {
    var engine = new p2pml.hlsjs.Engine();
    var player = new Clappr.Player({
        parentId: "#player",
        source: turl,
        mute: true,
        width: "100%",
        height: "100vh",
        autoPlay: true,
        playback: {
            hlsjsConfig: {
                liveSyncDurationCount: 7,
                loader: engine.createLoaderClass()
            }
        },
        events: {
            onStop: () => {
                setTimeout(() => player.play(), 1000);
            },
            onError: (e) => {
                setTimeout(() => player.play(), 1000);
            },
            onEnded: () => {
                setTimeout(() => player.play(), 1000);
            },
            onReady: () => {
                setTimeout(() => player.play(), 1000);
            }
        }
    });

    p2pml.hlsjs.initClapprPlayer(player);
} else {
    document.write("Not supported :(");
}
