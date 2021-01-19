
pipeline {
    // Cualquier agente
    agent none

    stages {
        stage('Build') {
            agent {
                docker { image 'maven:3.6.3-openjdk-11-slim' }
            }
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
