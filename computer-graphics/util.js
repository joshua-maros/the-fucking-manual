/**
 * Makes a new sketch in the element with ID provided by divId. Your builder 
 * function should set the fields `setup` and `draw` on the provided instance.
 * heightRatio determines how tall the canvas should be based on the width
 * of the selected div. The canvas is automatically sized to be as wide as the
 * div.
 * @param {string} divId 
 * @param {number} heightRatio.
 * @param {(instance: import('p5')) => void} builder 
 */
function makeSketch(divId, heightRatio, builder) {
    let div = document.getElementById(divId);
    let width = div.clientWidth;
    let height = heightRatio * width;
    let wrappedBuilder = instance => {
        builder(instance);
        let oldSetup = instance.setup;
        instance.setup = () => {
            instance.createCanvas(width, height);
            oldSetup();
        };
    };
    console.log(width, height);
    new p5(wrappedBuilder, divId);
}

/**
 * Unfortunately MDBook placed util.js after the page, so it is loaded after the
 * script which needs it. To counteract that, we instead put our page-specific
 * code into pageBehavior() and call it here once we are loaded.
 */
if (pageAction) {
    pageAction();
}
