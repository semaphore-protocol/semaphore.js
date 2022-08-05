<p align="center">
    <h1 align="center">
        Semaphore subgraph
    </h1>
    <p align="center">A library to query Semaphore contracts.</p>
</p>

<p align="center">
    <a href="https://github.com/semaphore-protocol/semaphore.js">
        <img src="https://img.shields.io/badge/project-semaphore-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/semaphore.js/blob/main/packages/subgraph/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/semaphore-protocol/semaphore.js.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@semaphore-protocol/subgraph">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@semaphore-protocol/subgraph?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@semaphore-protocol/subgraph">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@semaphore-protocol/subgraph.svg?style=flat-square" />
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
        <a href="https://semaphore-protocol.github.io/semaphore.js/subgraph">
            📘 Docs
        </a>
    </h4>
</div>

| This library allows you to query the [`Semaphore.sol`](https://github.com/semaphore-protocol/semaphore/blob/main/contracts/Semaphore.sol) contract data (i.e. groups) using the [Semaphore subgraph](https://github.com/semaphore-protocol/subgraph) on Kovan, Goerli, and Arbitrum One. It can be used on Node.js and browsers. |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 🛠 Install

### npm or yarn

Install the `@semaphore-protocol/subgraph` package with npm:

```bash
npm i @semaphore-protocol/subgraph
```

or yarn:

```bash
yarn add @semaphore-protocol/subgraph
```

## 📜 Usage

\# **new Subgraph**(network: _Network_ = "arbitrum" ): _Subgraph_

```typescript
import { Subgraph } from "@semaphore-protocol/subgraph"

const subgraph = new Subgraph()
```

\# **getGroups**(options?: _{ members: boolean }_)

```typescript
const groups = subgraph.getGroups()

// or

const groups = subgraph.getGroups({ members: true })
```

\# **getGroup**(groupId: _string_, options?: _{ members: boolean }_)

```typescript
const group = subgraph.getGroup("1")

// or

const { members } = subgraph.getGroup("1", { members: true })
```
