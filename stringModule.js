export function wordToLowerCase(string) {
    let result = string[0].toUpperCase();
    result += string.toLowerCase().slice(1);

    return result;
}


export function editSpaces(str) {
    let marks = ['!', ',', '.', '?', ':', ';'];
    let result = "";

    for(let i = 0; i < str.length; i++) {
        if (marks.includes(str[i])) {
            if(str[i-1] == ' ') result = result.slice(0, -1); 
            result += str[i]; 
            if(str[i+1] != ' ') result += ' ';
        } else if(str[i] == ' ' && str[i+1] == ' ') {
            continue;
        } else {
            result += str[i];
        }
    }
    return result;
}

export function countWords(str) {
    let count = 0;

    for(let char of str) {
        if (char == ' ') {
            count++;
        }
    }

    if(str.length > 0) {
        return count+1
    } else return 0;
}

export function countUniqueWords(str) {
    let marks = ['!', ',', '.', '?', ':', ';'];
    let stringWithoutMarks = "";
    let stringArray = [];
    let map = new Map();

    for (let char of str) { // Избавимся от знаков препинания
        if (marks.includes(char)) continue;
        else stringWithoutMarks += char; 
    }

    stringArray = stringWithoutMarks.toLowerCase().split(' ');
    
   for(let word of stringArray) {
    if(!map.has(word)) {
        map.set(word, 1);
    } else {
        map.set(word, map.get(word) + 1);
    }
   }
   console.log(map);
} 

countUniqueWords("Текст, в котором слово текст несколько раз встречается и слово тоже");