
const Utils = {

    fontCalculation: (
        score = 0,
        maxSantimentValue = 100, 
        minSantimentValue = 0, 
        fontMin = 14, 
        fontMax = 120,
        unit= 'px'
        ) => {
        

            // formula from https://en.wikipedia.org/wiki/Tag_cloud

            let fontSize = score === minSantimentValue ? fontMin
            : (score / maxSantimentValue) * (fontMax - fontMin) + fontMin;

           return fontSize + unit;
    },
};

export default Utils;
