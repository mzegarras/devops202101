# DevOps Integration

* [Zoom] ()
* [Syllabus](https://raw.githubusercontent.com/mzegarras/Galaxy-DockerK8S-202009/master/Lab01/Syllabus.pdf)

### Tools

1. [Filezilla](https://filezilla-project.org/) - Transferir archivos
1. [Putty](https://www.putty.org/) - Putty
1. [Docker](https://www.docker.com/) - Docker / Docker-compose

### Google cloud

1. To disabled wifi

    ```console
    networksetup -setv6off Wi-Fi
    networksetup -setv6automatic Wi-Fi
    ```

1. Config project

    ```console
    gcloud auth login
    gcloud projects list
    gcloud projects create devops202101 --region us-east4
    gcloud config set project devops202101
    gcloud compute project-info describe --project devops202101
    ```

1. To enable billing

1. Google's regions and zones

    ```console
    gcloud compute regions list
    gcloud compute zones list
    gcloud compute zones list --filter="region:( us-central1 )"
    ```

1. Default region and zones
    ```console
    gcloud compute project-info describe --project devops202101
    ```
    * Finds keys:  
        * google-compute-default-region
        * google-compute-default-zone

    ```console
    gcloud compute project-info add-metadata \
    --metadata google-compute-default-region=us-east4,google-compute-default-zone=us-east4-c
    ```


1. To create VM

    * List machine-types
        ```console
        gcloud compute machine-types list  --filter="zone:(us-east4-c)"
        ```
        * Search:
            * e2-standard-2
            * e2-standard-4
        
    * List images
        ```console
        gcloud compute images list
        ```
        * Search:
            * centos-8-v20201216

    * Create VM
        ```console
        gcloud compute instances create server01 \
        --image centos-8-v20201216 \
        --machine-type e2-standard-4 \
        --image-project centos-cloud \
        --tags allowci,allowhttp
        ```

1. Crear keypairs

    ```console
    ssh-keygen -f /usr/local/Proyectos/Galaxy/Devops-202101/credentials/jenkins202101 -t rsa
    chmod 400 jenkins202101
    ssh -i "/usr/local/Proyectos/Galaxy/Devops-202101/credentials/jenkins202101" mzegarra@35.225.121.132
    ```

1. Login VM
    ```console
    ssh -i ./credentials/jenkins202101 mzegarra@34.70.109.178
    ```