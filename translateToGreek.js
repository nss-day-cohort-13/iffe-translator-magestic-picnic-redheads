translate = (function(word){
  var greekLexicon = {
    "happy": "kalo",
  };
  translate.getGreekWord = function(){
    return greekLexicon;
  };
  return word;
})(translate);
