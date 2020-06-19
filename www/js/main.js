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
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // y-y-n
  } else if (page.matches('#live-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // y-n-n
  } else if (page.matches('#sightseeing-page')) {

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/sightseeing.png', p:'寺社巡り', c:'日本各地の有名な神社やお城に訪れてみましょう！歴史的建造物に触れることで心が休まるかも！'},
      {img:'./image/solodrive.png', p:'ドライブ', c:'ふらっとドライブにでも出かけてみましょう！音楽ガンガンにするも良し、落ち着いた曲を流すも良し、音楽を流さず運転に集中するも良し。いい気分転換になると思います！'},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // n-y-n
  } else if (page.matches('#karaoke-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // n-n-n
  } else if (page.matches('#art-page')) {

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/art.png', p:'美術館', c:'美術館の雰囲気で心が安らぎつつ、巨匠が生み出した数々の作品に触れて美的感覚も磨かれるという夢のような場所に足を運んでみましょう！'},
      {img:'./image/library.png', p:'図書館', c:'今日のあなたは図書館に行くのがオススメ。あの静かで落ち着いた雰囲気の中でゆっくり読書をするととても癒されていい一日になりそうです！'},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/park.png', p:'テーマパーク', c:'デートスポットの定番！テーマパークに行きましょう！日本には色々なテーマパークがあるのでまだ行ったことのない場所に行ってみると楽しいかも！'},
      {img:'./image/zoo.png', p:'動物園', c:'デートスポットの定番！動物園に行ってみましょう！日本には色々な動物園があるのでまだ行ったことのない場所に行ってみると楽しいかも！かわいい動物達とお友達になっちゃいましょう！'},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // y-y-n
  } else if (page.matches('#sports-page')) {

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/sportswatch.png', p:'スポーツ観戦', c:'スポーツ観戦で盛り上がりましょう！好きなチームが勝ったときのテンションは最高です！負けても気にするな！きっとおそらく多分楽しい、、、'},
      {img:'./image/live2.png', p:'ライブ・フェス', c:'ライブやフェスに参加して騒ごう！思いっきり楽しんでストレス発散！'},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/onsen.png', p:'温泉', c:'カップルでゆっくりするなら温泉がベスト！疲れが吹っ飛びます！上がった後のコーヒー牛乳は絶対に2人で飲みましょう'},
      {img:'./image/suizokukan.png', p:'水族館', c:'今日はデートの定番水族館に行ってみましょう！落ち着きながらも楽しめる素晴らしい空間です。しかし、うんちくを語ると嫌われるので気を付けましょう。'},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // y-n-n
  } else if (page.matches('#shopping-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // n-y-n
  } else if (page.matches('#karaoke2-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/movie.png', p:'映画館', c:'今日は映画館でゆっくりした時間を過ごしましょう！最近は様々なジャンルがあるので見たことのないジャンルに挑戦すると新たな世界が広がるかも…！'},
      {img:'./image/restaurant.png', p:'レストラン', c:'今日はいつもは行けないお洒落なレストランにディナーを食べに行ってみましょう！たまにはこんな日があってもバチは当たりません。素敵な時間を過ごしてください。'},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // n-n-n
  } else if (page.matches('#cafe2-page')) {

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/cafe2.png', p:'カフェ', c:'今日はカフェで友達とおしゃべりする日にしましょう！好みのカフェを見つけて何気ない話。この時間こそがかけがえのない思い出になり、至福のひと時となります！'},
      {img:'./image/sasinomi.png', p:'サシ飲み', c:'今日は友人とサシ飲みに行っちゃいましょう！普段はできないような深い語りができるかもしれません。より絆が強くなりそうです！'},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/trip.png', p:'旅行', c:'もう旅行に行くしかないというような選択…！国内でも国外でも色んな場所へ行ってみんなで思い出を作りましょう！！'},
      {img:'./image/park2.png', p:'テーマパーク', c:'この人数ならテーマパークがオススメ！少年少女に戻って1日楽しんじゃいましょう！かぶり物は必須なので嫌がらずにつけましょうね！！'},
      {img:'./image/camp.png', p:'キャンプ', c:'みんなでキャンプをしましょう！自然の中で新鮮な空気をたっぷり吸って、綺麗な川や満点の星空を眺めて楽しみましょう！'}
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // y-y-n
  } else if (page.matches('#sad-page')) {

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/trip.png', p:'旅行', c:'もう旅行に行くしかないというような選択…！国内でも国外でも色んな場所へ行ってみんなで思い出を作りましょう！！'},
      {img:'./image/park2.png', p:'テーマパーク', c:'この人数ならテーマパークがオススメ！少年少女に戻って1日楽しんじゃいましょう！かぶり物は必須なので嫌がらずにつけましょうね！！'},
      {img:'./image/bokujou.png', p:'牧場', c:'今日は牧場にでも出かけてみましょう！牛や馬などの多くの動物と触れ合うことができ、美味しい食べ物も食べることが出来ます。場所によってはアスレチックもあったりとかなり楽しめると思います！'},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // y-n-n
  } else if (page.matches('#drive-page')) {

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/drive.png', p:'ドライブ', c:'車の中なら雨でも大丈夫！どこかへ美味しいご飯でも食べに行ってみましょう！ですが、雨の日の運転はくれぐれも気を付けてくださいね。'},
      {img:'./image/karaoke3.png', p:'カラオケ', c:'今日はみんなでカラオケに行って盛り上がりましょう！歌に上手さは関係ない！みんなで一緒に楽しめればそれはもう優勝です。'},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // n-y-n
  } else if (page.matches('#insports-page')) {

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/insports.png', p:'屋内スポーツ', c:'スポーツでいい汗を流してリフレッシュ！人数がいないとできないスポーツはたくさんあるのでこの機会に楽しんでみましょう！ボールは友達怖くない。'},
      {img:'./image/nomikai.png', p:'飲み会', c:''},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/bbq.png', p:'バーベキュー', c:'青空の下でBBQは最高です！やっすい肉でも楽しみながら食べると星3つ！今日は今すぐ河川敷に行ってください！ゴミはちゃんと持ち帰ってね！'},
      {img:'./image/fishing.png', p:'釣り', c:''},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
     };
   // n-n-n
  } else if (page.matches('#drink-page')) {

    const result = document.getElementById('result');
    const pl = document.getElementById('pl');
    const text = document.getElementById('text');

    const results = [
      {img:'./image/drink.png', p:'飲み会', c:'今日は飲もう！飲んだくれる前にここでしか言えない暴露話して、笑って、泣いて、飲んで！最＆高！！！<br>※人に迷惑はかけないように。'},
      {img:'./image/takoyaki.png', p:'タコパ', c:''},
      {img:'./image/pizza.png', p:'ピザパ', c:''},
    ];

    let n = Math.floor(Math.random() * results.length);
    result.src = results[n].img;
    pl.textContent = results[n].p;
    text.textContent = results[n].c;

     page.querySelector('#back-button').onclick = () => {
       document.querySelector('#navigator').resetToPage('page1.html');
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
