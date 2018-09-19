// Fun with the New York Times article search API
// out Group Activity
//
// Built by LucyBot. www.lucybot.com
// enter URL for NYT article search api for JSON data formatting
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// 
// enter a valid search string
url += '?' + $.param({
  'api-key': "74b4766c43424650bf1da4d9a28d7855",
  'q': "2018 Emmy",
  'begin_date': "20180901",
  'sort': "newest",
  'fl': "source, byline, headline, pub_date, word_count, web_url"
});

console.log(url);
// use the jQuery ajax call to get data, put in var "result"
// FYI - standard is the var name "response" but either shorten to "res" which is also common
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

  // now you can start working with the data you have retrieved
$('#sourceData').text = result.response.docs[0].source;


}).fail(function(err) {
  throw err;
});

// can log the result data to see object and its elements
// you can also use the Google dev tools to see the contents of result
// you can also log the URL to see the data





