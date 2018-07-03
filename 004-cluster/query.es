GET /_cluster/health
{}

GET /_cluster/health?level=shards
{}

GET /_cat/health?v
{}

GET /_nodes
{}

GET /_cat/nodes
{}

GET /_stats
{}

GET /_segments?verbose=true
{}

PUT _cluster/settings
{
  "persistent": {
    "cluster.routing.allocation.enable": "none"
  }
}
