import { Identity } from "@semaphore-protocol/identity"
import { getCurveFromName } from "ffjavascript"
import fs from "fs"
import path from "path"
import Semaphore from "./semaphore"
import { generateMerkleProof, genExternalNullifier } from "./utils"

describe("Semaphore", () => {
    const assets = "./packages/proof/assets"

    let curve: any

    beforeAll(async () => {
        curve = await getCurveFromName("bn128")
    })

    afterAll(async () => {
        await curve.terminate()
    })

    describe("Generate and verify proof", () => {
        it("Should generate a Semaphore witness", async () => {
            const identity = new Identity()
            const identityCommitment = identity.genIdentityCommitment()
            const externalNullifier = genExternalNullifier("voting_1")
            const leaves = [BigInt(3), BigInt(2), identityCommitment, BigInt(4)]
            const signal = "0x111"

            const merkleProof = generateMerkleProof(20, BigInt(0), leaves, identityCommitment)

            const witness = Semaphore.genWitness(
                identity.getTrapdoor(),
                identity.getNullifier(),
                merkleProof,
                externalNullifier,
                signal
            )

            expect(typeof witness).toBe("object")
        })

        // eslint-disable-next-line jest/no-disabled-tests
        it.skip("Should generate and verify Semaphore proof", async () => {
            const identity = new Identity()
            const identityCommitment = identity.genIdentityCommitment()
            const externalNullifier = genExternalNullifier("voting_1")
            const leaves = [BigInt(3), BigInt(2), identityCommitment, BigInt(4)]
            const signal = "0x111"

            const merkleProof = generateMerkleProof(20, BigInt(0), leaves, identityCommitment)

            const witness = Semaphore.genWitness(
                identity.getTrapdoor(),
                identity.getNullifier(),
                merkleProof,
                externalNullifier,
                signal
            )

            const wasmFilePath = path.join(assets, "semaphore", "semaphore.wasm")
            const zkeyFilePath = path.join(assets, "semaphore", "semaphore.zkey")
            const fullProof = await Semaphore.genProof(witness, wasmFilePath, zkeyFilePath)

            const vkeyPath = path.join(assets, "semaphore", "verification_key.json")
            const vKey = JSON.parse(fs.readFileSync(vkeyPath, "utf-8"))

            const response = await Semaphore.verifyProof(vKey, fullProof)

            expect(response).toBe(true)
        }, 30000)
    })
})
