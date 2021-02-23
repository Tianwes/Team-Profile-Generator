const Manager = require("../manager"); 

describe("Manager", () => {
    describe("Name", () => {
        it("should ask user to put in manager's name", () => {
            const name = "Mike";

            const obj = new Manager(name);

            expect(obj.name).toEqual(name);

        })
    })
});