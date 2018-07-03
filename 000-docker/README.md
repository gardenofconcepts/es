# Docker

## Docker Setup

    apt-get install curl
    curl -fsSL get.docker.com | sh
    systemctl status docker


## Permission

    sudo gpasswd -a $USER docker
    newgrp docker


## Test docker setup

    docker run hello-world

    
## Docker-Compose

    sudo curl -L \
        https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) \
        -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    docker-compose -v

    
# Setup Elasticsearch

    # dazu spaeter mehr...
    sudo sysctl -w vm.max_map_count=262144

    docker run --rm -it -p 127.0.0.1:9200:9200 elasticsearch
    
    # und wenn's probleme macht
    docker run --rm -it -p 127.0.0.1:9200:9200 -e ES_JAVA_OPTS="-Xms512m -Xmx512m" elasticsearch
    curl localhost:9200
