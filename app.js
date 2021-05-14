const internetSpeed = document.querySelector(".speed input");
const downloadSize = document.querySelector(".size input");
const calculateButton = document.querySelector(".btn");
const output = document.querySelector(".outputs");

calculateButton.addEventListener("click", function () {
  let size = downloadSize.value * 1000;
  let speed = internetSpeed.value / 8;

  let timeInSeconds = size / speed;

  const days = Math.floor(timeInSeconds / 86400);
  timeInSeconds = timeInSeconds - days * 86400;
  const hour = Math.floor(timeInSeconds / 3600);
  timeInSeconds = timeInSeconds - hour * 3600;
  const minute = Math.floor(timeInSeconds / 60);
  timeInSeconds = timeInSeconds - minute * 60;
  const seconds = Math.floor(timeInSeconds);

  output.classList.remove("hidden");

  if (days >= 1) {
    output.innerHTML = `<h4>
    Your file of ${downloadSize.value}GB will Download in ${days}days ${hour}hour ${seconds}minutes and ${seconds}seconds
  </h4>`;
  } else if (hour === 0) {
    output.innerHTML = `<h4>
    Your file of ${downloadSize.value}GB will Download in ${minute}minutes and ${seconds}seconds
  </h4>`;
  } else {
    output.innerHTML = `<h4>
    Your file of ${downloadSize.value}GB will Download in ${hour}hour ${minute}minutes and ${seconds}seconds
  </h4>`;
  }
});
