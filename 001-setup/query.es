PUT /products
{}

GET /products
{}

GET /products/_settings
{}

GET /products/_mapping
{}

GET /products/_count
{}

DELETE /products
{}

PUT /products/laptops/1
{
    "manufacturer": "Lenovo",
    "model": "T480s",
    "specifications": {
        "cpu": "i7",
        "memory": "16gb",
        "storage": "512gb ssd",
        "graphic": "intel"
    }
}

PUT /products/laptops/2
{
    "manufacturer": "Dell",
    "model": "XPS13",
    "specifications": {
        "cpu": "i5",
        "memory": "8gb",
        "storage": "512gb",
        "graphic": "intel"
    }
}

GET /products/laptops/1
{}

GET /products/laptops/2/_source
{}

GET /products/laptops/_search
{}

GET /products/laptops/_search?q=Dell
{}

GET /products/_search_shards
{}

 //?verbose=true
GET /products/_segments
{}

POST /products/_flush
{}

POST /products/_flush/synced
{}

GET /products/_stats
{}

GET /_shard_stores
{}

POST /_aliases
{
    "actions": [
        {
            "add": {
                "index": "products",
                "alias": "products_dell",
                "filter": {
                    "term": {"manufacturer" : "dell"}
                }
            }
        }
    ]
}

GET /products_dell/_search
{}

DELETE /products/_alias/products_dell
{}

POST /products/_close
{}

GET /_search_shards
{}

POST /products/_open
{}

PUT /products
{
  "mappings": {
    "laptops": {
      "properties": {
        "model": {
          "type":     "text",
          "analyzer": "standard",
          "filter": ["lowercase"]
        }
      }
    }
  }
}

GET _analyze
{
  "tokenizer" : "whitespace",
  "filter" : ["lowercase", {"type": "stop", "stopwords": ["a", "is", "this"]}],
  "text" : "this is a test",
  "explain": true
}