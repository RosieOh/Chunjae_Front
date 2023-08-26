// 외부 스크립트 사용하기 - js 파일

var heading = document.querySelector('#heading');
heading.onclick = function() {
    heading.style.color = 'red';
}