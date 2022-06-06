import { IncrementalMerkleTree } from "@zk-kit/incremental-merkle-tree"
import { poseidon } from "circomlibjs"
import { BigNumberish } from "./types"

/**
 * Creates a Merkle tree.
 * @param depth The depth of the tree.
 * @param zeroValue The zero value of the tree.
 * @param leaves The list of the leaves of the tree.
 * @returns The Merkle tree.
 */
export default function createMerkleTree(
    depth: number,
    zeroValue: BigNumberish,
    leaves: BigNumberish[]
): IncrementalMerkleTree {
    const tree = new IncrementalMerkleTree(poseidon, depth, zeroValue, 2)

    for (const leaf of leaves) {
        if (leaf === zeroValue) {
            throw new Error("Leaves cannot have zero values")
        }

        tree.insert(BigInt(leaf))
    }

    return tree
}
