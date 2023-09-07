
window.addEventListener('load', function () { //pageがロードされた瞬間
    // Twitterウィジェットを読み込む関数
    function loadTwitterWidget() {
        twttr.widgets.load();
    }

    // Twitterウィジェットの読み込みを遅延させる
    setTimeout(loadTwitterWidget, 1000); // ウィジェットスクリプトが読み込まれるまでの遅延時間（1秒）
});


// ボタンをクリックしたときにテキストを表示する関数
function displayText() {
    // テキスト入力フォームからテキストを取得
    var inputText = document.getElementById("text").value;

    // テキストをHTMLページ内に表示
    document.getElementById("displayText").textContent = inputText;

    var displayParagraph = document.getElementById("hidetext");
            displayParagraph.style.display = "block";
}

function displayURL(){
    // テキスト入力フォームからテキストを取得
    var inputID = document.getElementById("id").value;
    var inputRetweets = document.getElementById("retweets").value;
    // ベースとなるURL（ここでは例としてGoogleを使用）
    var baseURL = "https://twitter.com";https://twitter.com/search?q=from%3A%40hikakin%20filter%3Amedia%20min_retweets%3A40000&src=typed_query&f=top
    
    // チェックボックス要素を取得
    var checkbox = document.getElementById("checkbox");

    // IDの指定がない場合はブランク
    if (inputID){
        var IDURL = "from%3A%40" + inputID
    } else {
        var IDURL = ""
    }
    // リツイートの指定がない場合はブランク
    if (inputRetweets){
        var RetweetsURL = "%20min_retweets%3A" + inputRetweets
    } else {
        var RetweetsURL = ""
    }
       // チェックボックスの状態に応じて media 変数を設定
    if (checkbox.checked) {
        var media = "%20filter%3Amedia";
    } else {
        var media = "";
    }
    // テキストをURLに追加
    var finalURL = baseURL + "/search?q="+ IDURL + media + RetweetsURL +"&src=typed_query&f=top";

    // 結果を表示する<a>要素のhref属性に設定
    var resultLink = document.getElementById("resultLink");
    resultLink.href = finalURL;

    // 新しいimg要素を作成
    var image = document.createElement('img');

// 画像のsrc属性に画像のURLを設定
    image.src = 'img/twitter.png';
    image.width ='50';
    image.height = '50';

// img要素をa要素に追加
    resultLink.appendChild(image);
    // resultLink.textContent = "twitter.png";

    var displayParagraph = document.getElementById("hidelink");
    displayParagraph.style.display = "block";


}

function displayTL() {
    // テキスト入力フォームからTwitterのIDを取得
    var inputID = document.getElementById("id").value;

    // ベースとなるURLを設定
    var baseURL = "https://twitter.com/";

    

    // タイムラインを表示するための<a>要素を取得
    var timelineContainer = document.getElementById("twitter-timeline");

    // <a>要素にタイムラインの設定を追加.innerHTML=timelinecontainerの要素をボタンを押したら変更
    timelineContainer.innerHTML = '<a class="twitter-timeline" data-width="300" data-height="500" href="' + baseURL + inputID + '" data-chrome="noheader nofooter" data-border-color="#ff6347" data-theme="light">Tweets by ' + inputID + '</a>';
    // data-chrome="noheader nofooter" data-border-color="#ff6347"data-theme="light" '</a>

    // タイムラインを読み込む
    twttr.widgets.load();
}

function displayTweet() {
    displayURL();
    displayTL();
}

