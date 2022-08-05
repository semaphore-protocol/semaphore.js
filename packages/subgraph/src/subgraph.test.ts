import request from "./request"
import Subgraph from "./subgraph"

jest.mock("./request", () => ({
    __esModule: true,
    default: jest.fn()
}))

const requestMocked = request as jest.MockedFunction<typeof request>

describe("Subgraph", () => {
    let subgraph: Subgraph

    describe("# Subgraph", () => {
        it("Should instantiate a subgraph object", () => {
            const subgraph1 = new Subgraph("kovan")
            const subgraph2 = new Subgraph("goerli")

            subgraph = new Subgraph()

            expect(subgraph1.url).toContain("kovan")
            expect(subgraph2.url).toContain("goerli")
            expect(subgraph.url).toContain("arbitrum")
        })

        it("Should throw an error if there is a wrong network", () => {
            const fun = () => new Subgraph("wrong" as any)

            expect(fun).toThrow("Network 'wrong' is not supported")
        })

        it("Should throw an error if the network parameter type is wrong", () => {
            const fun = () => new Subgraph(33 as any)

            expect(fun).toThrow("Parameter 'network' is not a string")
        })
    })

    describe("# getGroups", () => {
        it("Should return all the existing groups", async () => {
            requestMocked.mockImplementationOnce(() =>
                Promise.resolve({
                    groups: [
                        {
                            id: "1",
                            depth: 20,
                            zeroValue: 0,
                            size: 2,
                            numberOfLeaves: 2,
                            root: "2",
                            admin: "0x7bcd6f009471e9974a77086a69289d16eadba286"
                        }
                    ]
                })
            )

            const expectedValue = await subgraph.getGroups()

            expect(expectedValue).toBeDefined()
            expect(Array.isArray(expectedValue)).toBeTruthy()
            expect(expectedValue).toContainEqual({
                id: "1",
                depth: 20,
                zeroValue: 0,
                size: 2,
                numberOfLeaves: 2,
                root: "2",
                admin: "0x7bcd6f009471e9974a77086a69289d16eadba286"
            })
        })

        it("Should throw an error if the options parameter type is wrong", async () => {
            const fun = () => subgraph.getGroups(1 as any)

            await expect(fun).rejects.toThrow("Parameter 'options' is not an object")
        })

        it("Should return all the existing groups with their members", async () => {
            requestMocked.mockImplementationOnce(() =>
                Promise.resolve({
                    groups: [
                        {
                            id: "1",
                            depth: 20,
                            zeroValue: 0,
                            size: 2,
                            numberOfLeaves: 2,
                            root: "2",
                            admin: "0x7bcd6f009471e9974a77086a69289d16eadba286",
                            members: [
                                {
                                    identityCommitment: "1"
                                },
                                {
                                    identityCommitment: "2"
                                }
                            ]
                        }
                    ]
                })
            )

            const expectedValue = await subgraph.getGroups({ members: true })

            expect(expectedValue).toBeDefined()
            expect(Array.isArray(expectedValue)).toBeTruthy()
            expect(expectedValue).toContainEqual({
                id: "1",
                depth: 20,
                zeroValue: 0,
                size: 2,
                numberOfLeaves: 2,
                root: "2",
                admin: "0x7bcd6f009471e9974a77086a69289d16eadba286",
                members: ["1", "2"]
            })
        })
    })

    describe("# getGroup", () => {
        it("Should return a specific group", async () => {
            requestMocked.mockImplementationOnce(() =>
                Promise.resolve({
                    groups: [
                        {
                            id: "1",
                            depth: 20,
                            zeroValue: 0,
                            size: 2,
                            numberOfLeaves: 2,
                            root: "2",
                            admin: "0x7bcd6f009471e9974a77086a69289d16eadba286"
                        }
                    ]
                })
            )

            const expectedValue = await subgraph.getGroup("1")

            expect(expectedValue).toBeDefined()
            expect(expectedValue).toEqual({
                id: "1",
                depth: 20,
                zeroValue: 0,
                size: 2,
                numberOfLeaves: 2,
                root: "2",
                admin: "0x7bcd6f009471e9974a77086a69289d16eadba286"
            })
        })

        it("Should throw an error if the options parameter type is wrong", async () => {
            const fun = () => subgraph.getGroup("1", 1 as any)

            await expect(fun).rejects.toThrow("Parameter 'options' is not an object")
        })

        it("Should return a specific group with its members", async () => {
            requestMocked.mockImplementationOnce(() =>
                Promise.resolve({
                    groups: [
                        {
                            id: "1",
                            depth: 20,
                            zeroValue: 0,
                            size: 2,
                            numberOfLeaves: 2,
                            root: "2",
                            admin: "0x7bcd6f009471e9974a77086a69289d16eadba286",
                            members: [
                                {
                                    identityCommitment: "1"
                                },
                                {
                                    identityCommitment: "2"
                                }
                            ]
                        }
                    ]
                })
            )

            const expectedValue = await subgraph.getGroup("1", {
                members: true
            })

            expect(expectedValue).toBeDefined()
            expect(expectedValue).toEqual({
                id: "1",
                depth: 20,
                zeroValue: 0,
                size: 2,
                numberOfLeaves: 2,
                root: "2",
                admin: "0x7bcd6f009471e9974a77086a69289d16eadba286",
                members: ["1", "2"]
            })
        })
    })
})
