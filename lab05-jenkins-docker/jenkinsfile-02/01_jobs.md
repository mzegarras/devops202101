# JOBS

1. Iniciar jenkins con soporte con docker


1. Verificar plugins:
    "pipeline"
    "Docker Pipeline"
    "Pipeline Maven Integration"
    "Warnings Next Generation"
    "Copy Artifacts"
    "Pipeline Utility Steps"
    "Jacoco"

1. Crear credenciales Github: githubuser
1. Crear credenciales docker-hub: dockerhub

1. Crear job12-java-as-code
    * Crear proyecto del Pipeline
        * Nombre: job12-java-as-code
        * Description: Pipeline as code
        * Pipeline --> Pipeline script --> 
        ```grovy         
            pipeline {
            
                agent none
            
                stages {

                    stage('Build') {
                        agent {
                            docker { image 'maven:3.6.3-openjdk-11-slim' }
                        }
                        

                        steps {

                            git credentialsId: 'githubuser',
                                url: 'https://github.com/mzegarras/WebFluxCI.git',
                                branch: 'main'

                            sh 'mvn -B verify'
                        }

                        post{
                            success {
                                archiveArtifacts artifacts: 'target/lab04-0.0.1-SNAPSHOT.jar', fingerprint: true, onlyIfSuccessful: true
                            }
                        }
                    }
                }
            }
        ```



1. Editar job12-java-as-code y agregar stage('Docker Build')
    ```grovy    
        stage('Docker Build') {
                    agent any
                    steps {

                        script {
                        def props = readProperties file: 'config/dev.env'
                        env.APP = props.APP
                        env.APP_MODULE = props.APP_MODULE
                        env.DOCKER_REPOSITORY= props.DOCKER_REPOSITORY
                        }

                        sh 'echo  $DOCKER_REPOSITORY/$APP-$APP_MODULE'

                        copyArtifacts filter: 'target/*.jar',
                                    fingerprintArtifacts: true,
                                    projectName: '${JOB_NAME}',
                                    flatten: true,
                                    selector: specific('${BUILD_NUMBER}'),
                                    target: 'target';
                        sh "docker build --file ./src/main/docker/Dockerfile --tag $DOCKER_REPOSITORY/$APP-$APP_MODULE:${BUILD_NUMBER} ."
                        sh "docker tag $DOCKER_REPOSITORY/$APP-$APP_MODULE:${BUILD_NUMBER}  $DOCKER_REPOSITORY/$APP-$APP_MODULE:latest"
                    }
                }
    ```        

1. Editar job12-java-as-code y agregar stage('Docker push') 
    ```grovy      
    stage('Docker push') {
        agent any
        
        environment {
                DOCKER_HUB_CREDENTIALS = credentials('dockerhub')
            }
        steps {

            script {
                def props = readProperties file: 'config/dev.env'
                env.APP = props.APP
                env.APP_MODULE = props.APP_MODULE
                env.DOCKER_REPOSITORY= props.DOCKER_REPOSITORY
                }

            sh 'docker login -u ${DOCKER_HUB_CREDENTIALS_USR} -p ${DOCKER_HUB_CREDENTIALS_PSW}'
            sh 'docker push $DOCKER_REPOSITORY/$APP-$APP_MODULE:${BUILD_NUMBER}'
            sh 'docker push $DOCKER_REPOSITORY/$APP-$APP_MODULE:latest'
            sh 'docker logout'

        }
    }     
    ```        

                    