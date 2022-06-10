import Identity from "./identity"

describe("Identity", () => {
    describe("# Identity", () => {
        it("Should not create a identity if the parameter is not valid", () => {
            const fun1 = () => new Identity(13 as any)
            const fun2 = () => new Identity(true as any)
            const fun3 = () => new Identity((() => true) as any)

            expect(fun1).toThrow("Parameter 'identityOrMessage' is not a string")
            expect(fun2).toThrow("Parameter 'identityOrMessage' is not a string")
            expect(fun3).toThrow("Parameter 'identityOrMessage' is not a string")
        })

        it("Should create random identities", () => {
            const identity1 = new Identity()
            const identity2 = new Identity()

            expect(identity1.getTrapdoor()).not.toBe(identity2.getTrapdoor())
            expect(identity1.getNullifier()).not.toBe(identity2.getNullifier())
        })

        it("Should create deterministic identities from a message", () => {
            const identity1 = new Identity("message")
            const identity2 = new Identity("message")

            expect(identity1.getTrapdoor()).toBe(identity2.getTrapdoor())
            expect(identity1.getNullifier()).toBe(identity2.getNullifier())
        })

        it("Should create deterministic identities from number/boolean messages", () => {
            const identity1 = new Identity("true")
            const identity2 = new Identity("true")
            const identity3 = new Identity("7")
            const identity4 = new Identity("7")

            expect(identity1.getTrapdoor()).toBe(identity2.getTrapdoor())
            expect(identity1.getNullifier()).toBe(identity2.getNullifier())
            expect(identity3.getTrapdoor()).toBe(identity4.getTrapdoor())
            expect(identity3.getNullifier()).toBe(identity4.getNullifier())
        })

        it("Should not recreate an existing invalid identity", () => {
            const fun = () => new Identity('[true, "01323"]')

            expect(fun).toThrow("Cannot convert 0xtrue to a BigInt")
        })

        it("Should recreate an existing identity", () => {
            const identity1 = new Identity("message")

            const identity2 = new Identity(identity1.toString())

            expect(identity1.getTrapdoor()).toBe(identity2.getTrapdoor())
            expect(identity1.getNullifier()).toBe(identity2.getNullifier())
        })
    })

    describe("# getTrapdoor", () => {
        it("Should return the identity trapdoor", () => {
            const identity = new Identity("message")

            const trapdoor = identity.getTrapdoor()

            expect(trapdoor).toBe(
                BigInt("58952291509798197436757858062402199043831251943841934828591473955215726495831")
            )
        })
    })

    describe("# getNullifier", () => {
        it("Should return the identity nullifier", () => {
            const identity = new Identity("message")

            const nullifier = identity.getNullifier()

            expect(nullifier).toBe(
                BigInt("44673097405870585416457571638073245190425597599743560105244308998175651589997")
            )
        })
    })

    describe("# generateCommitment", () => {
        it("Should generate an identity commitment", () => {
            const identity = new Identity("message")

            const commitment = identity.generateCommitment()

            expect(commitment).toBe(
                BigInt("1720349790382552497189398984241859233944354304766757200361065203741879866188")
            )
        })
    })

    describe("# toString", () => {
        it("Should return a string", () => {
            const identity = new Identity("message")

            const identityString = identity.toString()

            expect(typeof identityString).toBe("string")
        })

        it("Should return a valid identity string", () => {
            const identity = new Identity("message")

            const [trapdoor, nullifier] = JSON.parse(identity.toString())

            expect(BigInt(`0x${trapdoor}`)).toBe(identity.getTrapdoor())
            expect(BigInt(`0x${nullifier}`)).toBe(identity.getNullifier())
        })
    })
})
