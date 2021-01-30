#!/bin/bash
echo "update general"
dnf update -y
echo "add repo"
dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
echo "docker installing"
dnf install docker-ce --nobest -y
echo "docker starting and enabled "
systemctl start docker
systemctl enable docker
echo "add user to docker group"
usermod -aG docker "${SUDO_USER}"
echo "docker compose download"
curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
echo "docker compose permission & link"
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
chown "${SUDO_USER}:docker" /var/run/docker.sock

echo "Install git"
 sudo dnf install git-all -y
 sudo dnf install nano -y