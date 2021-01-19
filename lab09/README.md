

gcloud deployment-manager deployments create quickstart-deployment --config deploy.yaml
gcloud deployment-manager deployments delete quickstart-deployment --config deploy.yaml


1. Crea la cuenta de servicio:
gcloud iam service-accounts create jenkins --display-name jenkins

1.
export SA_EMAIL=$(gcloud iam service-accounts list --filter="displayName:jenkins" --format='value(email)')
export PROJECT=$(gcloud info --format='value(config.project)')

1. Crea la cuenta de servicio:
gcloud projects add-iam-policy-binding $PROJECT \
    --role roles/storage.admin --member serviceAccount:$SA_EMAIL
gcloud projects add-iam-policy-binding $PROJECT --role roles/compute.instanceAdmin.v1 \
    --member serviceAccount:$SA_EMAIL
gcloud projects add-iam-policy-binding $PROJECT --role roles/compute.networkAdmin \
    --member serviceAccount:$SA_EMAIL
gcloud projects add-iam-policy-binding $PROJECT --role roles/compute.securityAdmin \
    --member serviceAccount:$SA_EMAIL
gcloud projects add-iam-policy-binding $PROJECT --role roles/iam.serviceAccountActor \
    --member serviceAccount:$SA_EMAIL


    gcloud deployment-manager deployments create a-single-vm --template deploy01.jinja \
    --properties zone:us-central1-a

    gcloud deployment-manager deployments create a-single-vm --config deploy.yaml