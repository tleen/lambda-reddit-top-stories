var request = require('request'),
    _ = require('lodash');

// https://www.reddit.com/r/all/.json
exports.handler = function(event, context){
  console.log(event);
  var options = _.defaults({}, event, {limit : "3"});

  request.get({
    url : 'https://www.reddit.com/r/all/.json',
    qs : { limit : options.limit},
    json : true
  }, function(err, response, body){
    
    if(err) return context.fail(err);

    var returner = _.map(body.data.children, function(child){
      return child.data.title + ' in ' + child.data.subreddit;
    });
     
    if(returner.length === 0) return context.fail('No results');
    return context.succeed(returner);
    
  })
 
}

