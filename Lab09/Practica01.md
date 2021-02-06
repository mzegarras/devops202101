
# Lab01

## Editar k8s
1. k8s/clientes.yaml
1. Renombrar: k8s/clientes-nombre-apellido.yaml
1. Cambiar nombres de la líneas 4 y 18: 
    clientes-nombre-apellido

## Editar Jenkinsfile
1. jenkins/clientes-genesis.jenkinsfile
1. Renombrar: jenkins/clientes-genesis-nombre-apellido.jenkinsfile
1. Cambiar línea 31:
    sh 'kubectl apply -f ./Lab09/k8s/clientes-nombre-apellido.yaml' Paso 2.

## Crear job localmente: clientes-genesis
1. Repositorio url: https://github.com/mzegarras/devops202101.git
1. Branch: */main
1. Script Path: ./Lab09/jenkins/clientes-genesis-nombre-apellido.jenkinsfile