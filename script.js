let startCounter = document.querySelector("#start-counter");
let inputCounter = document.querySelector("#input-counter");
let errorMessage = document.querySelector("#error-message");
let startBox = document.querySelector(".start-box");
let timerNum = document.querySelector(".c100 > span");
let c100 = document.querySelector(".c100");
let success = document.querySelector(".success");
let loading = document.querySelector(".loading");

startCounter.addEventListener("click", (e) => {
  let second = parseInt(inputCounter.value);
  if (isNaN(second)) {
    errorMessage.classList.add("active");
    return;
  }

  errorMessage.classList.remove("active");
  startBox.style.display = "none";
  loading.style.display = "block";
  c100.style.display = "block";
  timerNum.textContent = second;
  let orgsecond = second;
  let last = "p100";

  let timmingid = setInterval((e) => {
    if (last) c100.classList.remove(last);
    if (second <= 0) {
      clearInterval(timmingid);
      loading.style.display = "none";
      success.style.display = "block";
      //  alert("زمان شما تمام شد")
      c100.style.display = "none";
      startBox.style.display = "block";
      inputCounter.value = "";
      c100.classList.remove(last);
      return;
    }

    second--;
    let percent = Math.floor(100 - ((orgsecond - second) / orgsecond) * 100);
    last = `p${percent}`;
    c100.classList.add(`p${percent}`);
    timerNum.textContent = second;
  }, 1000);
});
