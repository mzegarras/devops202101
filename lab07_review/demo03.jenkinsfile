
pipeline {
   
   agent none
   
    stages {

        stage('Build') {
            agent {
                docker { image 'maven:3.6.3-openjdk-11-slim' }
            }

            steps {
                sh 'mvn -B verify'
            }

            post{
                always{
                    //junit './target/surefire-reports/*xml'
                    junit allowEmptyResults: true, testResults: 'target/surefire-reports/*.xml'
                    jacoco execPattern: 'target/*.exec', classPattern: 'target/classes', sourcePattern: 'src/main/java', exclusionPattern: 'src/test*'


                    recordIssues enabledForFailure: true, tools: [mavenConsole(), java(), javaDoc()]
                    recordIssues enabledForFailure: true, tool: checkStyle()
                    recordIssues enabledForFailure: true, tool: spotBugs()
                    recordIssues enabledForFailure: true, tool: cpd(pattern: '**/target/cpd.xml')
                    recordIssues enabledForFailure: true, tool: pmdParser(pattern: '**/target/pmd.xml')
                }
                success {
                    archiveArtifacts artifacts: 'target/lab04-0.0.1-SNAPSHOT.jar', fingerprint: true, onlyIfSuccessful: true
                }
            }
        }


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

    }
}