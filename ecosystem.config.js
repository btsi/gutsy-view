module.exports = {
  apps: [{
    name: 'gutsy-project-view',
    script: './src/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-17-152-133.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Gutsy2.pem',
      ref: 'origin/master',
      repo: 'https://github.com/MikeJDev/gutsy-view.git',
      path: '/home/ubuntu/server/current',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
//