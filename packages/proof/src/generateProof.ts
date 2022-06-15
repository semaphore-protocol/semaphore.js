import type { Identity } from "@semaphore-protocol/identity"
import { Group } from "@semaphore-protocol/group"
import { groth16 } from "snarkjs"
import generateSignalHash from "./generateSignalHash"
import { BigNumberish, FullProof, SnarkArtifacts } from "./types"

export default async function generateProof(
    identity: Identity,
    group: Group,
    externalNullifier: BigNumberish,
    signal: string,
    snarkArtifacts: SnarkArtifacts
): Promise<FullProof> {
    const commitment = identity.generateCommitment()
    const index = group.indexOf(commitment)

    if (index === -1) {
        throw new Error("The identity is not part of the group")
    }

    const merkleProof = group.generateProofOfMembership(index)

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
