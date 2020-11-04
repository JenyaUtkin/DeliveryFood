window.disableScroll = function () {

    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.dbScroll = window.scrollY;

    document.body.style.cssText = `
        position: fixet;
        top: ${-window.scrollY}px;
        lest: 0;
        width: 100%;
        overflow: hidden;
        height: 100vh;
        padding-right: ${widthScroll};
    `;
}

window.enableScroll = function () {
    document.body.style.cssText = 'positoin: relative;';
    window.scroll({top: document.body.dbScroll})
}