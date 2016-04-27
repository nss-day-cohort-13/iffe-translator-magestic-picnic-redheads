translate = (function(word){
	var latinLexicon = {
		"i": "Ego",
		"know": "scitis",
		"you're": "tu",
		"you": "vos",
		"are": "sunt",
		"canadian": "Canadian",
		"but": "but",
		"it's": "Illud",
		"it": "quod",
		"is": "est",
		"the": "quod",
		"fourth": "Fuarto",
		"of": "autem",
		"july": "July",
		"merica": "Merica"

	};
	translate.getLatinWord = function(){
		return latinLexicon;
	};
	return word;
})(translate);
