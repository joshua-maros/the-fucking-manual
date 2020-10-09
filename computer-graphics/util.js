let clientMousePos = { x: 0, y: 0 };
document.addEventListener('mousemove', event => {
    clientMousePos.x = event.clientX;
    clientMousePos.y = event.clientY;
});

/**
 * Makes a new sketch in the element with ID provided by divId. Your builder 
 * function should set the fields `setup` and `draw` on the provided instance.
 * heightRatio determines how tall the canvas should be based on the width
 * of the selected div. The canvas is automatically sized to be as wide as the
 * div.
 * @param {string} divId 
 * @param {number} heightRatio.
 * @param {(instance: import('p5')) => void} setup 
 * @param {(instance: import('p5'), mouseX: number, mouseY: number, time: number) => void} draw
 */
function makeSketch(divId, heightRatio, setup, draw) {
    let div = document.getElementById(divId);
    let width = div.clientWidth;
    let height = heightRatio * width;
    let time = 0;
    let lastFrame = Date.now();
    let first = true;
    let builder = instance => {
        instance.setup = () => {
            instance.createCanvas(width, height);
            setup(instance);
        };
        instance.draw = () => {
            let rect = div.getBoundingClientRect();
            let relx = clientMousePos.x - rect.x;
            let rely = clientMousePos.y - rect.y;
            if (first) {
                first = false;
                relx = rect.width * 0.8;
                rely = rect.height * 0.5;
            }
            let thisFrame = Date.now();
            let elapsed = thisFrame - lastFrame;
            lastFrame = thisFrame;
            if (relx < 0 || rely < 0 || relx > rect.width || rely > rect.height) return;
            instance.scale(width / 100.0);
            time += elapsed;
            draw(instance, relx / rect.width * 100.0, rely / rect.width * 100.0, time / 1000.0);
        };
    };
    new p5(builder, divId);
}

/**
 * Unfortunately MDBook placed util.js after the page, so it is loaded after the
 * script which needs it. To counteract that, we instead put our page-specific
 * code into pageBehavior() and call it here once we are loaded.
 */
if (pageAction) {
    pageAction();
}
