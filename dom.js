
function getTextArea(argument) {
  var mainText = document.getElementById("userinput").value;
  mainText = mainText.split(" ");
  console.log(mainText);
  selectedLanguage();
}

function selectedLanguage(argument) {
  var dropDownMenuIndex = document.getElementById("dropDownMenu").selectedIndex;
  var dropDownOptions = document.getElementById("dropDownMenu").options;

  if (dropDownMenuIndex === 0) {
    console.log(translate.getGreekWord());
  } else if (dropDownMenuIndex === 1) {
    console.log(translate.getJapaneseWord());
  } else if (dropDownMenuIndex === 2) {
    console.log(translate.getLatinWord());
  };
}
