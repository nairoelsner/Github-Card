const userSocialMediaLinks = {
  github: 'nairoelsner',
  youtube: 'nairoelsner',
  facebook: 'nairo.elsner',
  instagram: 'n_elsner',
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userSocialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()



function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      pageTittle.textContent = data.name
      userGitHubAvatar.src = data.avatar_url
      userName.textContent = data.name
      userGitHubLogin.textContent = data.login
      userBio.textContent = data.bio
      userGitHubLink.href = data.html_url
    })
}
getGitHubProfileInfos()
