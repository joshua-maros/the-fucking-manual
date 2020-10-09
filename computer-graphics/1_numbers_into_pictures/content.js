function pageAction() {
    let img;
    makeSketch('test-sketch', 0.6, p => {
        img = p.loadImage('demo_image.jpg');
    }, (p, c) => {
        img.loadPixels();
        let context = c.getContext('2d');
        // So that we can see the individual pixels in the image.
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        return [78.5, 30.5];
    }, (p, x, y, t) => {
        const imgWidth = 60 * (img.width / img.height);
        const imgX = 60;
        const imgScale = img.width / imgWidth;
        const pixelX = Math.round((x - imgX) * imgScale);
        const pixelY = Math.round(y * imgScale);
        if (pixelX < 0 || pixelY < 0) return;
        const pixelIndex = ((pixelY * img.width) + pixelX) * 4;
        const pixelColor = p.color(img.pixels[pixelIndex + 0], img.pixels[pixelIndex + 1], img.pixels[pixelIndex + 2]);

        p.clear();

        // Full image
        p.image(img, imgX, 0, imgWidth, 60);
        strokeFgLine(p);
        p.rect(x - 6 / imgScale, y - 6 / imgScale, 13 / imgScale, 13 / imgScale);
        p.line(50, 0, x + 7 / imgScale, y - 6 / imgScale);
        p.line((y <= 20.0 ? 50 : 30), 20, x - 6 / imgScale, y + 7 / imgScale);

        // Zoomed-in view
        p.image(img, 30, 0, 20, 20, pixelX - 6, pixelY - 6, 13, 13);
        strokeFgLine(p);
        p.rect(30 + 20 * (6 / 13), 20 * (6 / 13), 20 * (1 / 13), 20 * (1 / 13));
        p.line(30 + 20 * (6 / 13), 20 * (6 / 13), 20, 0);
        p.line(30 + 20 * (6 / 13), 20 * (7 / 13), 20, 20);

        // Individual pixel view
        p.fill(pixelColor);
        p.noStroke();
        p.rect(0, 0, 20, 20);

        // Component breakout view
        strokeFgLine(p);
        p.line(2, 20, 2, 55);
        p.line(2, 29, 5, 29);
        p.line(2, 42, 5, 42);
        p.line(2, 55, 5, 55);
        p.noStroke();
        p.fill(p.red(pixelColor), 0, 0);
        p.rect(5, 24, 10, 10);
        p.fill(0, p.green(pixelColor), 0);
        p.rect(5, 37, 10, 10);
        p.fill(0, 0, p.blue(pixelColor));
        p.rect(5, 50, 10, 10);
        labelStyle(p);
        p.text("RED: " + (p.red(pixelColor) / 255).toFixed(3), 18, 24, 100, 10);
        p.text("GREEN: " + (p.green(pixelColor) / 255).toFixed(3), 18, 37, 100, 10);
        p.text("BLUE: " + (p.blue(pixelColor) / 255).toFixed(3), 18, 50, 100, 10);

        p.text("X: " + pixelX + ", Y: " + pixelY, 30, 18, 100, 10);
    });
}