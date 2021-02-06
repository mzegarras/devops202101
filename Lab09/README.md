# Jenkins


## Settings
1. Limpiar containers
    ```bash 
    docker rm $(docker ps -aq) -f
    ```

1. Iniciar jenkins
    ```bash         
    rm -fr jenkins_home
    mkdir jenkins_home
    docker-compose up -d
    
    docker exec -it --user root jenkins /bin/bash
    chown jenkins /var/run/docker.sock
    docker exec -it jenkins /bin/bash

    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
    ``` 
    e4bb7dc1ac6c4a84a2c0a259081fb0b9

1. Verificar plugins:
    "pipeline"
    "Docker Pipeline"
    "Pipeline Maven Integration"
    "Warnings Next Generation"
    "Copy Artifacts"
    "Pipeline Utility Steps"
    "Jacoco"
    "SonarQube Scanner" [Información](https://www.jenkins.io/doc/pipeline/steps/sonar/)
    "Google Kubernetes Engine"



1. Crear credenciales Github: githubuser
1. Crear credenciales docker-hub: dockerhub
1. Crear credenciales gke
    * Tipo: Secret File
    * Project Name: gke

1. Crear cluster de kubernetes
    gcloud config set project devops202101
    gcloud container clusters create devops202101 --num-nodes=3 --machine-type=e2-small --zone us-east4-c --cluster-version 1.18

1. Crear job:

```grovy         
 pipeline {
            
    agent any

    environment {
        PROJECT_ID = 'devops202101'
        CLUSTER_NAME = 'devops202101'
        LOCATION = 'us-east4-c'
        CREDENTIALS_ID = 'gke'
    }

    stages {

        stage('clone') {
            agent {
                docker { image 'maven:3.6.3-openjdk-11-slim' }
            }
            

            steps {

                git credentialsId: 'githubuser',
                    url: 'https://github.com/mzegarras/WebFluxCI.git',
                    branch: 'main'
            }
        }
    }
}
```





```grovy    
pipeline {
            
    agent any

    environment {
        PROJECT_ID = 'devops202101'
        CLUSTER_NAME = 'devops202101'
        LOCATION = 'us-east4-c'
        CREDENTIALS_ID = 'gke2'
    }

    stages {
        
       
            
        stage('Deploy to GKE') {
             agent {
                docker { 
                    image 'google/cloud-sdk:latest' 
                }
                
            }
            environment {
                CLOUDSDK_CONFIG="/tmp"
                KUBECONFIG="~/.kube"
            }

             steps {

                withCredentials([[$class: 'FileBinding', credentialsId: 'gke2', variable: 'GOOGLE_APPLICATION_CREDENTIALS']]) {
                sh 'echo "${GOOGLE_APPLICATION_CREDENTIALS}"' // returns ****
                sh 'gcloud auth activate-service-account --key-file $GOOGLE_APPLICATION_CREDENTIALS'
                sh 'gcloud container clusters get-credentials $CLUSTER_NAME --zone $LOCATION --project $PROJECT_ID'
                sh 'kubectl get nodes'
                
                }
            }

        }
    }
}
```
