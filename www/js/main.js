// This is a JavaScript file
'use strict';


// Page init event
// 1人用
document.addEventListener('init', (e) => {
  
  var page = event.target;

  if (page.matches('#home')) {

    page.querySelector('#single-button').onclick = () => {
      document.querySelector('#navigator').pushPage('page2.html');
    };

  } else if (page.matches('#question1-page')) {
     // Q1がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page3.html');
     };
     // Q1がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page3-1.html');
     };

  } else if (page.matches('#question2-page')) {
     // Q1がyes,Q2もyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page4-1.html');
     };
     // Q1がyes,Q2がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page4-2.html');
     };

  } else if (page.matches('#question3-1-page')) {
     // Q1もQ2もQ3もyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page5.html');
     };
     // Q1,Q2がyes,Q3がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page6.html');
     };
// 結果画面
   // y-y-y
  } else if (page.matches('#hiking-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // y-y-n
  } else if (page.matches('#live-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };

  } else if (page.matches('#question3-2-page')) {
     // Q1がyes,Q2がno,Q3がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page7.html');
     };
     // Q1がyes,Q2がno,Q3がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page8.html');
     };
// 結果画面
   // y-n-y
  } else if (page.matches('#trip-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // y-n-n
  } else if (page.matches('#sightseeing-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };

  } else if (page.matches('#question2-1-page')) {
     // Q1がno,Q2がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page4-3.html');
     };
     // Q1がno,Q2もnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page4-4.html');
     };

  } else if (page.matches('#question3-3-page')) {
     // Q1がno,Q2とQ3がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page9.html');
     };
     // Q1がno,Q2がyes,Q3がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page10.html');
     };
// 結果画面
   // n-y-y
  } else if (page.matches('#drinkwalk-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // n-y-n
  } else if (page.matches('#karaoke-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };

  } else if (page.matches('#question3-4-page')) {
     // Q1,Q2がno,Q3がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page11.html');
     };
     // Q1もQ2もQ3もnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('page12.html');
     };
// 結果画面
   // n-n-y
  } else if (page.matches('#cafe-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // n-n-n
  } else if (page.matches('#art-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
  }  
  
});




// 2人用
document.addEventListener('init', (e) => {
  var page = event.target;

  if (page.matches('#home')) {

    page.querySelector('#double-button').onclick = () => {
      document.querySelector('#navigator').pushPage('dbl-page2.html');
    };

  } else if (page.matches('#dbl-question1-page')) {
     // Q1がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page3.html');
     };
     // Q1がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page3-1.html');
     };

  } else if (page.matches('#dbl-question2-page')) {
     // Q1がyes,Q2もyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page4-1.html');
     };
     // Q1がyes,Q2がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page4-2.html');
     };

  } else if (page.matches('#dbl-question3-1-page')) {
     // Q1もQ2もQ3もyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page5.html');
     };
     // Q1,Q2がyes,Q3がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page6.html');
     };
// 結果画面
   // y-y-y
  } else if (page.matches('#park-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // y-y-n
  } else if (page.matches('#sports-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };

  } else if (page.matches('#dbl-question3-2-page')) {
     // Q1がyes,Q2がno,Q3がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page7.html');
     };
     // Q1がyes,Q2がno,Q3がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page8.html');
     };
// 結果画面
   // y-n-y
  } else if (page.matches('#onsen-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // y-n-n
  } else if (page.matches('#shopping-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };

  } else if (page.matches('#dbl-question2-1-page')) {
     // Q1がno,Q2がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page4-3.html');
     };
     // Q1がno,Q2もnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page4-4.html');
     };

  } else if (page.matches('#dbl-question3-3-page')) {
     // Q1がno,Q2とQ3がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page9.html');
     };
     // Q1がno,Q2がyes,Q3がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page10.html');
     };
// 結果画面
   // n-y-y
  } else if (page.matches('#bowring-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // n-y-n
  } else if (page.matches('#karaoke2-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };

  } else if (page.matches('#dbl-question3-4-page')) {
     // Q1,Q2がno,Q3がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page11.html');
     };
     // Q1もQ2もQ3もnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('dbl-page12.html');
     };
// 結果画面
   // n-n-y
  } else if (page.matches('#movie-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // n-n-n
  } else if (page.matches('#cafe2-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
  }  
  
});



// 大人数用
document.addEventListener('init', (e) => {
  var page = event.target;

  if (page.matches('#home')) {

    page.querySelector('#many-button').onclick = () => {
      document.querySelector('#navigator').pushPage('many-page2.html');
    };

  } else if (page.matches('#many-question1-page')) {
     // Q1がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page3.html');
     };
     // Q1がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page3-1.html');
     };

  } else if (page.matches('#many-question2-page')) {
     // Q1がyes,Q2もyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page4-1.html');
     };
     // Q1がyes,Q2がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page4-2.html');
     };

  } else if (page.matches('#many-question3-1-page')) {
     // Q1もQ2もQ3もyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page5.html');
     };
     // Q1,Q2がyes,Q3がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page6.html');
     };
// 結果画面
   // y-y-y
  } else if (page.matches('#travel-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // y-y-n
  } else if (page.matches('#sad-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };

  } else if (page.matches('#many-question3-2-page')) {
     // Q1がyes,Q2がno,Q3がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page7.html');
     };
     // Q1がyes,Q2がno,Q3がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page8.html');
     };
// 結果画面
   // y-n-y
  } else if (page.matches('#park2-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // y-n-n
  } else if (page.matches('#drive-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };

  } else if (page.matches('#many-question2-1-page')) {
     // Q1がno,Q2がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page4-3.html');
     };
     // Q1がno,Q2もnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page4-4.html');
     };

  } else if (page.matches('#many-question3-3-page')) {
     // Q1がno,Q2とQ3がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page9.html');
     };
     // Q1がno,Q2がyes,Q3がnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page10.html');
     };
// 結果画面
   // n-y-y
  } else if (page.matches('#outsports-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // n-y-n
  } else if (page.matches('#insports-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };

  } else if (page.matches('#many-question3-4-page')) {
     // Q1,Q2がno,Q3がyesの場合
     page.querySelector('#yes-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page11.html');
     };
     // Q1もQ2もQ3もnoの場合
     page.querySelector('#no-button').onclick = () => {
       document.querySelector('#navigator').pushPage('many-page12.html');
     };
// 結果画面
   // n-n-y
  } else if (page.matches('#bbq-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
   // n-n-n
  } else if (page.matches('#drink-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').bringPageTop('page1.html');
     };
  }  
  
});



// 今日の運勢
document.addEventListener('init', (e) => {
  var page = event.target;
  
  if (page.matches('#home')) {
    
    page.querySelector('#fortune-button').onclick = () => {
      document.querySelector('#navigator').pushPage('fortune-page.html');
    };
    
  } else if (page.matches('#fortune-page')) {
    
    page.querySelector('#kuzi-button').onclick = () => {
      document.querySelector('#navigator').pushPage('fortune2-page.html');
      
      
    };
    
  } else if (page.matches('#fortune2-page')) {
    
    const kekka = document.getElementById('kekka');
    const cm = document.getElementById('cm');
    const results = [
      {img:'./images/daikichi.png', c:'澄み渡る空、冴える頭脳、サラッサラな髪、今日はすることなすこと上手くいく！何かを決断するなら今日しかないでしょう。人助けをするとさらに運勢は良くなります！'},
      {img:'./images/daikichi.png', c:'澄み渡る空、冴える頭脳、サラッサラな髪、今日はすることなすこと上手くいく！何かを決断するなら今日しかないでしょう。人助けをするとさらに運勢は良くなります！'},
      {img:'./images/chuukichi.png', c:'今日の運勢はまあまあです。信号がすべていいタイミングで青になるレベルで何か一つくらいはいいことが起こりそうです。身の回りの整理整頓をするとさらに運勢は良くなるでしょう。'},
      {img:'./images/chuukichi.png', c:'今日の運勢はまあまあです。信号がすべていいタイミングで青になるレベルで何か一つくらいはいいことが起こりそうです。身の回りの整理整頓をするとさらに運勢は良くなるでしょう。'},
      {img:'./images/syoukichi.png', c:'悪くもないが、良くもない。平凡な一日となりそうです。しかし平凡の中に幸せは隠れているもの。探しに出かけてみてください。平凡な一日が素敵な一日になります。'},
      {img:'./images/syoukichi.png', c:'悪くもないが、良くもない。平凡な一日となりそうです。しかし平凡の中に幸せは隠れているもの。探しに出かけてみてください。平凡な一日が素敵な一日になります。'},
      {img:'./images/kichi.png', c:'今日の運勢はかなりいいです！吉は大吉の次に良いって知っていましたか？ぜひ宝くじでも買ってみてください。100万以下くらいなら多分当たります。責任は取りません。'},
      {img:'./images/kichi.png', c:'今日の運勢はかなりいいです！吉は大吉の次に良いって知っていましたか？ぜひ宝くじでも買ってみてください。100万以下くらいなら多分当たります。責任は取りません。'},
      {img:'./images/suekichi.png', c:'絶妙に微妙すぎて言葉がありません。ただ、どちらかというと悪いので何か世のため人のためにいいことをしましょう。幸せは自分の手でつかむのです。'},
      {img:'./images/kyou.png', c:'今日の運勢はかなり悪いです。できれば外には出ないことをお勧めします。鳥の糞とか降ってきそうです。しかし、家にいても油断は禁物。家事を手伝うことで運勢は良くなるでしょう。'},
      {img:'./images/daikyou.png', c:'悲惨な一日になりそうです。心に冷たい雨が降り注ぎます。おそらく今日が人生最悪の日なので出かけるなら人生最高の日に変えてから出かけてください。ポジティブに捉えるとあまり出ないので逆にラッキーです。'},
    ];

    let n = Math.floor(Math.random() * results.length);
    kekka.src = results[n].img;
    cm.textContent = results[n].c;
    
    page.querySelector('#back-button').onclick = () => {
        document.querySelector('#navigator').resetToPage('page1.html');
    };
  }

});


// 設定画面
document.addEventListener('init', (e) => {
  var page = event.target;

if (page.matches('#home')) {
    
  page.querySelector('#setting-button').onclick = () => {
    document.querySelector('#navigator').pushPage('setting.html');
  };

} else if (page.matches('#setting-page')) {
  
  document.getElementById('play').addEventListener('click', () => {
    const music = document.getElementById('music');
    music.loop = true;
    music.play();
  });
  document.getElementById('stop').addEventListener('click', () => {
    const music = document.getElementById('music');
    music.pause();
    music.currentTime = 0;
  });
}

});



  if (ons.platform.isIPhoneX()) {
    document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
    document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
  }
