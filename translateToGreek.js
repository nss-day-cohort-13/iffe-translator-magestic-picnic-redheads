var translate = (function(translate){
  var greekLexicon = {
    "happy": "Χαρούμενα",
    "birthday": "Γενέθλια",
    "now": "τώρα",
    "you are":"είστε",
    "old":"παλιός", "mothers":
    "Μητέρα", "day": "Hμέρα",
    "to": "να",
    "the": "ο",
    "best": "καλύτερος",
    "dog": "μαμά",
    "in": "σε",
    "world": "κόσμος",
    "valentines": "Βαλεντίνος",
    "be": "είναι",
    "mine": "ορυχείο",
    "and": "και",
    "chill": "ψύχρα"};

  translate.getGreekWord = function(){
    return greekLexicon;
  };
  return translate;
})(translate);
