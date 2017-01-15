.ldcontrol: {
options: {
  dir: 'dist',
  commit: true,
  push: true,
  connectCommits: false,
  message: 'Built RasPi from commit first on branch master'
},
bitbucket: {
  options: {
    remote: 'git@bitbucket.org:mimic_octopus/test.git',
    branch: 'build'
    }
  }
}
}