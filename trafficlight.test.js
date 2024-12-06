const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });
    it(`case orange light`, () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });
    it(`case green light`, () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });
    it(`case undefined light`, () => {
        expect(app.trafficLight()).toBe("OUT OF ORDER");
    });
    it(`case unknown light`, () => {
        expect(app.trafficLight("yellow")).toBe(undefined);
    });
});
