const inputNo = document.getElementById("input-no");
const startBtn = document.getElementById("startBtn");
const displayCount = document.getElementById("displayCount");
const endMsg = document.getElementById("endMsg");
const errorMsg = document.getElementById("errorMsg");
startBtn.onclick = () => {
   errorMsg.style.display = "none";
   inputNo.style.border = "0";
   if (inputNo.value != "" && inputNo.value >= "0" && inputNo.value <= "9") {
      let startingNo = Number(inputNo.value);
      inputNo.value = "";
      endMsg.textContent = "";
      const timeId = setInterval(() => {
         if (startingNo == 0) {
            endMsg.textContent = "Time's Up!";
            clearInterval(timeId);
         }
         displayCount.textContent = startingNo;
         startingNo--;
      }, 1000);
   } else {
      errorMsg.style.display = "block";
      inputNo.style.border = "2px solid red";
   }
};
