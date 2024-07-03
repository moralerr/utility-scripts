import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Use a personal access token from environment variables
});

const common = {
  getGithubRepo: async function(owner, repo) {
    try {
      const response = await octokit.rest.repos.get({
        owner,
        repo,
      });
      return response.data;
    } catch (e) {
      console.error('getGitHubRepo() error:', e);
      throw e;
    }
  },
  listReposForUser: async function(username) {
    try {
      const response = await octokit.rest.repos.listForUser({
        username,
      });
      return response.data;
    } catch (e) {
      console.error('listReposForUser() error:', e);
      throw e;
    }
  },
  createRepoForAuthenticatedUser: async function(name, isPrivate = true) {
    try {
      const response = await octokit.rest.repos.createForAuthenticatedUser({
      name,
      private: isPrivate,
    });
    return response.data;
    } catch (e) {
      console.error('createRepoForAuthenticatedUser() error:', e);
      throw e;
    }
  },
  listIssuesForRepo: async function(owner, repo) {
    try {
      const response = await octokit.rest.issues.listForRepo({
        owner,
        repo,
      });
      return response.data;
    } catch (e) {
      console.error('listIssuesForRepo() error:', e);
      throw e;
    }
  },
  createIssue: async function(owner, repo, title, body) {
    try {
      const response = await octokit.rest.issues.create({
        owner,
        repo,
        title,
        body,
      });
      return response.data;
    } catch (e) {
      console.error('createIssue() error:', e);
      throw e;
    }
  },
  addCollaborator: async function(owner, repo, username) {
    try {
      const response = await octokit.rest.repos.addCollaborator({
        owner,
        repo,
        username,
      });
      return response.data;
    } catch (e) {
      console.error('addCollaborator() error:', e);
      throw e;
    }
  },
  getUserByUsername: async function(username) {
    try {
      const response = await octokit.rest.users.getByUsername({
        username,
      });
      return response.data;
    } catch (e) {
      console.error('getUserByUsername() error:', e);
      throw e;
    }
  },
  listPulls: async function(owner, repo) {
    try {
      const response = await octokit.rest.pulls.list({
        owner,
        repo,
      });
      return response.data;
    } catch (e) {
      console.error('listPulls() error:', e);
      throw e;
    }
  },
  createPullRequest: async function(owner, repo, title, head, base) {
    try {
      const response = await octokit.rest.pulls.create({
        owner,
        repo,
        title,
        head,
        base,
      });
      return response.data;
    } catch (e) {
      console.error('createPullRequest() error:', e);
      throw e;
    }
  },
  mergePullRequest: async function(owner, repo, pull_number) {
    try {
      const response = await octokit.rest.pulls.merge({
        owner,
        repo,
        pull_number,
      });
      return response.data;
    } catch (e) {
      console.error('mergePullRequest() error:', e);
      throw e;
    }
  },
};

export default common;
