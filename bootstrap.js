var player = new Clappr.Player({
    parentId: "#player",
    source: turl,
    mute: true,
    width: "100%",
    height: "100vh",
    autoPlay: true,
    mediacontrol: { seekbar: "#ffc10e", buttons: "#ffc10e" },
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
