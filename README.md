# Utility Scripts

## Overview

This project contains a collection of utility scripts, including a common library for interacting with GitHub using the `@octokit/rest` library and more... It provides various functions to manage repositories, issues, and users on GitHub, etc.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Setting Up Environment Variables](#setting-up-environment-variables)
  - [Common Library Functions](#common-library-functions)
- [Available Scripts](#available-scripts)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/utility-tools.git
   cd utility-tools
   ```

2. **Navigate to the `common-lib` directory and install dependencies:**
   ```sh
   cd common-lib/nodejs
   npm install
   ```
3. **Navigate to the `nodejs`directory and install dependencies:**
   ```sh
   cd ../../nodejs
   npm install
   ```

## Usage

### Setting Up Environment Variables

Create a `.env` file in the `nodejs` directory and add your GitHub token:

```sh
GITHUB_TOKEN=your_github_token
```

### Common Library Functions

The common library provides various functions for interacting with GitHub:

- `getGithubRepo(owner, repo)`: Retrieves information about a specific repository.
- `listReposForUser(username)`: Lists repositories for a specified user.
- `createRepoForAuthenticatedUser(name, isPrivate)`: Creates a new repository for the authenticated user.
- `listIssuesForRepo(owner, repo)`: Lists issues for a specified repository.
- `createIssue(owner, repo, title, body)`: Creates a new issue in a specified repository.
- `addCollaborator(owner, repo, username)`: Adds a collaborator to a specified repository.
- `getUserByUsername(username)`: Retrieves information about a specified user.
- `listPulls(owner, repo)`: Lists pull requests for a specified repository.
- `createPullRequest(owner, repo, title, head, base)`: Creates a new pull request.
- `mergePullRequest(owner, repo, pull_number)`: Merges a specified pull request.

## Example Usage

### nodejs/testscript.js:

```js
import "dotenv/config";
import common from "../common-lib/nodejs/index.js";

const owner = "octokit";
const repo = "rest.js";

common.sayHello();

common
  .getGithubRepo(owner, repo)
  .then((data) => {
    console.log(`Repository Name: ${data.name}`);
    console.log(`Owner: ${data.owner.login}`);
    console.log(`Stars: ${data.stargazers_count}`);
    common.sayGoodbye();
  })
  .catch((error) => {
    console.error(`Failed to fetch repository info: ${error.message}`);
    common.sayGoodbye();
  });

// Example usage of other functions
common
  .listReposForUser("octokit")
  .then((repos) => {
    console.log(`Repos for user: ${repos.map((repo) => repo.name).join(", ")}`);
  })
  .catch((error) => {
    console.error(`Failed to list repos: ${error.message}`);
  });
```

## Available Scripts

In the nodejs directory, you can run:

```shell
node [name-of-script.js]
```

Runs the specified script.
