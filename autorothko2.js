function randInt(min, max) {
    let x = Math.random() * (max - min) + min;
    return Math.floor(x);
}

chrome.runtime.onMessage.addListener(function(request) {
    const { red, green, blue } = request;

    const tags = document.getElementsByTagName('*');
    var i = 0
    while (i < tags.length) {
        const element = tags[i];
        const color = `rgb(${randInt(0, red)}, ${randInt(0, green)}, ${randInt(0, blue)})`;
        element.style.setProperty('color', color);
        element.style.setProperty('background-color', color);
    i++;
    }
});
