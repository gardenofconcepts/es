# Demo Data

## Bulk API

    wget https://download.elastic.co/demos/kibana/gettingstarted/logs.jsonl.gz
    
    unzip accounts.zip
    gunzip logs.jsonl.gz

    curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/logs/doc/_bulk?pretty' --data-binary @logs.jsonl
