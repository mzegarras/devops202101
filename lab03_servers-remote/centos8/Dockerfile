FROM centos:centos8.3.2011

RUN dnf install -y \
    openssh-server \
    passwd

RUN useradd remote_user && \
    echo "1234" | passwd remote_user  --stdin && \
    mkdir /home/remote_user/.ssh && \
    chmod 700 /home/remote_user/.ssh && \
    ssh-keygen -A 

#COPY remote-key.pub /home/remote_user/.ssh/authorized_keys
COPY remote-key.pub /tmp/remote-key.pub
RUN cat /tmp/remote-key.pub >> /home/remote_user/.ssh/authorized_keys
COPY sshd_config /etc/ssh/sshd_config

RUN chown remote_user:remote_user -R /home/remote_user 

ENTRYPOINT ["/usr/sbin/sshd", "-D"]
