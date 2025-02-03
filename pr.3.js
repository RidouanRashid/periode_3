function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
  
    if (name1 === "" || name2 === "") {
      alert("Please enter both names!");
      return;
    }
  
    // Generate a random love percentage between 50% and 100% for fun
    const lovePercentage = Math.floor(Math.random() * 51) + 50;
  
    const result = document.getElementById("result");
    result.innerHTML = `💖 ${name1} and ${name2} are ${lovePercentage}% compatible! 💖`;
  
    // Optional: Add some fun emojis based on the percentage
    if (lovePercentage >= 80) {
      result.innerHTML += " 🎉 True Love!";
    } else if (lovePercentage >= 60) {
      result.innerHTML += " 😊 Good Match!";
    } else {
      result.innerHTML += " 😐 Keep Trying!";
    }
  }