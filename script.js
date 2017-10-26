function firstLast6(x) {
    if((x[0] === 6 || x[x.length-1] === 6)){
        return true;
    }else{
        return false;
    }
}

function has_23(x) {
    if ((x[0] === 2 || x[0] === 3)) {
        return true;
    }
    if((x[x.length-1] === 2 || x[x.length-1] === 3)) {
        return true;
    }else{
        return false;
    }
}

function fix_23(x){
    if ((x[0] === 2 && x[1] === 3 )){
         x[1] = 0;
    }
    if ((x[1] === 2 && x[2] === 3)){
         x[2] = 0;
    }
        return x;
}

function countYZ(word){
    var x = 0;
    for(var i = 0; i < word.length; i++) {
        if (word[i] == " ") {
            if (word[i - 1] == "Y" || "Z") {
                x += 1;
            }
        }
    }
    if(word[word.length-1] == "Z" || "Z") {
            x += 1;
        }
    return x;
}

function endOther(str, str2){
    var str = str.toLowerCase();
    var str2 = str2.toLowerCase();
    if (str.endsWith(str2)){
        return true;
    }
    if (str2.endsWith(str)){
        return true;
    }else{
        return false;
    }
}

function starOut(word) {
    newWord = "";
    for (var i = 0; i < word.length; i++) {
        if ((word[i - 1] != "*") && (word[i] != "*") && (word[i + 1] != "*")) {
            newWord += word[i];
        }
    }
    return newWord;
}

function getSandwich(word){
    var breadOne = word.indexOf("bread");
    var breadTwo = word.lastIndexOf("bread");
    if (breadOne == -1){
            return "";
    }
    if (breadOne == breadTwo){
        return "";
    }
    return word.substring(breadOne + 5, breadTwo);
}

function canBalance(numbers){
    var sumOne = 0;
    var sumTwo = 0;
    for(var i = 0; i < numbers.length; i++) {
        sumOne += numbers[i];
        for (var y = i + 1; y < numbers.length; y++) {
            sumTwo += numbers[y];
        }
        if (sumOne == sumTwo){
            return true;
        }
        sumTwo= 0;
    }
    return false;
}

function countClumps(numbers){
    var count = 0;
    for (var i = 0; i < numbers.length; i++){
        if(numbers[i] == numbers[i-1] && numbers[i] !== numbers[i+1]){
            count += 1;
        }
    }
    return count;
}


function evenlySpaced(a,b,c){
    var arr = [a,b,c];
    var orderedArray = arr.sort(function (a,b) {return a-b});
    if((orderedArray[0] + orderedArray[2]) / 2 == orderedArray[1]){
        return true;
    }
        return false;
}


function tester() {
    document.getElementById("output").innerHTML = firstLast6([6,3,6]);
    document.getElementById("output2").innerHTML = has_23([4,5]);
    document.getElementById("output3").innerHTML = fix_23([4, 2, 3]);
    document.getElementById("output4").innerHTML = countYZ("day fez");
    document.getElementById("output5").innerHTML = endOther("ABC", "dayabc");
    document.getElementById("output6").innerHTML = starOut("ab*cd");
    document.getElementById("output7").innerHTML = getSandwich("breadjambread");
    document.getElementById("output8").innerHTML = canBalance([2, 1, 1, 1, 4]);
    document.getElementById("output9").innerHTML = countClumps([2, 1, 1, 4, 4]);
    document.getElementById("output10").innerHTML = evenlySpaced(4, 2, 3);


}
