$(document).ready(function () {
  var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  var topic = '';
  var APIKey = '07db00dc27b8416a97a334f075e61641';
  var startDate = '';
  var endDate = '';

  queryURL += '?' + $.param({
    'api-key': APIKey,
    'q': topic,
    'begin_date': startDate,
    'end_date': endDate 
  });

  $.ajax({
    url: queryURL + topic + APIKey,
    method: 'GET',
  }).then(function (result) {
    console.log(result);
  });
});
