<p align="center">
    <h1 align="center">
        Semaphore proof
    </h1>
    <p align="center">A library for generating and verifying Semaphore proofs.</p>
</p>

<p align="center">
    <a href="https://github.com/semaphore-protocol/semaphore.js">
        <img src="https://img.shields.io/badge/project-semaphore.js-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/semaphore.js/blob/main/packages/proof/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/semaphore-protocol/semaphore.js.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@semaphore-protocol/proof">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@semaphore-protocol/proof?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@semaphore-protocol/proof">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@semaphore-protocol/proof.svg?style=flat-square" />
    </a>
    <a href="https://eslint.org/">
        <img alt="Linter eslint" src="https://img.shields.io/badge/linter-eslint-8080f2?style=flat-square&logo=eslint" />
    </a>
    <a href="https://prettier.io/">
        <img alt="Code style prettier" src="https://img.shields.io/badge/code%20style-prettier-f8bc45?style=flat-square&logo=prettier" />
    </a>
</p>

<div align="center">
    <h4>
        <a href="https://t.me/joinchat/B-PQx1U3GtAh--Z4Fwo56A">
            🗣️ Chat &amp; Support
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://semaphore-protocol.github.io/semaphore.js/proof">
            📘 Docs
        </a>
    </h4>
</div>

---

## 🛠 Install

### npm or yarn

Install the `@semaphore-protocol/proof` package with npm:

```bash
npm i @semaphore-protocol/proof
```

or yarn:

```bash
yarn add @semaphore-protocol/proof
```

## 📜 Usage

### Generating Merkle proofs

```typescript
import { Identity } from "@semaphore-protocol/identity"
import { generateMerkleProof } from "@semaphore-protocol/proof"

const depth = 20
const zeroValue = BigInt(0)
const identity = new Identity()
const identityCommitment = identity.genIdentityCommitment()
const identityCommitments = [BigInt(1), identityCommitment, BigInt(2)]

const merkleProof = generateMerkleProof(depth, zeroValue, identityCommitments, 1)
```

### Creating Semaphore proofs

```typescript
import { Semaphore } from "@semaphore-protocol/protocols"

const signal = "Hello world"
const externalNullifier = BigInt(1)
const witness = Semaphore.genWitness(identity, merkleProof, externalNullifier, signal)

const { proof, publicSignals } = await Semaphore.genProof(witness, "./semaphore.wasm", "./semaphore.zkey")
const solidityProof = Semaphore.packToSolidityProof(proof)
```
