import { IncrementalMerkleTree, MerkleProof } from "@zk-kit/incremental-merkle-tree"
import { poseidon } from "circomlibjs"
import { BigNumberish } from "./types"

export default class Group {
    private _merkleTree: IncrementalMerkleTree

    /**
     * Initializes the group with the tree depth and the zero value.
     * @param treeDepth Tree depth.
     * @param zeroValue Zero values for zeroes.
     */
    constructor(treeDepth = 20, zeroValue = BigInt(0)) {
        this._merkleTree = new IncrementalMerkleTree(poseidon, treeDepth, zeroValue, 2)
    }

    /**
     * Returns the root hash of the tree.
     * @returns Root hash.
     */
    get root(): BigNumberish {
        return this._merkleTree.root
    }

    /**
     * Returns the depth of the tree.
     * @returns Tree depth.
     */
    get depth(): number {
        return this._merkleTree.depth
    }

    /**
     * Returns the members (i.e. identity commitments) of the group.
     * @returns List of members.
     */
    get members(): BigNumberish[] {
        return this._merkleTree.leaves
    }

    /**
     * Adds a new member to the group.
     * @param identityCommitment New member.
     */
    public addMember(identityCommitment: BigNumberish) {
        this._merkleTree.insert(identityCommitment)
    }

    /**
     * Adds new members to the group.
     * @param identityCommitments New members.
     */
    public addMembers(identityCommitments: BigNumberish[]) {
        for (const identityCommitment of identityCommitments) {
            this._merkleTree.insert(identityCommitment)
        }
    }

    /**
     * Removes a member from the group.
     * @param index Index of the member to be removed.
     */
    public removeMember(index: number) {
        this._merkleTree.delete(index)
    }

    /**
     * Creates a proof of membership.
     * @param index Index of the proof's member.
     * @returns Proof object.
     */
    generateMerkleProof(index: number): MerkleProof {
        return this._merkleTree.createProof(index)
    }
}
