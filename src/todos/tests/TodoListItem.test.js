import {expect} from "chai";
import {getBorderStyleForDate} from "../TodoListItem";

describe("getBorderStyleForDate", ()=> {
    it("returns none when date is less than five days ago", () => {
        const today = Date.now();
        const todoItemDate = new Date(Date.now() - 8640000 * 3);

        const expected = "none";
        const actual = getBorderStyleForDate(todoItemDate, today);

        expect(actual).to.equal(expected);
    });
});

describe("getBorderStyleForDate", ()=> {
    it("returns none when date is less than five days ago", () => {
        const today = Date.now();
        const todoItemDate = new Date(Date.now() - 8640000 * 6);

        const expected = "red";
        const actual = getBorderStyleForDate(todoItemDate, today);

        expect(actual).to.equal(expected);
    });
});