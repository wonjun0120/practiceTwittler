let elementId = document.querySelector('#user_id');
let elementPassword = document.querySelector('#user_pw');
let elementPasswordConfirm = document.querySelector('#check_pw')
let elementPhoneNum = document.querySelector('#enterPhone');
let elementPhoneNum1 = document.querySelector('#user_phn1');
let elementPhoneNum2 = document.querySelector('#user_phn2');
let elementPhoneNum3 = document.querySelector('#user_phn3');

let elementSubmit = document.querySelector('#submit');

//문자열 길이 확인
function isStrLessThan8(str) {
    return str.value.length < 7
}

//비밀번호 서로 확인
function isPasswordMatches() {
  return elementPassword.value === elementPasswordConfirm.value;
}

//전화번호 3자리 이상인지 확인
function isValidPhn(str) {
    return str.value.length >= 3;
}

//아이디 입력, 8자리 이상인지 확인
elementId.onkeydown = function () {
  let systemMsg = document.querySelector('#idMessage')
    if(!isStrLessThan8(elementId)) {
        systemMsg.textContent = ' 유효한 아이디입니다.';
        systemMsg.className = 'success'
    } 
}

//비밀번호 입력, 8자리 이상인지 확인
elementPassword.onkeydown = function () {
    let systemMsg = document.querySelector('#pwMessage')
    if(!isStrLessThan8(elementPassword)) {
        systemMsg.textContent = ' 유효한 비밀번호입니다.';
        systemMsg.className = 'success'
    } 
}

//비밀번호 입력, 같은지 확인
elementPasswordConfirm.onkeyup = function () {
    let systemMsg = document.querySelector('#checkPwMessage')
    if(isPasswordMatches()) {
        systemMsg.textContent = ' 유효한 비밀번호입니다.';
        systemMsg.className = 'success'
    } 
}
//전화번호 양식 확인
elementPhoneNum.onkeyup = function () {
    let systemMsg = document.querySelector('#phNumMessage')
    if(isValidPhn(elementPhoneNum1) && isValidPhn(elementPhoneNum2) && isValidPhn(elementPhoneNum3)) {
        systemMsg.textContent = ' 유효한 전화번호입니다.';
        systemMsg.className = 'success'
    } 
}

function enterUserInfo(){
    console.log('유저정보 저장')
    let phoneNum = elementPhoneNum1.value + elementPhoneNum2.value + elementPhoneNum3.value;
    let obj = {'id' :  elementId.value, 'pw' : elementPassword.value, 'tel' : phoneNum};
    //console.log(JSON.stringify(obj));

    myStorage.setItem(localStorage.length, JSON.stringify(obj));
}

elementSubmit.onclick = function(){
    console.log('가입버튼 클릭')
    enterUserInfo();
}
/*
1. 아이디 8자리 이상 입력후 지우는 경우 시스템 메시지 변경
    -> 모든 시스템 메시지, 조건 충족하지 않는 경우 추가
2. enterUserInfo 로컬 저장소의 값과 동일한 값이 있는지 없는지 확인후 실행하도록 변경

*/