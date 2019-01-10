let userInfo = JSON.stringify({name: "IMH51", token: "token"})

function showRepositories(event, data) {
  console.log(this.responseText);
  var repos = JSON.parse(this.responseText)
  console.log(repos);
  const repoList = `<ul>${repos
    .map(r => "<li>" + r.name + "</li>")
    .join("")}</ul>`;
  document.getElementById("repositories").innerHTML = repoList;
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories)
  req.open("GET", "https://api.github.com/users/IMH51/repos?access_token=dbee106b2f75c2be4524dd6b76de3e2814b1d225");
  req.send();
}
