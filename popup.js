// values from sliders
function getRGBValues() {
    const redValue = document.getElementById('redRange').value;
    const greenValue = document.getElementById('greenRange').value;
    const blueValue = document.getElementById('blueRange').value;

    return { red: redValue, green: greenValue, blue: blueValue };
}
// reactive text and popup background color
function updateColor() {
    const { red, green, blue } = getRGBValues();
    document.getElementById('redValue').textContent = red;
    document.getElementById('greenValue').textContent = green;
    document.getElementById('blueValue').textContent = blue;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // send values to autorothko.js
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { red, green, blue });
    });
}

// save values
function saveToLocal() {
    const rgbValues = getRGBValues();
    localStorage.setItem('red', rgbValues.red);
    localStorage.setItem('green', rgbValues.green);
    localStorage.setItem('blue', rgbValues.blue);
}

// load values
function loadFromLocal() {
    const red = localStorage.getItem('red'); 
    const green = localStorage.getItem('green'); 
    const blue = localStorage.getItem('blue'); 

    document.getElementById('redRange').value = red;
    document.getElementById('greenRange').value = green;
    document.getElementById('blueRange').value = blue;
// Update the display and background color
    updateColor(); 
}

// load when page loads
loadFromLocal();

//listeners for each input
document.getElementById('redRange').addEventListener('input', function() {
    updateColor();
    saveToLocal();
});
document.getElementById('greenRange').addEventListener('input', function() {
    updateColor();
    saveToLocal();
});
document.getElementById('blueRange').addEventListener('input', function() {
    updateColor();
    saveToLocal();
});
