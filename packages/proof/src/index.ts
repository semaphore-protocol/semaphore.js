import { MerkleProof } from "@zk-kit/incremental-merkle-tree"
import createMerkleTree from "./createMerkleTree"
import createMerkleProof from "./createMerkleProof"
import generateNullifierHash from "./generateNullifierHash"
import generateProof from "./generateProof"
import verifyProof from "./verifyProof"
import generateSignalHash from "./generateSignalHash"
import packToSolidityProof from "./packToSolidityProof"

export {
    MerkleProof,
    createMerkleTree,
    createMerkleProof,
    generateNullifierHash,
    generateProof,
    verifyProof,
    generateSignalHash,
    packToSolidityProof
}
export * from "./types"
