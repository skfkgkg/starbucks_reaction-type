// 햄버거 메뉴
let menuBtn = document.getElementById("menuBtn")
let sideNav = document.getElementById("sideNav")
let menu = document.getElementById("menu")
sideNav.style.right == "-250px";
menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "https://i.postimg.cc/cJRss6PP/close.png";
    } else {
        sideNav.style.right = "-250px";
        menu.src = "https://i.postimg.cc/j5RRCtb2/menu.png";
    }
}

$(document).ready(function() {

    $("a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

// 햄버거 메뉴 안 메뉴 슬라이드
const acc = document.querySelectorAll('.burger-gnb');

for (let i = 0; i < acc.length; i++) {
  acc[i].firstElementChild.addEventListener('click', accClickHandle);
}

function accClickHandle(e) {
  let trget = e.target;
  let panelCli = trget.nextElementSibling;
  trget.classList.toggle('active');

  if (panelCli.style.height) {
    panelCli.style.height = null;
  }
  else {
    panelCli.style.height = panelCli.scrollHeight + 'px';
  }
}



//돋보기 버튼
const searchEl = document.querySelector('.search');
const searchInput = document.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInput.focus();
});

//focus가 들어가면 class="focused"추가
searchInput.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색');
});

//focus가 나가면 class="focused"제거
searchInput.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
});


//main visual 이미지 순차적으로 등장---------------------------------------------
//gsap.to(요소, 지속시간초단위설정, 옵션)
const fadeEl = document.querySelectorAll('.visual .fade-in');
fadeEl.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    delay : (index + 1) * 0.7, //0.7 , 1.4, 2.1, 2.8
    opacity : 1
  })
});

//공지사항 : swiper
new Swiper(".notice-slide", {
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : true,   // 슬라이드 반복 여부
  direction : 'vertical'
});

//프로모션 : swiper
new Swiper('.promotion-slide', {
  loop: true,
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  centeredSlides: true,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
  },
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true, //클릭여부 설정
  },

  // Navigation arrows
  navigation: {
    nextEl: '.promotion .swiper-next', //이전버튼
    prevEl: '.promotion .swiper-prev', //다음버튼
  },

});

//promotion 토글 버튼
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //슬라이드 숨김
console.log(isHidePromotion);

//토그버튼을 클릭하면
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion; //슬라이드 숨김 값을 반대로 할당

  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});

// 
//awards : swiper
new Swiper('.awards .swiper', {
  loop: true,
  slidesPerView: 2, //한번에 보여줄 슬라이드 갯수
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
  },
  spaceBetween: 30,
  loopAdditionalSlides : 1,

  // Navigation arrows
  navigation: {
    nextEl: '.awards .swiper-next', //이전버튼
    prevEl: '.awards .swiper-prev', //다음버튼
  },

  // 반응형 설정
  breakpoints: { //반응형
    // 화면의 넓이가 1200px 이상일 때
  950: { //pc
    slidesPerView: 4,
    spaceBetween: 40
    },
    // 화면의 넓이가 500px 이상일 때
  768: { //tab
    slidesPerView: 3,
    spaceBetween: 40
    }
  }
});

// -----------------------------------
//document : html 해석
//window : 브라우저창 해석
//lodash문법 :  _.throttle(함수,시간밀리초)
//gsap.to(요소, 지속시간초단위설정, 옵션)

//뱃지
//top버튼
const badgeEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500) {
    //뱃지 숨기기
    gsap.to(badgeEl, 0.6,{
      opacity : 0,
      display : 'none'
    });

    //탑 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x : 0
    });
  } else{
    //뱃지 보이기
    gsap.to(badgeEl, 0.6,{
      opacity : 1,
      display : 'block'
    });

    //탑 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x : 100
    });
  }
},300));

//top버튼을 클릭하면 상단으로 이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7,{
    scrollTo : 0
  })
});


// Scroll Magic-----------------------------------
const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement : spyEl, //보여짐 여부를 감지할 요소를 지정
    triggerHook : 0.8,
  })
  //show넣었다가 뺐다가
  //.setClassToggle(토글할요소, '넣었다뺄 class이름')
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

//둥둥떠다니는 효과
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //몇번 반복할지  설정, -1은 무한반복
    yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut, //gsap easing
    delay: random(0, delay),
  });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',0.5,15);
floatingObject('.floating3',1.5,20);