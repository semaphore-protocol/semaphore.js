import { MerkleProof } from "@zk-kit/incremental-merkle-tree"
import createMerkleTree from "./createMerkleTree"
import { BigNumberish } from "./types"

/**
 * Creates a Merkle proof.
 * @param depth The depth of the tree.
 * @param zeroValue The zero value of the tree.
 * @param leaves The list of the leaves of the tree.
 * @param leaf The leaf for which Merkle proof should be created.
 * @returns The Merkle proof.
 */
export default function createMerkleProof(
    depth: number,
    zeroValue: BigNumberish,
    leaves: BigNumberish[],
    leaf: BigNumberish
): MerkleProof {
    const tree = createMerkleTree(depth, zeroValue, leaves)

    const leafIndex = tree.leaves.indexOf(BigInt(leaf))

    if (leafIndex === -1) {
        throw new Error("The leaf does not exist")
    }

    const merkleProof = tree.createProof(leafIndex)

    merkleProof.siblings = merkleProof.siblings.map((s) => s[0])

    return merkleProof
}
