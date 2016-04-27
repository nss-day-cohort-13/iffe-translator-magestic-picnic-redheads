//  MAIN IIFE:
var translate = (function(){
  var japaneseLexicon = {
    "merry": "メリ", "christmas": "クリスマス"
  };

  return {
	  getJapaneseWord: function(){
	    return japaneseLexicon;
	  }
	};
})();
