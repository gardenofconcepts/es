# Elasticsearch Demo Cluster

    # max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
    sudo sysctl -w vm.max_map_count=262144

    wget https://download.elastic.co/demos/kibana/gettingstarted/shakespeare_6.0.json
    wget https://download.elastic.co/demos/kibana/gettingstarted/accounts.zip
    wget https://download.elastic.co/demos/kibana/gettingstarted/logs.jsonl.gz
    unzip accounts.zip
    gunzip logs.jsonl.gz
    
    PUT http://localhost:9200/shakespeare/_settings
    {
      "number_of_replicas": 0
    }

    curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/logs/doc/_bulk?pretty' --data-binary @logs.jsonl
