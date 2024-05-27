document.addEventListener("DOMContentLoaded", function(){
    var graph_img = bodymovin.loadAnimation({
      container: document.getElementById('graph_img'), // 필수, 애니메이션 들어가는 곳 
      path: './json/graph_img.json', // 필수(url 또는 json파일 다운로드 경로)
      renderer: 'svg', // 필수
      loop: true, // 반복재생
      autoplay: true, // 자동재생
      name: "Hello World", // 이름 지정, 필수 아님
    });
    var loading_bar = bodymovin.loadAnimation({
        container: document.getElementById('loading_bar'), // 필수, 애니메이션 들어가는 곳 
        path: './json/loading_bar.json', // 필수(url 또는 json파일 다운로드 경로)
        renderer: 'svg', // 필수
        loop: true, // 반복재생
        autoplay: true, // 자동재생
        name: "Hello World", // 이름 지정, 필수 아님
      });
      var open_run_festa = bodymovin.loadAnimation({
        container: document.getElementById('open_run_festa'), // 필수, 애니메이션 들어가는 곳 
        path: './json/open_run_festa.json', // 필수(url 또는 json파일 다운로드 경로)
        renderer: 'svg', // 필수
        loop: true, // 반복재생
        autoplay: true, // 자동재생
        name: "Hello World", // 이름 지정, 필수 아님
      });
  })