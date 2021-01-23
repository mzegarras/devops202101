# JOBS
1. Crear job8-as-code
    * Crear proyecto del Pipeline
        * Nombre: job8-as-code
        * Description: Pipeline as code
        * Pipeline --> Pipeline script --> 
        ```bash         
        pipeline {
            // Cualquier agente
            agent none

            stages {
                stage('Build') {
                    steps {
                        echo 'Building..'
                    }
                }
            }
        }
        ```
1. Crear job8-as-code-fromgit
     * Crear proyecto del Pipeline
        * Nombre: job8-as-code-fromgit
        * Description: Pipeline as code from git

1. Crear job9-node-as-code
    * Crear proyecto del Pipeline
        * Nombre: job9-node-as-code
        * Description: Pipeline as code
        * Pipeline --> Pipeline script --> 
        ```Groovy         
        pipeline {
            // imagen node
            agent {
                docker { image 'node:latest' }
            }

            stages {
                stage('Build') {
                    steps {
                        echo 'Building..'
                        sh 'npm version'
                    }
                }
            }
        }
        ```


1. Crear job10-java-as-code
    * Crear proyecto del Pipeline
        * Nombre: job10-java-as-code
        * Description: Pipeline as code
        * Pipeline --> Pipeline script --> 
        ```Groovy         
        pipeline {
            // imagen maven
            agent {
                docker { image 'maven:3.6.3-openjdk-11-slim' }
            }

            stages {
                stage('Build') {
                    steps {
                        sh 'mvn --version'
                    }
                }
            }
        }
        ```

1. Crear job11-netcore-as-code
    * Crear proyecto del Pipeline
        * Nombre: job11-netcore-as-code
        * Description: Pipeline as code
        * Pipeline --> Pipeline script --> 
        ```Groovy         
        pipeline {
            // imagen dotnet
            agent {
                docker { image 'mcr.microsoft.com/dotnet/sdk:5.0' }
            }

            stages {
                stage('Build') {
                    steps {
                        sh 'dotnet --version'
                    }
                }
            }
        }
        ```     