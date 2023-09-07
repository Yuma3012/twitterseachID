

function displayIndeedURL(){
    // テキスト入力フォームからテキストを取得
    var Prefecture = document.getElementById("prefecture").value;
    var City = document.getElementById("city").value;
    // ベースとなるURL（ここでは例としてGoogleを使用）
    var baseURL = "https://jp.indeed.com";https://twitter.com/search?q=from%3A%40hikakin%20filter%3Amedia%20min_retweets%3A40000&src=typed_query&f=top
    
    // チェックボックス要素を取得
    var checkbox = document.getElementById("checkbox");

    // IDの指定がない場合はブランク
    if (Prefecture){
        var PrefectureURL = "&l=" + Prefecture
    } else {
        var PrefectureURL = ""
    }
    // リツイートの指定がない場合はブランク
    if (City){
        var CityURL = "+" + City
    } else {
        var CityURL = ""
    }
       // チェックボックスの状態に応じて media 変数を設定
    if (checkbox.checked) {
        var short = "+短期";
    } else {
        var short = "";
    }
    // テキストをURLに追加
    var finalURL = baseURL + "/jobs?q=アルバイト"+ short + PrefectureURL +  CityURL ;

    // 結果を表示する<a>要素のhref属性に設定
    var resultLink = document.getElementById("resultLink");
    resultLink.href = finalURL;

    // 新しいimg要素を作成
    var image = document.createElement('img');

// 画像のsrc属性に画像のURLを設定
    image.src = 'indeed.png';
    image.width ='50';
    image.height = '50';

// img要素をa要素に追加
    resultLink.appendChild(image);
    // resultLink.textContent = "twitter.png";

    var displayParagraph = document.getElementById("hidelink");
    displayParagraph.style.display = "block";


}

function displayTownworkTL() {
    // テキスト入力フォームからテキストを取得
    var Prefecture = document.getElementById("prefecture").value;
    var City = document.getElementById("city").value;
    // ベースとなるURL（ここでは例としてGoogleを使用）
    var baseURL = "https://townwork.net/";https://twitter.com/search?q=from%3A%40hikakin%20filter%3Amedia%20min_retweets%3A40000&src=typed_query&f=top
    
    // チェックボックス要素を取得
    var checkbox = document.getElementById("checkbox");

    // IDの指定がない場合はブランク
    if (Prefecture){
        var PrefectureURL = "&l=" + Prefecture
    } else {
        var PrefectureURL = ""
    }
    // リツイートの指定がない場合はブランク
    if (City){
        var CityURL = "+" + City
    } else {
        var CityURL = ""
    }
       // チェックボックスの状態に応じて media 変数を設定
    if (checkbox.checked) {
        var short = "+短期";
    } else {
        var short = "";
    }
    // テキストをURLに追加
    var finalURL = baseURL + "/jobs?q=アルバイト"+ short + PrefectureURL +  CityURL ;

    // 結果を表示する<a>要素のhref属性に設定
    var resultLink = document.getElementById("resultLink");
    resultLink.href = finalURL;

    // 新しいimg要素を作成
    var image = document.createElement('img');

// 画像のsrc属性に画像のURLを設定
    image.src = 'indeed.png';
    image.width ='50';
    image.height = '50';

// img要素をa要素に追加
    resultLink.appendChild(image);
    // resultLink.textContent = "twitter.png";

    var displayParagraph = document.getElementById("hidelink");
    displayParagraph.style.display = "block";


    
}

function displayJob() {
    displayIndeedURL();

}

