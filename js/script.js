
$(function() {
 
    //マウスを乗せたら発動
    $('.button1').hover(function() {
   
      //マウスを乗せたら色が変わる
            $(".js-image").css('opacity', '1')
            $('.js-image').css('transition', '0.5s')

            $(".js-image2").css('opacity', '0')
            $('.js-image2').css('transition', '0.5s')

            $(".js-image3").css('opacity', '0')
            $('.js-image3').css('transition', '0.5s')

            $(".js-image4").css('opacity', '0')
            $('.js-image4').css('transition', '0.5s')
               
    //ここにはマウスを離したときの動作を記述
    }, function() {
   
        $(".js-image").css('opacity', '1')
        $('.js-image').css('transition', '0.5s')

        $(".js-image2").css('opacity', '0')
        $('.js-image2').css('transition', '0.5s')

        $(".js-image3").css('opacity', '0')
        $('.js-image3').css('transition', '0.5s')
        
        $(".js-image4").css('opacity', '0')
        $('.js-image4').css('transition', '0.5s')
           
    });

    $('.button2').hover(function() {
   
        //マウスを乗せたら色が変わる
              $(".js-image").css('opacity', '0')
              $('.js-image').css('transition', '0.5s')
  
              $(".js-image2").css('opacity', '1')
              $('.js-image2').css('transition', '0.5s')
  
              $(".js-image3").css('opacity', '0')
              $('.js-image3').css('transition', '0.5s')
  
              $(".js-image4").css('opacity', '0')
              $('.js-image4').css('transition', '0.5s')
                 
      //ここにはマウスを離したときの動作を記述
      }, function() {
     
          $(".js-image").css('opacity', '0')
          $('.js-image').css('transition', '0.5s')
  
          $(".js-image2").css('opacity', '1')
          $('.js-image2').css('transition', '0.5s')
  
          $(".js-image3").css('opacity', '0')
          $('.js-image3').css('transition', '0.5s')
          
          $(".js-image4").css('opacity', '0')
          $('.js-image4').css('transition', '0.5s')
             
      });

      
    $('.button3').hover(function() {
   
        //マウスを乗せたら色が変わる
              $(".js-image").css('opacity', '0')
              $('.js-image').css('transition', '0.5s')
  
              $(".js-image2").css('opacity', '0')
              $('.js-image2').css('transition', '0.5s')
  
              $(".js-image3").css('opacity', '1')
              $('.js-image3').css('transition', '0.5s')
  
              $(".js-image4").css('opacity', '0')
              $('.js-image4').css('transition', '0.5s')
                 
      //ここにはマウスを離したときの動作を記述
      }, function() {
     
          $(".js-image").css('opacity', '0')
          $('.js-image').css('transition', '0.5s')
  
          $(".js-image2").css('opacity', '0')
          $('.js-image2').css('transition', '0.5s')
  
          $(".js-image3").css('opacity', '1')
          $('.js-image3').css('transition', '0.5s')
          
          $(".js-image4").css('opacity', '0')
          $('.js-image4').css('transition', '0.5s')
             
      });

      $('.button4').hover(function() {
   
        //マウスを乗せたら色が変わる
              $(".js-image").css('opacity', '0')
              $('.js-image').css('transition', '0.5s')
  
              $(".js-image2").css('opacity', '0')
              $('.js-image2').css('transition', '0.5s')
  
              $(".js-image3").css('opacity', '0')
              $('.js-image3').css('transition', '0.5s')
  
              $(".js-image4").css('opacity', '1')
              $('.js-image4').css('transition', '0.5s')
                 
      //ここにはマウスを離したときの動作を記述
      }, function() {
     
          $(".js-image").css('opacity', '0')
          $('.js-image').css('transition', '0.5s')
  
          $(".js-image2").css('opacity', '0')
          $('.js-image2').css('transition', '0.5s')
  
          $(".js-image3").css('opacity', '0')
          $('.js-image3').css('transition', '0.5s')
          
          $(".js-image4").css('opacity', '1')
          $('.js-image4').css('transition', '0.5s')
             
      });
  });


  

$(function () {
    // ローダー終了
    function end_loader() {
      $('.loader').fadeOut(800);
    }
    // テキスト表示
    function show_txt() {
      $('.loader .txt-content .txt').fadeIn(400);
    }
    // テキスト非表示
    function hide_txt() {
      $('.loader .txt-content .txt').fadeOut(400);
    }
  
    // タイマー処理
    $(window).on('load', function () {
      // 処理①
      setTimeout(function () {
        show_txt();
      }, 1000)
      // 処理②
      setTimeout(function () {
        hide_txt();
      }, 3500)
      // 処理③
      setTimeout(function () {
        end_loader();
      }, 4500)
    })
  })
  

   
  $(function () {
    // ローダー終了
    function end_loader() {
      $('.loader').fadeOut(800);
    }
    // テキスト表示
    function show_txt() {
      $('.loader .txt-content .txt').fadeIn(400);
    }
    // テキスト非表示
    function hide_txt() {
      $('.loader .txt-content .txt').fadeOut(400);
    }
   
    // タイマー処理
    $(window).on('load', function () {
      // 処理①
      setTimeout(function () {
        show_txt();
      }, 1000)
      // 処理②
      setTimeout(function () {
        hide_txt();
      }, 3500)
      // 処理③
      setTimeout(function () {
        end_loader();
      }, 4500)
    })
  })

  var $slide = $("#js-slider-1").slick({
    fade: true,
    speed: 1500,
    autoplaySpeed: 400,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
  })



$(function () {
ScrollReveal().reveal('.box', {
  delay: 300, // アニメーション開始までの時間
  duration: 1600, // アニメーション完了にかかる時間
  scale: 2, // 表示前のサイズ 2　なら 2倍
  reset: true // フレームインの度に動かすか
});
});



$(function () {
  
ScrollReveal().reveal('.box2', {

  delay: 800, // アニメーション開始までの時間
  duration: 2000, // アニメーション完了にかかる時間
  reset: true // フレームインの度に動かすか
});
});


$(function () {
ScrollReveal().reveal('.top', {
  delay: 300, // アニメーション開始までの時間
  duration: 1600, // アニメーション完了にかかる時間
  origin: 'top', // 要素がどの方向から来るか
  distance: '50px', // 移動する距離
  reset: true // フレームインの度に動かすか
});
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});




    

    window.onscroll = function(){  
      var scrollTop = window.pageYOffset ;  //スクロール量を代入する
      
         //  ページの高さ：A
         document.documentElement.scrollHeight
         //  画面の高さ：B
         document.documentElement.clientHeight
         //  まだスクロールされていない部分の高さ：C = A - B
         let hiddenHeight =
         document.documentElement.scrollHeight -
         document.documentElement.clientHeight;
         //  スクロール量（px）: D
         let scrollPx = document.documentElement.scrollTop;
         //  スクロール量(%)：E = D / C * 100
         let scrollValue = Math.round((scrollPx / hiddenHeight) * 100);

      if (scrollValue == 0 ) {   //最上部に戻ってきた時
        $(".header_Obj").css('opacity', '0')
        $('.header_Obj').css('transition', '0.5s')
      }
      if (scrollValue > 10) { 
        $(".header_Obj").css('opacity', '1')
        $('.header_Obj').css('transition', '0.5s')
      }
  
    
      }


      //ボタンを押すごとに画面が切り替わる関数
$(function () {

  $(".btn").on("click", function () {
    $(this).closest("div").css("display", "none");
    id = $(this).attr("href");
    $(id).addClass("fit").fadeIn("slow").show();
  });


  $(".return").on("click", function () {
    $(".answer").css("display", "none");
    $(".first_Q").css("display", "block");

    id = $(this).attr("href");
    $(id).addClass("fit").fadeIn("slow").show();
  });


//選択ボタンデータを配列に入れてカウントする関数
    var countA;
    var countB;
    var box =[];
  // $(".btn").each(function(){
  //   $(this).on('click',function(){
  //     var value = $(this).data("value");
  //      box.push(value);

  //     // countA = box.filter(function(x){
  //     //               return x === "a"
  //     //             }).length;
  //     // countB = box.filter(function(y){
  //     //                 return y === "b"
  //     //             }).length;


  //     if( countA > countB ) {
  //       $('#answer_01').css("display",""); //回答1
  //     } 











                  

  });


//結果を出力する関数


//ローディング画面
$(window).on('load',function(){    
  $("#youtube-area").addClass('appear');
$("#loading").addClass('disappear');
});//youtube API

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayer;
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('youtube', {//動画を表示させたいIDを指定
        videoId: 'exf34uhJR2s',//動画のアドレスの指定
        playerVars: {
            playsinline: 1,// インライン再生を行う
            autoplay:1,//自動再生を行う
            fs:0,//全画面表示ボタンを表示しない    
            rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
            controls: 0,// プレーヤー コントロールを表示しない
            modestbranding: 1, // YouTubeロゴの非表示
            iv_load_policy: 3, // アノテーションの非表示
          
             
        },    
        events: {//　イベント
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

//ミュートにしてから再生する設定
function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
  event.target.setPlaybackQuality('highres');
}


//ループ設定
function onPlayerStateChange(event) {
  event.target.setPlaybackQuality('highres');
 if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}



$(function () {
  $(window).on("load", function () {
    setTimeout(() => {
      //1000msかけてフェードアウトする、この場合はローディング背景、文字ごとフェードアウトさせる
      $('.sk-circle').fadeOut(1000);
      //2000ms後に上記のフェードアウトを実行する
    }, 3000);

    setTimeout(() => {
//1000msかけて今回は文字をフェードインする
      $('.sk-circle').fadeIn(1000);
//300ms後に上記のフェードインをを実行する
    }, 300);
  });
});


gsap.to(".sk-circle", {
  xPercent: 100,
  duration: 2,
  // repeat: -1, // 無限に繰り返し
  // repeatDelay: 0.5, // 繰り返し時に0.5秒の待機,
  yoyo: true, // 反転
});












$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
  
  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(2300).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg1').on('animationend', function() { 
  //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
  
  });


  $(window).on('load',function(){
    $("#splash-logo2").delay(200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash2").delay(200).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg1').on('animationend', function() { 
    //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
    });


    $(function() {
      $('.hamburger').click(function() {
          $(this).toggleClass('active');
   
          if ($(this).hasClass('active')) {
              $('.globalMenuSp').addClass('active');
          } else {
              $('.globalMenuSp').removeClass('active');
          } 
        
      });
  });
  //メニュー内を閉じておく
  $(function() {
      $('.globalMenuSp a[href]').click(function() {
          $('.globalMenuSp').removeClass('active');
         $('.hamburger').removeClass('active');
  
      });
    });



  const showFirst = document.getElementById("show-first");
  const showFirst2 = document.getElementById("show-first2");
  const showFirst3 = document.getElementById("show-first3");
  const showFirst4 = document.getElementById("show-first4");
  const showFirst5 = document.getElementById("show-first5");
  const showFirst6 = document.getElementById("show-first6");
  const showFirst7 = document.getElementById("show-first7");

$(function(){
  setInterval(function(){
      $('#show-first').toggleClass('Big');
  },1000);
});


$(function(){
  setInterval(function(){
      $('#show-first2').toggleClass('Big');
  },2000);
});


$(function(){
  setInterval(function(){
      $('#show-first3').toggleClass('Big');
  },3000);
});


$(function(){
  setInterval(function(){
      $('#show-first4').toggleClass('Big');
  },4000);
});


$(function(){
  setInterval(function(){
      $('#show-first5').toggleClass('Big');
  },5000);
});

$(function(){
  setInterval(function(){
      $('#show-first6').toggleClass('Big');
  },6000);
});

$(function(){
  setInterval(function(){
      $('#show-first7').toggleClass('Big');
  },7000);
});