# Logstash

    docker run --rm -it \
        -v "$PWD/sampledata:/usr/share/logstash/sampledata" \
        -v "$PWD/pipelines:/usr/share/logstash/pipelines" \
        -e "XPACK_MONITORING_ENABLED=false" \
        docker.elastic.co/logstash/logstash:6.3.0 \
        --path.config /usr/share/logstash/pipelines \
        --config.reload.automatic \
