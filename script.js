
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('login-btn').addEventListener('click', function(event) {
           event.preventDefault();
           
            const ageInput = prompt("Enter your age");
            const age = Number(age);

           if (!age || isNaN(ageInput)) {
             alert("Please enter a valid age");
           } else if(age >= 18) {
             console.log("Redirecting to adult.html...");
            window.location.href = "./adult.html";
           } else {
            console.log("Redirecting to kids.html...");
            window.location.href = "./kids.html";
           }
        })
     })