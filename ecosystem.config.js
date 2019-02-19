module.exports = {
  apps: [{
    name: 'gutsy-project-view',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-216-74-131.us-east-2.compute.amazonaws.com',
      key: '/Users/mikejanes/.ssh/Gutsy2.pem',
      ref: 'origin/master',
      repo: 'https://github.com/MikeJDev/gutsy-view.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
//