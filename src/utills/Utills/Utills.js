
const Utils = {

    fontCalculation: (
        array = [],
        score = 0,
        fontMin = 14, 
        fontMax = 60,
        unit= 'px'
        ) => {

        let maxSantimentValue = Math.max.apply(Math, array.map((o) => { return o.sentimentScore; }));
        let minSantimentValue = Math.min.apply(Math, array.map((o) => { return o.sentimentScore; }));


        let fontSize = score === minSantimentValue ? fontMin
            : (score / maxSantimentValue) * (fontMax - fontMin) + fontMin;

           return fontSize + unit;
    },

    filterArray: (arr, val) => {
        let filteredArray = arr.slice(0);

        return filteredArray.filter((item) => {
            return item.label.toLowerCase().search(
                val.toLowerCase()) !== -1;
            });
    }
};

export default Utils;
