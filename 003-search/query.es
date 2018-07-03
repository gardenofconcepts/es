DELETE /_all
{}

GET _analyze
{
  "analyzer" : "standard",
  "text" : ["this is a test", "the second text"]
}

GET _analyze
{
  "tokenizer" : "keyword",
  "filter" : ["lowercase"],
  "text" : "this is a test"
}

GET _analyze
{
  "tokenizer" : "keyword",
  "filter" : ["lowercase"],
  "char_filter" : ["html_strip"],
  "text" : "this is a <b>test</b>"
}

GET _analyze
{
  "tokenizer" : "whitespace",
  "filter" : ["lowercase", {"type": "stop", "stopwords": ["a", "is", "this"]}],
  "text" : "this is a test"
}
