function getQuote() {
    var randNum = Math.floor(Math.random() * 8) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
  }
  
//   quotes 
var quotes = ["Blank", "\If you want to achieve greatness stop asking for permission.\"", "\"Things work out best for those who make the best of how things work out\"", "\"To live a creative life, we must lose our fear of being wrong.\"", "\"If you are not willing to risk the usual you will have to settle for the ordinary.\"", "\"Trust because you are willing to accept the risk, not because it's safe or certain.\"", "\"If you do what you always did, you will get what you always got.\"", "\"Success is walking from failure to failure with no loss of enthusiasm.\"", "\"Just when the caterpillar thought the world was ending, he turned into a butterfly.\"",];

  
  
 