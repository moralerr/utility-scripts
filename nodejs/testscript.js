import 'dotenv/config';
import common from 'common-lib';
const owner = 'moralerr';
const repo = 'BarSignal';

common.sayHello();
common.sayGoodbye();
//utils.getGithubRepo("moralerr", "BarSignal");

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

