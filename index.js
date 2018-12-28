// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + ' plays ' + instruments[i];
    arr.push(sentence);
  }
  return arr;
}