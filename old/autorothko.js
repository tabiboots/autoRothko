// this code is not in use anymore but will stay in the file to document my past experiments
var pTags = document.getElementsByTagName('*');
var i = 0;
var colorpicker = Math.floor(Math.random()*5)+1;
if (colorpicker==1){
    while (i < pTags.length) {
        var element = pTags[i];
        var green = "rgb(" + 40
                 + "," + Math.floor(Math.random()*255)
                + "," + 40 + ")"
        element.style.setProperty('background-color',green);
        element.style.setProperty('color',green);
    i = i+1;
    }
} else if (colorpicker==2){
    while (i < pTags.length) {
        var element = pTags[i];
        var red = "rgb(" + Math.floor(Math.random()*255)
                 + "," + 40
                + "," + 40 + ")"
        element.style.setProperty('background-color',red);
        element.style.setProperty('color',red);
    i = i+1;
    }    
} else if (colorpicker==3){
    while (i < pTags.length) {
        var element = pTags[i];
        var blue = "rgb(" + 40 +
                "," + 40 +
                "," + Math.floor(Math.random()*255) + ")"
        element.style.setProperty('background-color',blue);
        element.style.setProperty('color',blue);
    i = i+1;
    }         
} else if (colorpicker==4){
    while (i < pTags.length) {
        var element = pTags[i];
        var purple = "rgb(" + Math.floor(Math.random()*100) +
                "," + 20 +
                "," + Math.floor(Math.random()*255) + ")"
        element.style.setProperty('background-color',purple);
        element.style.setProperty('color',purple);
    i = i+1;
    }         
}  else if (colorpicker==5){
    while (i < pTags.length) {
        var element = pTags[i];
        var yellow = "rgb(" + 20 +
                "," + Math.floor(Math.random()*100) +
                "," + Math.floor(Math.random()*255) + ")"
        element.style.setProperty('background-color',yellow);
        element.style.setProperty('color',yellow);
    i = i+1;    
    }         
}
