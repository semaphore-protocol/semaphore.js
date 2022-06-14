<p align="center">
    <h1 align="center">
        Semaphore group
    </h1>
    <p align="center">A library for managing Semaphore groups.</p>
</p>

<p align="center">
    <a href="https://github.com/semaphore-protocol/semaphore.js">
        <img src="https://img.shields.io/badge/project-semaphore-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/semaphore.js/blob/main/packages/group/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/semaphore-protocol/semaphore.js.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@semaphore-protocol/group">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@semaphore-protocol/group?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@semaphore-protocol/group">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@semaphore-protocol/group.svg?style=flat-square" />
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
        <a href="https://semaphore-protocol.github.io/semaphore.js/group">
            📘 Docs
        </a>
    </h4>
</div>

What's a group? Abstraction of Merkle trees.
Table with different sizes.

---

## 🛠 Install

### npm or yarn

Install the `@semaphore-protocol/group` package with npm:

```bash
npm i @semaphore-protocol/group
```

or yarn:

```bash
yarn add @semaphore-protocol/group
```

## 📜 Usage

\# **new Group**(size?: _GroupSize | number_): _Group_

```typescript
import { Group } from "@semaphore-protocol/group"

// Group with max 1048576 members (20^²).
const group1 = new Group()

// Group with max 65536 members (16^²).
const group2 = new Group(GroupSize.XS)

// Group with max 16777216 members (24^²).
const group3 = new Group(GroupSize.XL)
```

\# **getTrapdoor**(): _bigint_

```typescript
const trapdoor = identity.getTrapdoor()
```

\# **getNullifier**(): _bigint_

```typescript
const nullifier = identity.getNullifier()
```

\# **generateCommitment**(): _bigint_

```typescript
const commitment = identity.generateCommitment()
```
