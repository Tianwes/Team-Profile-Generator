const Manager = require("../lib/Manager"); 

describe("Manager", () => {
    describe("name", () => {
        it("should ask user to put in manager's name", () => {
            const name= "Sara"
            const obj = new Manager(name);

            expect(obj).toEqual(name);

        })
    })
});