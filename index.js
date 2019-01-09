function getRepositories() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://api.github.com/users/Lingy94/repos");
  req.send();
}

// function showRepositories(event, data) {
//   console.log(this.responseText);
//   let repoList = "<ul>";
//   for (let i = 0; i < this.responseText.length; i++) {
//     repoList += "<li>" + this.responseText[i]["name"] + "<li>"
//   }
//   repoList += "<ul>";
//   document.getElementById("repositories").innerHTML = repoList;
// }

function showRepositories(event, data) {
  let repos = JSON.parse(this.responseText);
  console.log(this.responseText);
  const repoList = `<ul>${repos
    .map(
      r =>
        "<li>" +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join("")}</ul>`;
  document.getElementById("repositories").innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener("load", showCommits);
  req.open("GET", "https://api.github.com/repos/Lingy94/" + name + "/commits");
  req.send();
}

function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        "<li><strong>" +
        commit.commit.author.name +
        "</strong> - " +
        commit.commit.message +
        "</li>"
    )
    .join("")}</ul>`;
  document.getElementById("commits").innerHTML = commitsList;
}

function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        "<li><strong>" +
        commit.commit.author.name +
        "</strong> - " +
        commit.commit.message +
        "</li>"
    )
    .join("")}</ul>`;
  document.getElementById("commits").innerHTML = commitsList;
}
