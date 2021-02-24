const Manager = require("../lib/Manager"); 

describe("Manager", () => {
    describe("Name", () => {
        it("should ask user to put in manager's name", () => {
            const name = "Alice";

            const obj = new Manager(name);

            expect(obj.name).toEqual(name);

        })
    })
});