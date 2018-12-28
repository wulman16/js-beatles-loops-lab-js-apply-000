// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (i=0; i < musicians.length; i++) {
    arr += `${musicians[i]} plays ${instruments[i]}`;
  }
  return arr;
}