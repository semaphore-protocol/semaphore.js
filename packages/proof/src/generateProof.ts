import type { Identity } from "@semaphore-protocol/identity"
import { MerkleProof } from "@zk-kit/incremental-merkle-tree"
import { groth16 } from "snarkjs"
import generateSignalHash from "./generateSignalHash"
import { BigNumberish, FullProof, SnarkArtifacts } from "./types"

export default async function generateProof(
    identity: Identity,
    merkleProof: MerkleProof,
    externalNullifier: BigNumberish,
    signal: string,
    snarkArtifacts: SnarkArtifacts
): Promise<FullProof> {
    const { proof, publicSignals } = await groth16.fullProve(
        {
            identityTrapdoor: identity.getTrapdoor(),
            identityNullifier: identity.getNullifier(),
            treePathIndices: merkleProof.pathIndices,
            treeSiblings: merkleProof.siblings,
            externalNullifier,
            signalHash: generateSignalHash(signal)
        },
        snarkArtifacts.wasmFilePath,
        snarkArtifacts.zkeyFilePath
    )

    return {
        proof,
        publicSignals: {
            merkleRoot: publicSignals[0],
            nullifierHash: publicSignals[1],
            signalHash: publicSignals[2],
            externalNullifier: publicSignals[3]
        }
    }
}
