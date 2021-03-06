GET log*/_count
{}

GET /log*/_mapping
{}

DELETE /logstash-2015.05.20
{}

PUT _template/logstash_2015
{
  "index_patterns": ["logstash-2015.*"],
  "settings": {
    "number_of_shards": 1
  },
  "mappings": {
    "log": {
      "properties": {
        "geo": {
          "properties": {
            "coordinates": {
              "type": "geo_point"
            }
          }
        }
      }
    }
  }
}

GET /logstash-2015.05.18_2/_mapping
{}

GET /logstash-2015.05.18_2/_count
{}
GET /logstash-2015.05.18_2/_search
{}

POST _reindex
{
  "source": {
    "index": "logstash-2015.05.18"
  },
  "dest": {
    "index": "logstash-2015.05.18_2"
  }
}
