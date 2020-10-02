const core = require('@actions/core');
const github = require('@actions/github');

let run = async ()=>{

 try{

  const issueTitle = core.getInput('issue-title');
  const jokeBody = core.getInput('joke-body');
  const token = core.getInput('repo-token');

  const octokit = github.getOctokit(token);

  const newIssue = await octokit.issues.create({
     repo: github.context.repo.repo,
     owner: github.context.repo.owner,
     body: jokeBody,
  });

  }catch(err){
    core.setFailed(err.message);
  }

};

run();
