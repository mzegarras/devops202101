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

1. Crear job13-netcore-as-code
    * Crear proyecto del Pipeline
        * Nombre: job13-netcore-as-code
        * Description: Pipeline as code
        * Pipeline --> Pipeline script --> 
        ```grovy         
            pipeline {
            
                agent none

                     environment {
                        DOTNET_CLI_HOME = "$WORKSPACE-$JOB_NAME-$BUILD_NUMBER"
                        DOCKER_REPOSITORY= "mzegarra"
                        APP="devops"
                        APP_MODULE="customers-core"
                    }
                    
            
                stages {

                    stage('Build') {
                        

                        agent {
                            docker { image 'mcr.microsoft.com/dotnet/sdk:5.0-alpine' }
                        }
                        

                        steps {

                             git credentialsId: 'githubuser',
                                url: 'https://github.com/mzegarras/NetCore-Demo.git',
                                branch: 'main'

                            sh ''' 
                                cd CustomerApi
                                 dotnet restore
                                dotnet publish -c Release
                            '''

                        }

                        post{
                            success {
                                archiveArtifacts artifacts: 'CustomerApi/bin/Release/net5.0/publish/*.dll', fingerprint: true,onlyIfSuccessful: true
                                archiveArtifacts artifacts: 'CustomerApi/bin/Release/net5.0/publish/*.config', fingerprint: true,onlyIfSuccessful: true
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



                copyArtifacts filter: 'CustomerApi/bin/Release/net5.0/publish/*.dll',
                            fingerprintArtifacts: true,
                            projectName: '${JOB_NAME}',
                            flatten: true,
                            selector: specific('${BUILD_NUMBER}'),
                            target: 'out';
                
                copyArtifacts filter: 'CustomerApi/bin/Release/net5.0/publish/*.config',
                            fingerprintArtifacts: true,
                            projectName: '${JOB_NAME}',
                            flatten: true,
                            selector: specific('${BUILD_NUMBER}'),
                            target: 'out';
                
                
                sh'docker build --file ./CustomerApi/devops/Dockerfile01 --tag $DOCKER_REPOSITORY/$APP-$APP_MODULE:${BUILD_NUMBER} .'
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

            sh 'docker login -u ${DOCKER_HUB_CREDENTIALS_USR} -p ${DOCKER_HUB_CREDENTIALS_PSW}'
            sh 'docker push $DOCKER_REPOSITORY/$APP-$APP_MODULE:${BUILD_NUMBER}'
            sh 'docker push $DOCKER_REPOSITORY/$APP-$APP_MODULE:latest'
            sh 'docker logout'

        }
    }     
    ```        

                    