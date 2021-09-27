import Signup from "../src/Signup";
import UserDTO from "../src/UserDTO";
import UserRepositoryMemory from "../src/UserRepositoryMemory";
import sinon from "sinon";
import UserRepositoryFake from "../src/UserRepositoryFake";

describe("Signup Test", function () {

    it("Should signup with dummy", function () {
        const userDTO = new UserDTO("ABC123", "abc@123.com");
        const userRepository = new UserRepositoryMemory();
        const signup = new Signup(userRepository);
        const code = signup.execute(userDTO);
        expect(code).toBeDefined();
    });

    it("Should signup with spy", function () {
        const userDTO = new UserDTO("Rodrigo Branas", "rodrigo@branas.io");
        const userRepository = new UserRepositoryMemory();
        const signup = new Signup(userRepository);
        const spy = sinon.spy(userRepository, "save");
        const code = signup.execute(userDTO);
        sinon.assert.calledOnce(spy);
        expect(code).toBeDefined();
    });

    it("Should signup with stub", function () {
        const userDTO = new UserDTO("Rodrigo Branas", "rodrigo@branas.io");
        const userRepository = new UserRepositoryMemory();
        const signup = new Signup(userRepository);
        sinon.stub(userRepository, "save").returns(10);
        const code = signup.execute(userDTO);
        expect(code).toBe(10);
    });

    it("Should signup with mock", function () {
        const userDTO = new UserDTO("Rodrigo Branas", "rodrigo@branas.io");
        const userRepository = new UserRepositoryMemory();
        const userRepositoryMock = sinon.mock(userRepository)
        userRepositoryMock.expects("save").once().returns(10);
        const signup = new Signup(userRepository);
        const code = signup.execute(userDTO);
        expect(code).toBe(10);
        userRepositoryMock.verify();
        userRepositoryMock.restore();
    });

    it("Should signup with fake", function () {
        const userDTO = new UserDTO("ABC123", "abc@123.com");
        const userRepository = new UserRepositoryFake();
        const signup = new Signup(userRepository);
        const code = signup.execute(userDTO);
        expect(code).toBeDefined();
    });
});
