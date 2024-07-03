import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Use a personal access token from environment variables
});

const common = {
  sayHello: function() {
    console.log('Hello from common-lib');
  },
  sayGoodbye: function() {
    console.log('Goodbye!');
  },
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
  }
};

export default common;
