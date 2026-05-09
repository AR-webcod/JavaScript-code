  // Eid ul Adha Date
    let eidDate = new Date("May 27, 2026").getTime();

    // Timer Function
    let timer = setInterval(function () {

      // Current Time
      let now = new Date().getTime();

      // Difference
      let distance = eidDate - now;

      // Time Calculations
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));

      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
      );

      let minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
      );

      let seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
      );

      // Show Data
      document.getElementById("days").innerHTML = days;

      document.getElementById("hours").innerHTML = hours;

      document.getElementById("minutes").innerHTML = minutes;

      document.getElementById("seconds").innerHTML = seconds;

      // When Countdown Ends
      if (distance < 0) {

        clearInterval(timer);

        document.querySelector(".counter").innerHTML =
          "<h2 class='celebrate'>🎉 Eid ul Adha Mubarak 🎉</h2>";
      }

    }, 1000);

  