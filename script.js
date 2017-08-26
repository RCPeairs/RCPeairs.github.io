//script.js

var numWords;
var numSentences;
var numSpaces;
var aveWordsPerSentence;
var results;
var i;
var punctuation = ".!? ";

function init() {
    results = document.getElementById("results");
}

function statButton(e) {
    console.log('in statbutton');
    console.log(e);
    numWords = 0;
    numSentences = 0;
    numSpaces = 0;
    aveWordsPerSentence = 0;
    i = 0;

processText:
    while (i < inputText.value.length) {

processNonText:
        while (punctuation.indexOf(inputText.value[i]) >= 0) {
            if (inputText.value[i] == " ") {
             numSpaces++;
            }
            i++;
            if (i >= inputText.value.length) {
                    break processText;
            }
        }

        //character detected start sentence loop
        numSentences++;
sentenceLoop:
        while (true) {
            while (punctuation.indexOf(inputText.value[i]) < 0) {
                // word loop
                i++;
                if (i >= inputText.value.length) {
                    numWords++;
                    break processText;
                }
            }
            numWords++;

            while (inputText.value[i] == " ") {
                numSpaces++;
                i++;
                if (i >= inputText.value.length) {
                    break processText;
                }
            }
            if (punctuation.indexOf(inputText.value[i]) >= 0){
                break sentenceLoop;
            }
        }
    }

    if (numSentences > 0) {
        aveWordsPerSentence = parseFloat(numWords / numSentences).toFixed(2);
    }
    results.innerHTML = " Words: "+numWords+",  Sentences: "+numSentences+",  Spaces: "+numSpaces+",  Average words/sentence: "+aveWordsPerSentence;
    return false;
}
