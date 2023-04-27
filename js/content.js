//Formの入力欄を取得
first_btn = document.getElementById("first_btn"); 
secound_btn = document.getElementById("secound_btn");

//配列表示用ulの取得
fb_lists = document.getElementById("fb_list");

//計算回数
max = 30;

//ul要素へ追加する処理を関数化
function addChildData(){
    li = document.createElement("li"); // ulに追加するli要素を作成
    li.appendChild(document.createTextNode(results[i-1])); // li要素にテキストノードを追加する
    fb_lists.appendChild(li); // li要素をul要素に追加する
}

//入力欄に値が入ったら計算を行う
addEventListener("input",()=>{
    console.clear(); // コンソール初期化

    //計算結果配列 初期化
    results = [];

    //ul要素内 初期化
    fb_lists.innerHTML = "";

    //入力値を取得+数値化
    first_num = parseInt(first_btn.value);
    secound_num = parseInt(secound_btn.value);

    //入力値を掛け算
    sum = first_num * secound_num;

    //回数繰り返し、FizzBuzz判定、配列へ格納
    for(i = 1; i <= max; i++){
        if(i % sum == 0){
            results.push(i+":"+"FizzBuzz");
            addChildData();
        }else if(i % parseInt(first_num) == 0){
            results.push(i+":"+"Fizz");
            addChildData();
        }else if(i % parseInt(secound_num) == 0){
            results.push(i+":"+"Buzz");
            addChildData();
        }else{
            results.push(i);
            addChildData();
        }
    }

    console.log(results); // コンソール結果表示
})




