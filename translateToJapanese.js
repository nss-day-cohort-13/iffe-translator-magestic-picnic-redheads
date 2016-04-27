translate = (function(word){
  var japaneseLexicon = {
    "merry": "メリ", "christmas": "クリスマス"
  };
  translate.getJapaneseWord = function(){
    return japaneseLexicon;
  };
  return word;
})(translate);
