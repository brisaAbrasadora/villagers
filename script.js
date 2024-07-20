const villagers = document.getElementsByClassName("villager");

const resetVillagersBtn = document.getElementById("reset-villagers");
const resetBubbleBtn = document.getElementById("reset-bubble");
const resetVisitBtn = document.getElementById("reset-visit");

const minusBubble = document.getElementById("bubble-counter").children[0];
const counterBubble = document.getElementById("bubble-counter").children[1];
const plusBubble = document.getElementById("bubble-counter").children[2];

const minusVisit = document.getElementById("visit-counter").children[0];
const counterVisit = document.getElementById("visit-counter").children[1];
const plusVisit = document.getElementById("visit-counter").children[2];

function resetCounter(counter) {
  counter.innerText = 0;
}

function substract(counter) {
  if (+counter.innerText > 0) {
    counter.innerText--;
  } else {
    counter.innerText = 0;
  }
}

function add(counter) {
  if (+counter.innerText >= 0) {
    counter.innerText++;
  } else {
    counter.innerText = 0;
  }
}

for (const villager of villagers) {
  villager.addEventListener("click", () => {
    villager.classList.toggle("checked");
  });
}

resetVillagersBtn.addEventListener("click", () => {
  for (const villager of villagers) {
    villager.classList.remove("checked");
  }
});

resetBubbleBtn.addEventListener("click", () => resetCounter(counterBubble));
resetVisitBtn.addEventListener("click", () => resetCounter(counterVisit));

minusBubble.addEventListener("click", () => substract(counterBubble));
minusVisit.addEventListener("click", () => substract(counterVisit));

plusBubble.addEventListener("click", () => add(counterBubble));
plusVisit.addEventListener("click", () => add(counterVisit));



