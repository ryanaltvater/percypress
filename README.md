```
 ________     ___    ___      ___  ___  _________  ___  ___       ___  _________  ___  _______   ________
|\   ___ \   |\  \  /  /|    |\  \|\  \|\___   ___\\  \|\  \     |\  \|\___   ___\\  \|\  ___ \ |\   ____\
\ \  \_|\ \  \ \  \/  / /    \ \  \\\  \|___ \  \_\ \  \ \  \    \ \  \|___ \  \_\ \  \ \  \__/ | \  \___|_
 \ \  \ \\ \  \ \    / /      \ \  \\\  \   \ \  \ \ \  \ \  \    \ \  \   \ \  \ \ \  \ \  \_\  \ \_____  \
  \ \  \_\\ \  /     \/        \ \  \\\  \   \ \  \ \ \  \ \  \____\ \  \   \ \  \ \ \  \ \  \_/\ \|____|\  \
   \ \_______\/  /\   \         \ \_______\   \ \__\ \ \__\ \_______\ \__\   \ \__\ \ \__\ \______\ ____\_\  \
    \|_______/__/ /\ __\         \|_______|    \|__|  \|__|\|_______|\|__|    \|__|  \|__|\|_______|\_________\
             |__|/ \|__|                                                                           \|_________|
```

[[_TOC_]]

# 🧳 Introduction

Insert description here.

# 🛠 Installation

## Current versions

- **NVM:** _0.39.3_
- **Node:** _20.4.0_
- **NPM:** _9.7.2_

## Clone the repository

```bash
git clone git@.git
```

## Install Node Version Manager ([NVM](https://github.com/nvm-sh/nvm#about))

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh
```

- `nvm` allows the installation and use of different versions of Node, via the command line.

## Install [Node](https://nodejs.org/en/about)

First, navigate to the repo's root directory.

```bash
cd path/to/repo
```

Then, install Node.

```bash
nvm install
```

- Uses the version of Node that's specified in the `.nvmrc` file.

## Install [dependencies](https://docs.npmjs.com/about-packages-and-modules)

```bash
npm ci
```

- [`ci`](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable) stands for clean install, and is used to install exact versions of all dependencies from a `package-lock.json` file.
- `npm i` (or `npm install`) is used to install all dependencies from a `package.json` file.

# 👟 Commands

## Run a project's tests

```bash
npm test -- project-name
```

---

- Insert description here.

# 🗒 Notes

## `.env`

- A collection of environment variables that are used by Percy.
- When setting up a new project of tests, add the associated Percy token to this file.
- Ensure that the token name matches the project name, to avoid errors.
  - The difference between hyphens and underscores for spacing in the project name is handled dynamically.
  - Refer to the chart below, for proper naming.

|           | Project        | Token          |
|-----------|----------------|----------------|
| Correct   | `project-name` | `PROJECT_NAME` |
| Correct   | `project_name` | `PROJECT_NAME` |
| Correct   | `projectname`  | `PROJECTNAME`  |
| Correct   | `pn`           | `PN`           |
| Incorrect | `projectname`  | `PROJECT_NAME` |
| Incorrect | `projectname`  | `PROJECT_NAME` |
| Incorrect | `project`      | `NAME`         |
| Incorrect | `pn`           | `PROJECTNAME`  |


## `cypress.config.js`

- The configuration file for Cypress that allows you to customize various settings and behaviors for your test suite.
- For more information, refer to the [Cypress configuration documentation](https://docs.cypress.io/guides/references/configuration).

## `cypress.js`

- The file for Cypress that dynamically sets environment variables and executes tests based on the provided project name.

# 🔗 Additional links

1. [Run `nvm use` automatically every time there's a `.nvmrc` file in the directory](https://stackoverflow.com/questions/23556330/run-nvm-use-automatically-every-time-theres-a-nvmrc-file-on-the-directory)
