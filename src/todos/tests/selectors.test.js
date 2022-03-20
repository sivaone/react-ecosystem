import {expect} from "chai";
import {getCompletedTodos} from "../selectors";

describe("The getCompletedTodos selector", () => {
    it("Returns only completed todos", () => {
        const fakeTodos = [{
            text: "write code",
            isCompleted: true,
        }, {
            text: "write tests",
            isCompleted: false,
        }, {
            text: "write api tests",
            isCompleted: false,
        }];

        const expected = [{
            text: "write code",
            isCompleted: true,
        }];

        const actual = getCompletedTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);
    })
})