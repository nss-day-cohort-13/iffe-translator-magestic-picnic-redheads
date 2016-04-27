
Instructions

Represent a small bilingual lexicon as a Javascript object (see example below) and use it to translate a holiday card message from English into another language. Each member of the team will build a JavaScript module that will convert text entered into an input field to the language that they choose.

{"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}

This is Swedish, so please choose other languages. You can add as many words/translations as you wish so that the user can write more complex holiday cards.

One team member creates a Github project and adds the others as collaborators.
Each team member picks a language.
Your project should have one HTML file that has a textarea, a select element with an option for each language, a button with a label of "Translate", and an empty DOM element into which the translated text will be inserted.
The team must discuss and choose a single variable name that will hold all of the logic that the team creates (i.e. see the Sedan example above).
Each team member will create one JavaScript file that contains one IIFE. Each teammate's IIFE will augment the other teammates' IIFEs.
The lexicon should be a private variable that cannot be accessed by the other team member's module except through an accessor (getter) method.
Each IIFE should expose, in its public interface, a method named translateTo{Language} (e.g. translateToSpanish or translateToFinnish) that accepts a single argument. That argument's value should be the text entered in by the user.
The team should create an extra JavaScript file that handles interacting with the form elements and determining which method should be called.
Optional Bonus 1

Find a way to write your IIFEs so that it doesn't matter whose module gets created first.
Optional Bonus 2

In addition to inserting the translated text into the HTML document, have the browser read the translated text to the user.

Phrases you can translate:

Greek
happy birthday you are old
happy mothers day to the best dog mom in the world
happy valentines day let's netflix and chill

Latin
i know you are canadian but it is the fourth of july merica

Japanese
merry christmas