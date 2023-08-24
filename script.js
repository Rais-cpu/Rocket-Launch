// Timer logic has been moved to a function to be reusable.
function updateTimer(date) {
  // setInterval() will update our timer every second.
  // We need to store its ID to be able to stop it later.
  const intervalId = setInterval(() => {
    // Date.now() is shorter and more explicit.
    const now = Date.now();
    const distance = date - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);

  return intervalId;
}

function stopPreviousTimer(intervalId) {
  // Stops our previous timer.
  return clearInterval(intervalId);
}

window.addEventListener("load", () => {
  console.log("hello");
  let currentTimerIntervalId;

  // Add the initial countdown.
  const initialCountDownDate = new Date("26 August, 2023 00:00:00").getTime();
  currentTimerIntervalId = updateTimer(initialCountDownDate);

  // Select the form.
  const form = document.getElementById("date-form");
  console.log(form);

  // Listen to when it is submitted (button pressed).
  form.addEventListener("submit", (event) => {
    console.log("Hello!");
    // Prevent the page from being refreshed.
    event.preventDefault();

    const input = form.querySelector("input");
    // Prevent the timer from being updated if the value is empty.
    if (input.value === "") return;

    const date = new Date(input.value);
    stopPreviousTimer(currentTimerIntervalId);

    currentTimerIntervalId = updateTimer(date);
  });
});
