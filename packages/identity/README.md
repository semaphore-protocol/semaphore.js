<p align="center">
    <h1 align="center">
        Semaphore identity
    </h1>
    <p align="center">A library for managing Semaphore identities.</p>
</p>

<p align="center">
    <a href="https://github.com/semaphore-protocol/semaphore.js">
        <img src="https://img.shields.io/badge/project-semaphore-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/semaphore.js/blob/main/packages/identity/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/semaphore-protocol/semaphore.js.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@semaphore-protocol/identity">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@semaphore-protocol/identity?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@semaphore-protocol/identity">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@semaphore-protocol/identity.svg?style=flat-square" />
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
        <a href="https://semaphore-protocol.github.io/semaphore.js/identity">
            📘 Docs
        </a>
    </h4>
</div>

---

## 🛠 Install

### npm or yarn

Install the `@semaphore-protocol/identity` package with npm:

```bash
npm i @semaphore-protocol/identity
```

or yarn:

```bash
yarn add @semaphore-protocol/identity
```

## 📜 Usage

### Creating an identity with a random strategy:

```typescript
import { Identity } from "@semaphore-protocol/identity"
// const { Identity } = require("@semaphore-protocol/identity") // with commonJS

const identity = new Identity()

const trapdoor = identity.getTrapdoor()
const nullifier = identity.getNullifier()
const secret = identity.getSecret()
const multipartSecret = identity.getMultipartSecret()

const identityCommitment = identity.genIdentityCommitment()
```

### Creating an identity with a message strategy:

```typescript
import { Identity, Strategy } from "@semaphore-protocol/identity"

const identity = new Identity(Strategy.MESSAGE, "message")
```

### Creating an identity with a serialized strategy:

```typescript
import { Identity, Strategy } from "@semaphore-protocol/identity"

const identity = new Identity()
const serializedIdentity = identity.serializeIdentity()

const identity2 = new Identity(Strategy.SERIALIZED, serializedIdentity)
```
