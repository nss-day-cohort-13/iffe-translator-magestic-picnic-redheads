
function getTextArea(argument) {
  var mainText = document.getElementById("userinput").value;
  mainText = mainText.split(" ");
  console.log(mainText);
  selectedLanguage();
  // translationText(mainText);
}


//checks to see which language is selected
function selectedLanguage() {
  var dropDownMenuIndex = document.getElementById("dropDownMenu").selectedIndex;

  if (dropDownMenuIndex === 0) {
    console.log(translate.getGreekWord());
    return translate.getGreekWord()
  } else if (dropDownMenuIndex === 1) {
    console.log(translate.getJapaneseWord());
    return translate.getJapaneseWord()
  } else if (dropDownMenuIndex === 2) {
    console.log(translate.getLatinWord());
    return translate.getLatinWord()
  };
}

// function translationText(userText, language) {
//   var userInputObject = userText;
//   var translateToLanguage = language;
//   if () {

//   }
// }
