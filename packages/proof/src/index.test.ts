import { Identity } from "@semaphore-protocol/identity"
import download from "download"
import { getCurveFromName } from "ffjavascript"
import fs from "fs"
import createMerkleProof from "./createMerkleProof"
import createMerkleTree from "./createMerkleTree"
import generateNullifierHash from "./generateNullifierHash"
import generateProof from "./generateProof"
import generateSignalHash from "./generateSignalHash"
import packToSolidityProof from "./packToSolidityProof"
import { FullProof } from "./types"
import verifyProof from "./verifyProof"

describe("Proof", () => {
    const treeDepth = 20
    const externalNullifier = "1"
    const signal = "0x111"

    const snarkArtifactsPath = "./packages/proof/snark-artifacts"
    const snarkArtifactsUrl = `http://www.trusted-setup-pse.org/semaphore/${treeDepth}`

    let identity: Identity
    let fullProof: FullProof
    let curve: any

    beforeAll(async () => {
        curve = await getCurveFromName("bn128")

        if (!fs.existsSync(snarkArtifactsPath)) {
            fs.mkdirSync(snarkArtifactsPath)
        }

        if (!fs.existsSync(`${snarkArtifactsPath}/semaphore.zkey`)) {
            await download(`${snarkArtifactsUrl}/semaphore.wasm`, snarkArtifactsPath)
            await download(`${snarkArtifactsUrl}/semaphore.zkey`, snarkArtifactsPath)
            await download(`${snarkArtifactsUrl}/semaphore.json`, snarkArtifactsPath)
        }
    }, 10000)

    afterAll(async () => {
        await curve.terminate()
    })

    describe("# createMerkleTree", () => {
        it("Should not generate a Merkle tree with a zero value leaf", async () => {
            const fun = () => createMerkleTree(treeDepth, BigInt(0), [BigInt(0), BigInt(1)])

            expect(fun).toThrow("Leaves cannot have zero values")
        })

        it("Should generate a Merkle tree", async () => {
            const merkleTree = createMerkleTree(treeDepth, BigInt(0), [BigInt(1), BigInt(2)])

            expect(merkleTree.leaves).toHaveLength(2)
        })
    })

    describe("# createMerkleProof", () => {
        it("Should not generate a Merkle proof of a non-existing leaf", async () => {
            const fun = () => createMerkleProof(treeDepth, BigInt(0), [BigInt(1), BigInt(2)], BigInt(3))

            expect(fun).toThrow("The leaf does not exist")
        })

        it("Should generate a Merkle proof", async () => {
            const merkleProof = createMerkleProof(treeDepth, BigInt(0), [BigInt(1), BigInt(2)], BigInt(2))

            expect(merkleProof.leaf).toBe(BigInt(2))
        })
    })

    describe("# generateProof", () => {
        it("Should generate a Semaphore proof", async () => {
            identity = new Identity()
            const identityCommitment = identity.generateCommitment()
            const leaves = [BigInt(3), BigInt(2), identityCommitment, BigInt(4)]
            const merkleProof = createMerkleProof(treeDepth, BigInt(0), leaves, identityCommitment)

            fullProof = await generateProof(identity, merkleProof, externalNullifier, signal, {
                wasmFilePath: `${snarkArtifactsPath}/semaphore.wasm`,
                zkeyFilePath: `${snarkArtifactsPath}/semaphore.zkey`
            })

            expect(typeof fullProof).toBe("object")
            expect(fullProof.publicSignals.externalNullifier).toBe(externalNullifier)
            expect(fullProof.publicSignals.merkleRoot).toBe(merkleProof.root.toString())
        }, 20000)
    })

    describe("# generateSignalHash", () => {
        it("Should generate a valid signal hash", async () => {
            const signalHash = generateSignalHash(signal)

            expect(signalHash.toString()).toBe(fullProof.publicSignals.signalHash)
        })
    })

    describe("# generateNullifierHash", () => {
        it("Should generate a valid nullifier hash", async () => {
            const nullifierHash = generateNullifierHash(externalNullifier, identity.getNullifier())

            expect(nullifierHash.toString()).toBe(fullProof.publicSignals.nullifierHash)
        })
    })

    describe("# packToSolidityProof", () => {
        it("Should return a Solidity proof", async () => {
            const solidityProof = packToSolidityProof(fullProof.proof)

            expect(solidityProof).toHaveLength(8)
        })
    })

    describe("# verifyProof", () => {
        it("Should generate and verify a Semaphore proof", async () => {
            const verificationKey = JSON.parse(fs.readFileSync(`${snarkArtifactsPath}/semaphore.json`, "utf-8"))

            const response = await verifyProof(verificationKey, fullProof)

            expect(response).toBe(true)
        })
    })
})
