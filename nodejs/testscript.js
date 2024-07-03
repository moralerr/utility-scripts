import 'dotenv/config';
import common from '../common-lib/nodejs/index.js';

const owner = 'moralerr';
const repo = 'BarSignal';

common.sayHello();

common.getGithubRepo(owner, repo)
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
common.listReposForUser('moralerr')
  .then((repos) => {
    console.log(`Repos for user: ${repos.map(repo => repo.name).join(', ')}`);
  })
  .catch((error) => {
    console.error(`Failed to list repos: ${error.message}`);
  });

// ...and so on for the other functions
