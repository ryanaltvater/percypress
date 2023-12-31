```
 /$$$$$$$  /$$$$$$$$ /$$$$$$$   /$$$$$$  /$$     /$$ /$$$$$$$  /$$$$$$$  /$$$$$$$$  /$$$$$$   /$$$$$$
| $$__  $$| $$_____/| $$__  $$ /$$__  $$|  $$   /$$/| $$__  $$| $$__  $$| $$_____/ /$$__  $$ /$$__  $$
| $$  \ $$| $$      | $$  \ $$| $$  \__/ \  $$ /$$/ | $$  \ $$| $$  \ $$| $$      | $$  \__/| $$  \__/
| $$$$$$$/| $$$$$   | $$$$$$$/| $$        \  $$$$/  | $$$$$$$/| $$$$$$$/| $$$$$   |  $$$$$$ |  $$$$$$
| $$____/ | $$__/   | $$__  $$| $$         \  $$/   | $$____/ | $$__  $$| $$__/    \____  $$ \____  $$
| $$      | $$      | $$  \ $$| $$    $$    | $$    | $$      | $$  \ $$| $$       /$$  \ $$ /$$  \ $$
| $$      | $$$$$$$$| $$  | $$|  $$$$$$/    | $$    | $$      | $$  | $$| $$$$$$$$|  $$$$$$/|  $$$$$$/
|__/      |________/|__/  |__/ \______/     |__/    |__/      |__/  |__/|________/ \______/  \______/
```

# 🧳 Introduction

An example project that demonstrates the very bare-bones capabilities of using Percy within Cypress tests to take snapshots of web pages, for visual regression testing. The snapshots are then uploaded to Percy's dashboard, where they can be reviewed.

# 🛠 Installation

## Current versions

- **NVM:** _0.39.3_
- **Node:** _20.4.0_
- **NPM:** _9.7.2_

## Clone the repository

```bash
git clone git@github.com:ryanaltvater/percypress.git
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

# 👟 Run commands

## Individual tests

```bash
npm run open
```

---

- Develop new tests, or test/debug existing ones.
- Percy will be disabled in this mode, and not take snapshots.
- Testing happens within the Cypress GUI, and not the command line.

## Set of tests

```bash
npm run tests -- project-name
```

---

- Run all tests that are associated with the specified project.
- Percy will be enabled in this mode, and take snapshots.
- Testing happens within the command line, and not the Cypress GUI.

# 🗒 Notes

## `.env`

- A collection of environment variables that are used by Percy.
- When setting up a new project of tests, add a corresponding Percy token to this file.
- Ensure that the token name matches the project name, to avoid errors.
  - If the project name is `project-name`, then the token name should be `PROJECT_NAME`.
  - The difference between hyphens and underscores, for spacing, is handled dynamically.
  - The project name can use hyphens, underscores, or no spacing.
  - The token name can use underscores, or no spacing.
  - Refer to the chart below, for examples.

|           | Project        | Token          |
| --------- | -------------- | -------------- |
| Correct   | `project-name` | `PROJECT_NAME` |
| Correct   | `project_name` | `PROJECT_NAME` |
| Correct   | `projectname`  | `PROJECTNAME`  |
| Correct   | `pn`           | `PN`           |
| Incorrect | `projectname`  | `PROJECT_NAME` |
| Incorrect | `projectname`  | `PROJECT_NAME` |
| Incorrect | `project`      | `NAME`         |
| Incorrect | `pn`           | `PROJECTNAME`  |


## `cypress.config.js`

- The configuration file allows you to customize various settings and behaviors for your test suite.
- For more information, refer to the [configuration documentation](https://docs.cypress.io/guides/references/configuration).

## `cypress.js`

- The file that dynamically sets the environment variables and executes tests, based on the provided project name.

# 🔗 Additional links

1. [Run `nvm use` automatically every time there's a `.nvmrc` file in the directory](https://stackoverflow.com/questions/23556330/run-nvm-use-automatically-every-time-theres-a-nvmrc-file-on-the-directory)
