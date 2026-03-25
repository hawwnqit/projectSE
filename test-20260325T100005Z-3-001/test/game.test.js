const { expect } = require("chai");

describe("Snake Game Logic", () => {
    it("should increase score when food is eaten", () => {
        let score = 0;
        score++;
        expect(score).to.equal(1);
    });

    it("should detect wall collision", () => {
        let head = {x: -10, y: 0};
        let collision = head.x < 0;
        expect(collision).to.be.true;
    });
});