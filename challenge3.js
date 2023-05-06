// Write a function that converts HEX to RGB.
// Then Make that function autodect the formats so that if you enter HEX color format it 
// returns RGB and if you enter RGB color format it returns HEX.

// These functions i copied from stack overflow
function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

function convertColorsFormat(input1, input2, input3) {
    if (input2 && input3) {
        return rgbToHex(input1, input2, input3);
    }

    return hexToRgb(input1);

    // or we can check here by '#' of hex.
}


const result = convertColorsFormat('#0033ff');
console.log(result);