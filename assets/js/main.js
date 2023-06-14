$(function(){

  // header
  $(window).scroll(function(){ //윈도우 스크롤
    curr = $(this).scrollTop();//내현재스크롤
    if(curr >= 20){ //만약에 내 curr가 20보다 크거나 같으면
        $('.header').addClass('on')
    }else{
        $('.header').removeClass('on')
    }
})

// 헤더 메뉴나오게
$('.nav').click(function(e){
  e.preventDefault();
  // .header .menu-area .sub
  headerH = $('.header .group-flex').outerHeight();
  targetH = $(this).siblings('.sub').outerHeight();
  totalH = headerH+targetH;


  if($(this).hasClass('on')){

    $('.nav').removeClass('on');
    $('.header').removeClass('on');
    $('.header-inner').css('height',headerH);
    $('.header .sub').removeClass('on');

  }else{

    $('.nav').removeClass('on');
    $('.header .sub').removeClass('on');
    $(this).addClass('on').siblings('.sub').addClass('on');
    $('.header').addClass('on');
    $('.header-inner').css('height',totalH);

  }

})

// circle-bg
gsap.set('.sc-visual .text-wrap .text span',{
  yPercent:100
})

introShow = gsap.timeline({})

introShow
.to('.sc-visual .text-wrap .text span',{
  yPercent:0,
  stagger:0.1 //순차적으로 실행
})
.from('.sc-visual .img-box',{
  yPercent:20,
  opacity: 0
})


introMotion = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-visual",
    start:"0% 0%",
    end:"100% 0%",
    //markers:true,
    scrub:0.5,
  },

})

introMotion
.addLabel('a')
.to('.circle-bg',{ 'border-radius':'0vw', width:'100vw', height:'100vh' },'a')
.to('.sc-visual .text-wrap:nth-child(2) .text:nth-child(1)',{xPercent:20},'a')
.to('.sc-visual .text-wrap:nth-child(2) .text:nth-child(2)',{xPercent:-50},'a')
.to('.sc-visual .text-wrap:nth-child(4) .text',{xPercent:-150 },'a')

.to('.sc-visual .img-box.img1 .img',{rotation:-20},'a')
.to('.sc-visual .img-box.img2 .img',{rotation:20},'a')
.to('.sc-visual .img-box.img3 .img',{rotation:20},'a')



gsap.to('.sc-visual .img-box img',3,{ //3은 속도
  rotation:-20,
  repeat:-1, //반복,음수로 쓰면 무한반복
  yoyo:true, //자연스럽게 움직임
  ease:'none', //일정한 모션으로 줄려면 ease:'none'으로 뺌

})




//video 
gsap.to('.sc-intro .video-wrap',{
  scrollTrigger:{
    trigger:".sc-intro",
    start:"0% 50%",
    end:"100% 0%",
    //markers:true,
    scrub:0.5,
  },

  'border-radius':'0vw',
  scale:1
})

//
$('.sc-content .flex-area').each(function(i,el){
  gsap.from($(this),{
    scrollTrigger:{
      trigger:el,
      start:"0% 80%",
      end:"100% 0%",
      //markers:true,
    },
    opacity:0
  })
})


//sc-content-0 이미지 움직임
introMotion
.addLabel('a')

.to('.sc-content-0 .img-box.img1',{rotation:-20},'a')
.to('.sc-content-0 .img-box.img2',{rotation:20},'a')

gsap.to('.sc-content-0 .img-box img',3,{
  rotation:-20,
  repeat:-1,
  yoyo:true,
  ease:'none',

})


//sc-content-0 Swiper
contentSlide = new Swiper('.sc-content-0 .swiper',{
  loop:true,
  effect:'fade',
  navigation:{
      nextEl:'.next',
      prevEl:'.prev',
  }
})

// sc-content-1 이미지 움직임
introMotion
.addLabel('a')

.to('.sc-content-1 .group-content .img-box.img1',{rotation:-20},'a')
.to('.sc-content-1 .group-content .img-box.img2',{rotation:20},'a')
.to('.sc-content-1 .group-content .img-box.img3',{rotation:20},'a')
.to('.sc-content-1 .group-content .img-box.img4',{rotation:20},'a')

gsap.to('.sc-content-1 .img-box img',3,{
  rotation:-20,
  repeat:-1,
  yoyo:true,
  ease:'none',

})




//
 contentSlide = new Swiper('.con-slide',{
  slidesPerView:'auto',
  // slidesPerView:2.2, 2개보장되면서 좀더 나와주세요
  spaceBetween:20 //사이간격
  // loop:true,
  // effect:'fade',
  // navigation:{
  //     nextEl:'.next',
  //     prevEl:'.prev',
  // }
  })



  //리스트 클릭하면 텍스트 나오게
  $('.board-item .item').click(function(e){
    e.preventDefault();

    gsap.to(window, {delay:0.5,duration: 0.3,  scrollTo:{y: e.target, offsetY: 110}}); 

    if ($(this).hasClass('on')) { //또클릭
        $(this).removeClass('on').siblings('.sub-text').slideUp();
    } else { //첫클릭
        $('.board-item .item').removeClass('on').siblings('.sub-text').slideUp();
        $(this).addClass('on').siblings('.sub-text').slideDown();
    }

  })
      
  //
  introMotion
  .addLabel('a')

  .to('.sc-text .text-item img',{rotation:-20},'a')

  gsap.to('.sc-text .text-item img',3,{
    rotation:-20,
    repeat:-1,
    yoyo:true,
    ease:'none',

  })




})//지우지마세요


