function stripPunctuation(str) {
  var output = '';

  for (var i = 0; i < str.length; i ++) {
    if (',.:'.indexOf(str[i]) === -1) {
      output += str[i];
    }
  }
  return output;
}


function stringReverser(str) {
  var output = '';
  for (var i = str.length - 1; i > -1; i--) {
    output += str[i];
  }
}

function truncate(sentence) {
 var output = '';

 for(var i = 0; i < 15; i++){
   output += sentence[i];
 }
}


function truncate(sentence) {
 var output = '';

 for(var i = 0; i < 15; i++){
   output += sentence[i];
 }
}
function truncateByCount(sentence, count) {
  var output = '';
  return sentence.substr(0,15 )+ '...'

}

function capitalizeEveryOtherLetter(str) {
  var output = '';
  for (var i = 0; i < str.length; i+=2) {
    str.toUpperCase();
  }
}
