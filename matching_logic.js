//function to print occurrence of character

function display_function(ans) {
    var numberOfTimesOccured = '';
    for (let [key, value] of ans) {
        //console.log(`${value}`);
        numberOfTimesOccured += value;
    }
    console.log(numberOfTimesOccured);
    var total = sumUpThePercentage(numberOfTimesOccured);

    if(total < 80){
        console.log(`Jack matches Jill ${total}%`);
    } else {
        console.log(`Jack matches Jill ${total}%, good match`);
    }  

}

//function for the sum 
function sumUpThePercentage(num) {
    var numString = num.toString();
    var newString = "";
    while (numString.length > 1) { 
        newString += (parseInt(numString[0]) + parseInt(numString[numString.length - 1])).toString(); 
        numString = numString.substring(1, numString.length - 1); 
    }
    newString += numString; 

    if (newString.length > 2) { 
        //console.log(newString)
        return sumUpThePercentage(newString);
    } else {
        //console.log(newString)
        return newString;
    }
}

// function count occurrence of character
function count(str, outp_map) {
    for (let i = 0; i < str.length; i++) {

        let k = outp_map.get(str[i]);
        outp_map.set(str[i], k + 1);


    }
    //calling print function
    display_function(outp_map);
}

//function create map to count character
function count_occurs(matchedPlayers, callback) {
    //checking string is valid or not
    if (matchedPlayers.length === 0) {
        console.log("empty string!, Please enter valid string.");
        return;
    }
    else {
        // map for storing count values
        let ans = new Map();
        for (let i = 0; i < matchedPlayers.length; i++) {
            ans.set(matchedPlayers[i], 0);
        }

        callback(matchedPlayers, ans);

    }

}

//Function for checking whether character is an alphabet...
function checkCharacterIfAlphabet(name){
    if(/[^A-Za-z]/g.test(name)){
        console.log("pass");
    } else {
        console.log("Error, please enter valid alphabets!")
    }
}

//The match game begins...
let playerOne = "Jack 2";
let playerTwo = "Jill";

checkCharacterIfAlphabet(playerOne);
checkCharacterIfAlphabet(playerTwo);


let matchedPlayers = `${playerOne} matches ${playerTwo}`.replaceAll(' ', '');

count_occurs(matchedPlayers, count);
