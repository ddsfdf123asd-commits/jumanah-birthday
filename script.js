const loading = document.getElementById("loading");
const main = document.getElementById("main");

setTimeout(() => {
  loading.style.display = "none";
  main.style.display = "flex";
}, 3000);

let step = 1;

function nextQuestion() {
  const question = document.getElementById("question");

  if (step === 1) {
    question.textContent = "هل تثقين بصاحب الهدية؟";
    step = 2;
  } else {
    document.getElementById("scene1").innerHTML = `
      <h1>🌸 أهلاً جمانة 🌸</h1>
      <h2>🎤 السؤال الأول</h2>
      <p>وش تشوفين مستقبلك في الإعلام؟</p>
      <button onclick="nextMedia()">التالي</button>
    `;
    document.body.style.background = "#f8c8dc";
  }
}

function nextMedia() {
  document.getElementById("scene1").innerHTML = `
    <h2>🎤 السؤال الثاني</h2>
    <p>إذا صرتي إعلامية، مين أول شخصية تتمنين تسوين معها مقابلة؟</p>
    <button onclick="showBirthday()">إنهاء</button>
  `;
}

function showBirthday() {
  document.getElementById("scene1").innerHTML = `
    <h1>🎆 Happy Birthday 🎆</h1>
    <h2>🎂 جمانة 🎂</h2>
    <p>اضغطي بالأسفل 💌</p>
    <button onclick="showMessage()">اقرئي الرسالة</button>
  `;
}

function showMessage() {
  document.getElementById("scene1").innerHTML = `
    <h1>🎂 Happy Birthday جمانة 🎂</h1>
    <p style="line-height:2">
      إلى الإعلامية المستقبلية جمانة 🌹🤍<br><br>
      كل عام وأنتِ بخير يا صديقتي وأختي جمانة، وأتمنى كل سنة تكونين فيها فرحانة وبخير.<br><br>
      وأتمنى يا رب لك النجاح يا ورعة، وإن شاء الله السنة الجاية ترجعين للخيل، وتكونين إعلامية عشان أناقشك وأطقطق عليك... لا أمزح 😂.<br><br>
      وأتمنى تستمر صداقتنا وأخوتنا بكل خير.<br><br>
      الله يسعدك ويوفقك، ومن نجاح إلى نجاح بإذن الله.<br><br>
      أخوك: عبدالله 🤍
    </p>
  `;
}

document.getElementById("yes").onclick = nextQuestion;
document.getElementById("no").onclick = nextQuestion;