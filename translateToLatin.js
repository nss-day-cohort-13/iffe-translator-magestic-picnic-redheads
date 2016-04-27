var translate = (function(translate){
	var latinLexicon = {
		"i": "Ego",
		"know": "scitis",
		"you're": "tu",
		"you": "vos",
		"are": "sunt",
		"canadian": "Canadian",
		"but": "sed",
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
	return translate;
})(translate);
