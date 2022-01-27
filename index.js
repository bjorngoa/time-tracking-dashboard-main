
/* vars for daily */
const workHrsDaily = document.getElementById("work");

const lastWeekWorkDaily = document.getElementById("lastWeekWork")

const dailyBtn = document.getElementById("daily-btn")

const playHrsDaily = document.getElementById("play")

const lastWeekPlay = document.getElementById("lastWeekPlay")

const studyHrsDaily = document.getElementById("study")

const lastWeekStudy = document.getElementById("lastWeekStudy")

const exerciseHrsDaily = document.getElementById("exercise")

const lastWeekExercise = document.getElementById("lastWeekExercise")

const socialHrsDaily = document.getElementById("social")

const lastWeekSocial = document.getElementById("lastWeekSocial")

const selfCarehrsDaily = document.getElementById("selfCare")

const lastWeekSelfCare = document.getElementById("lastWeekSelfCare")

/* Daily btn */


dailyBtn.addEventListener("click", function() {
    workHrsDaily.innerHTML = `
        5hrs
    `
    lastWeekWorkDaily.innerHTML = `
    Previous - 7hrs
    `
    playHrsDaily.innerHTML = `
        1hrs
    `
    lastWeekPlay.innerHTML = `
    Previous - 2hrs
    `
    studyHrsDaily.innerHTML = `
        0hrs
    `
    lastWeekStudy.innerHTML = `
    Previous - 1hr
    `
    exerciseHrsDaily.innerHTML = `
        1hr
    `
    lastWeekExercise.innerHTML = `
    Previous - 1hr
    `
    socialHrsDaily.innerHTML = `
        1hr
    `

    lastWeekSocial.innerHTML = `
    Previous - 3hrs
    `

    selfCarehrsDaily.innerHTML = `
        0hrs
    `

    lastWeekSelfCare.innerHTML = `
    Previous - 1hr
    `
})






/* Report for
  Jeremy Robson

  Daily
  Weekly
  Monthly

  Work
  5hrs <!-- daily -->
  Previous - 7hrs <!-- daily -->
  32hrs <!-- weekly -->
  Previous - 36hrs <!-- weekly -->
  103hrs <!-- monthly -->
  Previous - 128hrs <!-- monthly -->

  Play
  1hr <!-- daily -->
  Previous - 2hrs <!-- daily -->
  10hrs <!-- weekly -->
  Previous - 8hrs <!-- weekly -->
  23hrs <!-- monthly -->
  Previous - 29hrs <!-- monthly -->

  Study
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 7hrs <!-- weekly -->
  13hrs <!-- monthly -->
  Previous - 19hrs <!-- monthly -->

  Exercise
  1hr <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 5hrs <!-- weekly -->
  11hrs <!-- monthly -->
  Previous - 18hrs <!-- monthly -->

  Social
  1hr <!-- daily -->
  Previous - 3hrs <!-- daily -->
  5hrs <!-- weekly -->
  Previous - 10hrs <!-- weekly -->
  21hrs <!-- monthly -->
  Previous - 23hrs <!-- monthly -->

  Self Care
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  2hrs <!-- weekly -->
  Previous - 2hrs <!-- weekly -->
  7hrs <!-- monthly -->
  Previous - 11hrs <!-- monthly -->
 */