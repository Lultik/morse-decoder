const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function toMorse(code){
    if(code.join('') === '00') return '';
    if(code.join('') === '10') return '.';
    if(code.join('') === '11') return '-';
}
function morseToText(str){
    for(let key in MORSE_TABLE){
        if(str === key) return (`${MORSE_TABLE[key]}`)
    }
}
function filling(current, accumulator, count){
    for(let i = 0; current.length < count; i++){
        current.push(accumulator[0]);
        accumulator.splice(0,1)
    }
    return current
}

function decode(code) {
    code = code.split('');
    let letter = [];
    let decoding = [];
    let morseCode = '';
    let morseText = '';


    do{
        letter = filling(letter, code, 10);
        let isSpace = /\*/g.test(letter.join(''));

        if(isSpace) morseText = morseText.concat(' ');
            do {
                decoding = [];
                decoding = filling(decoding, letter, 2);
                morseCode = morseCode.concat(toMorse(decoding))
            } while (letter.length !== 0);

        if(!isSpace) morseText = morseText.concat(morseToText(morseCode));

        morseCode = '';

    } while (code.length !== 0);

    return morseText
}

module.exports = {
    decode
};