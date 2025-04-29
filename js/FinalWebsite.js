/* script.js */


/*Task page JavaScript */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("task-form");
    const taskTableBody = document.getElementById("task-table-body");
  
    // Event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission (page reload)
  
  
      const taskName = document.getElementById("task-name").value;
      const category = document.querySelector('input[name="category"]:checked');
      const categoryValue = category ? category.value : "Uncategorized";
  
      
      const isImportant = document.getElementById("priority").checked ? "Yes" : "No";

      const newRow = taskTableBody.insertRow();
  
      // Create cells for task name, category, and priority
      const taskNameCell = newRow.insertCell(0);
      const categoryCell = newRow.insertCell(1);
      const priorityCell = newRow.insertCell(2);
  
      // Insert values into cells
      taskNameCell.textContent = taskName;
      categoryCell.textContent = categoryValue;
      priorityCell.textContent = isImportant;
  
      // Clear the form fields after submission
      form.reset();
    });
  });






  //Timer Page//
  document.addEventListener("DOMContentLoaded", function () {
    let timer;
    let minutes = 25; // Initial work time
    let seconds = 0;
    let isRunning = false;
    let isWorkTime = true; // Switch between work and rest time
  
    const timerDisplay = document.getElementById("timer-display");
    const message = document.getElementById("message");
  
    // Update the timer display
    function updateTimer() {
      timerDisplay.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
  
    // Start the timer
    function startTimer() {
      if (isRunning) return; // Prevent multiple timers running
      isRunning = true;
      
      timer = setInterval(function () {
        if (seconds === 0) {
          if (minutes === 0) {
            // Change to next cycle (work or rest)
            isWorkTime = !isWorkTime;
            minutes = isWorkTime ? 25 : 5;
            message.textContent = isWorkTime ? "Time to work! Stay focused!" : "Time for a break! Relax.";
          } else {
            minutes--;
            seconds = 59;
          }
        } else {
          seconds--;
        }
        updateTimer();
      }, 1000);
    }
  
    // Stop timer
    function stopTimer() {
      clearInterval(timer);
      isRunning = false;
    }
  
    // Reset timer
    function resetTimer() {
      clearInterval(timer);
      isRunning = false;
      minutes = 25;
      seconds = 0;
      updateTimer();
      message.textContent = "";
    }
  
    // Event listeners to buttons
    document.getElementById("start-btn").addEventListener("click", startTimer);
    document.getElementById("stop-btn").addEventListener("click", stopTimer);
    document.getElementById("reset-btn").addEventListener("click", resetTimer);
  
    // Initial setup
    updateTimer();
  });