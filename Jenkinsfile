pipeline {
  agent any

  tools {
    nodejs 'Node_18' // Match the name configured in Jenkins
  }

  environment {
    APP_NAME = 'nestjs-backend'
    PORT = 3000
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/your-org/your-nestjs-repo.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Package with Docker') {
      when {
        expression { fileExists('Dockerfile') }
      }
      steps {
        sh 'docker build -t nestjs-app .'
      }
    }

    stage('Deploy') {
      steps {
        echo "Deploy stage can push to server or use Docker Compose"
        // Example: sh 'docker-compose up -d'
      }
    }
  }

  post {
    always {
      echo 'Pipeline completed.'
    }
    success {
      echo 'Build successful.'
    }
    failure {
      echo 'Build failed.'
    }
  }
}
