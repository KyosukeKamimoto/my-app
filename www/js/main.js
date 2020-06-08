// This is a JavaScript file
'use strict';

// Page init event
{
// 1人用
document.addEventListener('init', (e) => {
  var page = event.target;

  if (page.matches('#home')) {

    page.querySelector('#single-button').onclick = () => {
      document.querySelector('#navigator').pushPage('page2.html');
    };

  } else if (page.matches('#question1-page')) {

     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page3.html');
     };

     page.querySelector('#no-button').onclick = () => {
      document.querySelector('#navigator').pushPage('page3.html');
    };

  } else if (page.matches('#question2-page')) {

    page.querySelector('#yes-button').onclick = () => {
      document.querySelector('#navigator').pushPage('page4.html');
    };

    page.querySelector('#no-button').onclick = () => {
     document.querySelector('#navigator').pushPage('page4.html');
   };

 } else if (page.matches('#question3-page')) {

   page.querySelector('#yes-button').onclick = () => {
    document.querySelector('#navigator').pushPage('page5.html');
   };

   page.querySelector('#no-button').onclick = () => {
    document.querySelector('#navigator').pushPage('page5.html');
   };

 } else if (page.matches('#result-page')) {

     page.querySelector('#back-button').onclick = () => {
      document.querySelector('#navigator').bringPageTop('page1.html');
     };
  }
});

}



// 今日の運勢
// document.addEventListener('init', (e) => {
//   var page = event.target;

//   if (page.matches('#home')) {

//     page.querySelector('#today-button').onclick = () => {
//       document.querySelector('#navigator').pushPage('today-page.html');
//     };

//     const btn = document.getElementById('btn');
//     btn.addEventListener('click', () =>{
//     const results = ['大吉', '中吉', '小吉', '末吉', '凶', '大凶'];
//     btn.textContent = results[Math.floor(Math.random() * results.length)];
// });
//   } else if (page.matches('#today-page')) {
//     page.querySelector('#back-button').onclick = () => {
//       document.querySelector('#navigator').bringPageTop('page1.html');
//     }
//   }
  
// });


  if (ons.platform.isIPhoneX()) {
    document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
    document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
  }