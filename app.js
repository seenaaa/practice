const quiz = [
  {
    quesiton: 'ゲーム史上、最も売れたゲーム機は次の内どれ？',
    answers: [
      'スーパファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
  }, {
    quesiton: 'この中でソニーのゲーム機は次の内どれ？',
    answers: [
      'スーパファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct:'プレイステーション2'
  }, {
    quesiton: 'この中で一番最初にできたゲーム機は次の内どれ？',
    answers: [
      'スーパファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct:'スーパファミコン'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex]. quesiton;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  //ここに命令
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  // let alert_str = correct === e.target.textContent ? '正解' : '不正解'

  // window.alert(alert_str)
  if(quiz[quizIndex].correct === e.target.textContent){
   window.alert('正解');
   score++;
  } else{
   window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了。あなたの正解数は' + score + '/' + quizLength + 'です！')
  }
}

const clickHandlerEnglish = (e) => {
  let alert_str = correct === e.target.textContent ? 'ok' : 'woops'

  window.alert(alert_str)
}

const clickHandlers = {
  "en" : clickHandlerEnglish,
  "ja" : clickHandler
}

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => (clickHandlers["ja"])(e) );
  handlerIndex++;
}