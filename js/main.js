let keyy = document.querySelectorAll(".container .key");
let h1 = document.querySelector(".all h1");
let all = document.querySelector(".all");
let spanDel = document.querySelector(".all h1 span");

/// when key down then do add playing classname
window.addEventListener("keydown", function (e) {
  let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!audio) return 0;
  audio.currentTime = 0;
  audio.play();
  let keydata = document.querySelector(`.key[data-key='${e.keyCode}']`);

  keydata.classList.add("playing");

  h1.remove();
});
// when key up then do remove playing classname
window.addEventListener("keyup", function (e) {
  let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!audio) return 0;

  let keydata = document.querySelector(`.key[data-key='${e.keyCode}']`);

  keydata.classList.remove("playing");
});

/// when click with mousse do
keyy.forEach((key) =>
  key.addEventListener("click", function (e) {
    let keydata;
    if (e.target == key) {
      keydata = e.target.dataset.key;
      let audio = document.querySelector(`audio[data-key='${keydata}']`);
      audio.currentTime = 0;

      audio.play();
      e.target.classList.add("playing");
    } else {
      keydata = e.target.parentElement.dataset.key;
      let audio = document.querySelector(`audio[data-key='${keydata}']`);
      audio.currentTime = 0;

      audio.play();
      e.target.parentElement.classList.add("playing");
    }
  })
);
/// for transion end then do remove playing classname
keyy.forEach((key) =>
  key.addEventListener("transitionend", function (e) {
    let keydata;
    if (e.target == key) {
      keydata = e.target.dataset.key;

      e.target.classList.remove("playing");
    } else {
      keydata = e.target.parentElement.dataset.key;

      e.target.parentElement.classList.remove("playing");
    }
  })
);

document.addEventListener("click", function (e) {
  if (e.target == spanDel) {
    h1.remove();
  }
});
