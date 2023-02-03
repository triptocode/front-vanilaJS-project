// index.html의 head태그안에 main.js 연결을 위한 2번라인 코드 삽입 
// <script defer src="js/main.js"></script>

(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
    const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
    
    $toggleBtn.addEventListener('click', function () {
      toggleElements();
});

  
  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  
  
// 브라우저(=window)크기가 변화될때를 감지하고 offElements()함수를 실행! 
  // 주석코드는 resize 코드테스트로 콘솔에 출력간단히! 해본다. 
  // window.addEventListener('resize', function () {
  //   console.log("리사이즈")
  // });
  
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      offElements();
    }
 });

function offElements() {
  [].forEach.call($toggles, function (toggle) {
    toggle.classList.remove('on');
  });
}


})(window, document);