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

\# **createMerkleTree**(depth: _number_, zeroValue: _BigNumberish_, leaves: _BigNumberish\[]_): _MerkleProof_

```typescript
import { createMerkleTree } from "@semaphore-protocol/proof"

const depth = 20
const zeroValue = BigInt(0)
const leaves = [BigInt(1), BigInt(2)]

const merkleTree = createMerkleTree(depth, zeroValue, leaves)
```

\# **createMerkleProof**(depth: _number_, zeroValue: _BigNumberish_, leaves: _BigNumberish\[]_, leaf: _BigNumberish_): _MerkleProof_

```typescript
import { Identity } from "@semaphore-protocol/identity"
import { createMerkleProof } from "@semaphore-protocol/proof"

const depth = 20
const zeroValue = BigInt(0)

const identity = new Identity()

const leaf = identity.genIdentityCommitment()
const leaves = [BigInt(1), identityCommitment, BigInt(2)]

const merkleProof = createMerkleProof(depth, zeroValue, leaves, leaf)
```

\# **generateProof**(identity: _Identity_, merkleProof: _MerkleProof_, externalNullifier: _BigNumberish_, signal: _string_, snarkArtifacts: _SnarkArtifacts_): Promise\<_SemaphoreFullProof_>

```typescript
import { Identity } from "@semaphore-protocol/identity"
import { generateProof } from "@semaphore-protocol/proof"

const externalNullifier = BigInt(1)
const signal = "Hello world"

const fullProof = await generateProof(identity, merkleProof, externalNullifier, signal, {
    zkeyFilePath: "./semaphore.zkey",
    wasmFilePath: "./semaphore.wasm"
})
```

\# **verifyProof**(verificationKey: _any_, fullProof: _FullProof_): Promise\<_boolean_>

```typescript
import { verifyProof } from "@semaphore-protocol/proof"

const verificationKey = JSON.parse(fs.readFileSync("/semaphore.json", "utf-8"))

await verifyProof(verificationKey, fullProof)
```

\# **packToSolidityProof**(proof: _Proof_): _SolidityProof_

```typescript
import { packToSolidityProof } from "@semaphore-protocol/proof"

const solidityProof = packToSolidityProof(fullProof.proof)
```

\# **generateNullifierHash**(externalNullifier: _BigNumberish_, identityNullifier: _BigNumberish_): _bigint_

```typescript
import { generateNullifierHash } from "@semaphore-protocol/proof"

const nullifierHash = generateNullifierHash(externalNullifier, identity.getNullifier())
```

\# **generateSignalHash**(signal: _string_): _bigint_

```typescript
import { generateSignalHash } from "@semaphore-protocol/proof"

const signalHash = generateSignalHash(signal)
```
