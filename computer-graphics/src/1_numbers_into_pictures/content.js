function pageAction() {
    makeSketch('test-sketch', 0.5, p => {
        p.setup = () => {

        };
    }, (p, x, y, t) => {
        p.clear();
        p.fill(200);
        p.rect(x, y, t + 10, 10);
    });
}