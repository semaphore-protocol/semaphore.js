<p align="center">
    <h1 align="center">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon-dark.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon.svg">
        <img width="40" alt="Semaphore icon." src="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon.svg">
      </picture>
      Semaphore.JS
    </h1>
</p>

<p align="center">
    <a href="https://github.com/semaphore-protocol" target="_blank">
        <img src="https://img.shields.io/badge/project-Semaphore-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/semaphore.js/blob/main/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/semaphore-protocol/semaphore.js.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/semaphore.js/actions?query=workflow%3Atest">
        <img alt="GitHub Workflow test" src="https://img.shields.io/github/workflow/status/semaphore-protocol/semaphore.js/test?label=test&style=flat-square&logo=github">
    </a>
    <a href="https://github.com/semaphore-protocol/semaphore.js/actions?query=workflow%3Astyle">
        <img alt="GitHub Workflow style" src="https://img.shields.io/github/workflow/status/semaphore-protocol/semaphore.js/style?label=style&style=flat-square&logo=github">
    </a>
    <a href="https://coveralls.io/github/semaphore-protocol/semaphore.js">
        <img alt="Coveralls" src="https://img.shields.io/coveralls/github/semaphore-protocol/semaphore.js?label=coverage (ts)&style=flat-square&logo=coveralls">
    </a>
    <a href="https://eslint.org/">
        <img alt="Linter eslint" src="https://img.shields.io/badge/linter-eslint-8080f2?style=flat-square&logo=eslint">
    </a>
    <a href="https://prettier.io/">
        <img alt="Code style prettier" src="https://img.shields.io/badge/code%20style-prettier-f8bc45?style=flat-square&logo=prettier">
    </a>

</p>

<div align="center">
    <h4>
        <a href="/CONTRIBUTING.md">
            👥 Contributing
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="/CODE_OF_CONDUCT.md">
            🤝 Code of conduct
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://github.com/semaphore-protocol/semaphore.js/contribute">
            🔎 Issues
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://t.me/joinchat/B-PQx1U3GtAh--Z4Fwo56A">
            🗣️ Chat &amp; Support
        </a>
    </h4>
</div>

| Semaphore provides a set of JavaScript libraries to create identities, groups, generate zero-knowledge proofs and verify them with minimal effort. |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |

## 📦 Packages

<table>
    <th>Package</th>
    <th>Version</th>
    <th>Downloads</th>
    <tbody>
        <tr>
            <td>
                <a href="https://github.com/semaphore-protocol/semaphore.js/tree/main/packages/identity">
                    @semaphore-protocol/identity
                </a>
                <a href="https://semaphore-protocol.github.io/semaphore.js/identity">
                    (docs)
                </a>
            </td>
            <td>
                <!-- NPM version -->
                <a href="https://npmjs.org/package/@semaphore-protocol/identity">
                    <img src="https://img.shields.io/npm/v/@semaphore-protocol/identity.svg?style=flat-square" alt="NPM version" />
                </a>
            </td>
            <td>
                <!-- Downloads -->
                <a href="https://npmjs.org/package/@semaphore-protocol/identity">
                    <img src="https://img.shields.io/npm/dm/@semaphore-protocol/identity.svg?style=flat-square" alt="Downloads" />
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://github.com/semaphore-protocol/semaphore.js/tree/main/packages/group">
                    @semaphore-protocol/group
                </a>
                <a href="https://semaphore-protocol.github.io/semaphore.js/group">
                    (docs)
                </a>
            </td>
            <td>
                <!-- NPM version -->
                <a href="https://npmjs.org/package/@semaphore-protocol/group">
                    <img src="https://img.shields.io/npm/v/@semaphore-protocol/group.svg?style=flat-square" alt="NPM version" />
                </a>
            </td>
            <td>
                <!-- Downloads -->
                <a href="https://npmjs.org/package/@semaphore-protocol/group">
                    <img src="https://img.shields.io/npm/dm/@semaphore-protocol/group.svg?style=flat-square" alt="Downloads" />
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://github.com/semaphore-protocol/semaphore.js/tree/main/packages/proof">
                    @semaphore-protocol/proof
                </a>
                <a href="https://semaphore-protocol.github.io/semaphore.js/proof">
                    (docs)
                </a>
            </td>
            <td>
                <!-- NPM version -->
                <a href="https://npmjs.org/package/@semaphore-protocol/proof">
                    <img src="https://img.shields.io/npm/v/@semaphore-protocol/proof.svg?style=flat-square" alt="NPM version" />
                </a>
            </td>
            <td>
                <!-- Downloads -->
                <a href="https://npmjs.org/package/@semaphore-protocol/proof">
                    <img src="https://img.shields.io/npm/dm/@semaphore-protocol/proof.svg?style=flat-square" alt="Downloads" />
                </a>
            </td>
        </tr>
    <tbody>
</table>

## 🛠 Install

Clone this repository:

```bash
git clone https://github.com/semaphore-protocol/semaphore.js.git
```

and install the dependencies:

```bash
cd semaphore.js && yarn
```

## 📜 Usage

### Code quality and formatting

Run [ESLint](https://eslint.org/) to analyze the code and catch bugs:

```bash
yarn lint
```

Run [Prettier](https://prettier.io/) to check formatting rules:

```bash
yarn prettier
```

or to automatically format the code:

```bash
yarn prettier:write
```

### Conventional commits

Semaphore uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). A [command line utility](https://github.com/commitizen/cz-cli) to commit using the correct syntax can be used by running:

```bash
yarn commit
```

It will also automatically check that the modified files comply with ESLint and Prettier rules.

### Testing

Run [Jest](https://jestjs.io/) to test the code with coverage:

```bash
yarn test
```

### Build packages

Run [Rollup](https://www.rollupjs.org) to build all the packages:

```bash
yarn build
```

A `dist` folder will be created inside each package.

### Documentation

Run [TypeDoc](https://typedoc.org/) to generate a documentation website for each package:

```bash
yarn docs
```

The output will be placed on the `docs` folder.
