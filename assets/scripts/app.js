/*
API_RESPONSE: 
 mean|he|does|second|good|walk|stop|learn|few|miss|most|food|young|carry|would|once|away|made|head|say|really|under|sentence|would|had|big|water|really|together|picture|people|sometimes|do|down|are|some|with|name|with|of|without|at|before|can|into|picture|really|their|leave|hand|only|old|did|sound|even|story|which|set|be|great|hand|home|quite|later|new|like|boy|begin|group|has|been|around|hear|between|later|men|talk|my|below|light|get|sentence|near|grow|change|between|would|night|different|has|each|father|way|enough|next|let|us|two|head|he|now|oil|each|year|study|us|now|start|the|are|too|house|have|being|take|left|go|day|but|play|line|world|each|take|often|around|page|important|first|light|took|give|tree|too|you|animal|need|found|the|their|first|where|first|eat|hard|than|see|after|think|life|come|may|way|mother|these|was|sea|work|plant|left|light|still|below|that|is|well|tell|before|from|down|small|could|said|also|enough|list|turn|let|live|write|find|talk|another|three|all|which|she|why|it|add|find|back|him|more|does|get|mother|air|found|often|until|when|such|large|like|people|quick|good|other|name|end|can|not|do|very|on|face|them|turn|run|page|before|oil|quick|right|land|there|for|to|play|big|go|him|children|place|sometimes|miss|look|how|almost|sometimes|of|came|your|down|them|state|along|place|up|book|city|saw|help|who|took|hard|every|new|it's|seem|year|should|point|need|all|later|read|just|time|time|all|four|story|second|line|as|same|but|why|white|any|know|sound|second|much|began|men|page|have|right|point|quick|different|every|play|idea|follow|never|say|life|letter|even|man|girl|home|one|family|was|help|young|last|open|mile|mean|my|still|because|earth|song|they|and|study|car|see|such|call|only|what|the|left|start|don't|together|or|look|day|for|must|change|turn|feet|read|spell|while|live|were|kind|say|her|almost|hear|they|found|being|out|any|find|story|learn|important|eat|our|own|only|such|after|mother|very|me|school|use|more|cut|with|eye|don't|stop|different|night
 */


const API_RESPONSE = "mean|he|does|second|good|walk|stop|learn|few|miss|most|food|young|carry|would|once|away|made|head|say|really|under|sentence|would|had|big|water|really|together|picture|people|sometimes|do|down|are|some|with|name|with|of|without|at|before|can|into|picture|really|their|leave|hand|only|old|did|sound|even|story|which|set|be|great|hand|home|quite|later|new|like|boy|begin|group|has|been|around|hear|between|later|men|talk|my|below|light|get|sentence|near|grow|change|between|would|night|different|has|each|father|way|enough|next|let|us|two|head|he|now|oil|each|year|study|us|now|start|the|are|too|house|have|being|take|left|go|day|but|play|line|world|each|take|often|around|page|important|first|light|took|give|tree|too|you|animal|need|found|the|their|first|where|first|eat|hard|than|see|after|think|life|come|may|way|mother|these|was|sea|work|plant|left|light|still|below|that|is|well|tell|before|from|down|small|could|said|also|enough|list|turn|let|live|write|find|talk|another|three|all|which|she|why|it|add|find|back|him|more|does|get|mother|air|found|often|until|when|such|large|like|people|quick|good|other|name|end|can|not|do|very|on|face|them|turn|run|page|before|oil|quick|right|land|there|for|to|play|big|go|him|children|place|sometimes|miss|look|how|almost|sometimes|of|came|your|down|them|state|along|place|up|book|city|saw|help|who|took|hard|every|new|it's|seem|year|should|point|need|all|later|read|just|time|time|all|four|story|second|line|as|same|but|why|white|any|know|sound|second|much|began|men|page|have|right|point|quick|different|every|play|idea|follow|never|say|life|letter|even|man|girl|home|one|family|was|help|young|last|open|mile|mean|my|still|because|earth|song|they|and|study|car|see|such|call|only|what|the|left|start|don't|together|or|look|day|for|must|change|turn|feet|read|spell|while|live|were|kind|say|her|almost|hear|they|found|being|out|any|find|story|learn|important|eat|our|own|only|such|after|mother|very|me|school|use|more|cut|with|eye|don't|stop|different|night";

const wordArray = API_RESPONSE.split('|');
const inputField = document.querySelector('.input-div input');
const wordsBoard = document.querySelector('.words-board');
const timerButton = document.getElementById('timer-button');
const reloadButton = document.getElementById('reload-button');
let currentWordIndex = 0;
let startIndex = 0;
let endIndex = 16;
let spanEleIndex = 0;


const startTimer = () => {
    console.log('timer started');


    for (let i = 60; i <= 0; i--) {

        setTimeout(() => {
            timerButton.innerText = i;
        }, 1000);
    }




}
const updateTimer = (from, to) => {
    let current = from;

    setTimeout(function go() {
        timerButton.innerText = `0:${current}`;
        if (current > to) {
            setTimeout(go, 1000);
        }
        current--;
    }, 1000);
}


const renderWords = (startIdx, endIdx) => {
    for (let i = startIdx; i <= endIdx; i++) {
        const spanEle = document.createElement('span');
        spanEle.classList.add('word');
        if (i === startIdx) {
            spanEle.classList.add('highlight');
        }
        spanEle.innerText = wordArray[i] + ' ';
        wordsBoard.append(spanEle);
    }
}

const updateWord = (isCorrectTyped) => {

    currentWordIndex++;
    if (currentWordIndex > endIndex) {
        console.log(startIndex, endIndex, currentWordIndex);
        wordsBoard.innerHTML = '';
        startIndex = currentWordIndex;
        endIndex += 16;
        renderWords(startIndex, endIndex);
    }
    const spanEleList = wordsBoard.querySelectorAll('span');

    spanEleList[currentWordIndex].classList.add('highlight');
    spanEleList[currentWordIndex - 1].classList.remove('highlight');
    spanEleList[currentWordIndex - 1].classList.add(isCorrectTyped ? 'correctTyped' : 'missTyped');
    inputField.value = '';


}

const inputFieldHandler = (e) => {


    const currentWord = wordArray[currentWordIndex] + ' ';
    // console.log(currentWord);

    if (e.data === ' ') {
        if (e.target.value === currentWord) {
            // correct typed word
            updateWord(true);

        } else {
            updateWord(false);

        }
    }

}

renderWords(startIndex, endIndex);
// updateTimer(59, 0);
inputField.addEventListener('input', inputFieldHandler.bind(this));

//  console.log(wordArray);