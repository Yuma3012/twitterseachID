
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

    // ベースとなるURL（ここでは例としてGoogleを使用）
    var baseURL = "https://twitter.com/";
    // テキストをURLに追加
    var finalURL = baseURL + inputID;

    // 結果を表示する<a>要素のhref属性に設定
    var resultLink = document.getElementById("resultLink");
    resultLink.href = finalURL;
    resultLink.textContent = finalURL;

    var displayParagraph = document.getElementById("hidelink");
            displayParagraph.style.display = "block";


}

function displayTL2(){
    // テキスト入力フォームからテキストを取得
    var inputID = document.getElementById("id").value;

    // ベースとなるURL（ここでは例としてGoogleを使用）
    var baseURL = "https://twitter.com/";
    // テキストをURLに追加
    var url = baseURL + inputID;

    // // 結果を表示する<a>要素のhref属性に設定
    // var resultLink = document.getElementById("resultLink");
    // resultLink.href = finalURL;
    // resultLink.textContent = finalURL;
    // <a>要素を取得
    var linkElement = document.getElementById("resultLink");

    // <a>要素のhref属性を変更
    linkElement.href = url;
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

    // <a>要素にタイムラインの設定を追加
    timelineContainer.innerHTML = '<a class="twitter-timeline" data-width="300" data-height="500" href="' + baseURL + inputID + '">Tweets by ' + inputID + '</a>';
    // data-chrome="noheader nofooter" data-border-color="#ff6347"data-theme="light" '</a>

    // タイムラインを読み込む
    twttr.widgets.load();
}

function displayTweet() {
    displayURL();
    displayTL();
}