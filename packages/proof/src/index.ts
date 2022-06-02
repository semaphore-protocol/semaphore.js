import { MerkleProof } from "@zk-kit/incremental-merkle-tree"
import Semaphore from "./semaphore"
import { generateMerkleProof, generateMerkleTree, genExternalNullifier } from "./utils"

export { Semaphore, generateMerkleProof, generateMerkleTree, genExternalNullifier, MerkleProof }
export * from "./types"
