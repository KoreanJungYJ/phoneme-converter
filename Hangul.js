
/* 초성, 중성, 종성 배열 생성 */
var choSung = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ",
               "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ",
               "ㅌ", "ㅍ", "ㅎ"];
    
var jungSung = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ",
                "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ",
                "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
    
var jongSung = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ",
                "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ",
                "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ",
                "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

function convert(){
    /* 보여줄 input text 들 */
    let typeText = document.getElementById('typeText');
    let convertedText = document.getElementById('convertedText');
    
    /* 글자들 저장할 변수 */
    let cho, jung, jong;

    /* input 값 테스트 */
    if(typeText.value !== ""){
         console.log(typeText.value);
    }else{
         console.log("-1");
    }

    /* 누를 때 마다 초기화 */
    convertedText.value = "";

    /* 변환 완료 */  
    operating();
}

/* 분리 함수 */
function operating(){
    let comparedVal = typeText.value;
    let uniVal, saveStr;

    /* 16진수 변환 후 출력 */
    function toHex(val){
        return ": " + "0x" + Number(val).toString(16).toUpperCase();
    }

    for(let cnt = 0; cnt < comparedVal.length; cnt++){
        uniVal = comparedVal.charCodeAt(cnt) - 0xAC00;
        saveStr = new Array();

        console.log(uniVal);

        jong = uniVal % 28;
        jung = (( uniVal - jong ) / 28 ) % 21;
        cho  = ((( uniVal - jong ) / 28 ) - jung ) / 21;
        
                                                                /*  - 기본 코드
                                                                saveStr.push(choSung[cho], jungSung[jung]);

                                                                if(jongSung[jong] !== ""){
                                                                    saveStr.push(jongSung[jong]);
                                                                }

                                                                convertedText.value += saveStr + ",";
                                                                */
        convertedText.value += choSung[cho] + toHex(cho) + "\n"
                            + jungSung[jung] + toHex(jung) + "\n";
                            
        if(jongSung[jong] !== ""){
            convertedText.value += jongSung[jong] + toHex(jong) + "\n";
        }

        
    }

                                                                /* 마지막 콤마 분리 - 기본 코드
                                                                convertedText.value = convertedText.value.slice(0, -1);
                                                                */
    
}