function getActivityIdea() {
    const activityType = document.getElementById("activity-type").value;
    const url = activityType 
        ? `https://apis.scrimba.com/bored/api/activity?type=${activityType}`
        : "https://apis.scrimba.com/bored/api/activity";
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const divContainer = document.getElementById("joke-container");
            const jokePunchline = document.getElementById("joke-punchline");
            
            // Update button text
            // activityButton.querySelector("p").textContent = data.activity;
            divContainer.querySelector("p").textContent = data.activity;
            jokePunchline.textContent = "";
            jokePunchline.classList.add("hidden");
        })
        
}

function getJoke() {
    const jokeSetup = document.getElementById("joke-setup");
    const jokePunchline = document.getElementById("joke-punchline");
    const jokeButton = document.getElementById("btn_joke");
    
    // Reset joke display
    jokeSetup.textContent = "Loading joke...";
    jokePunchline.textContent = "";
    jokePunchline.classList.add("hidden");
    
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            // Display setup immediately
            jokeSetup.textContent = data.setup;
            
            // Show punchline after a delay
            setTimeout(() => {
                jokePunchline.textContent = data.punchline;
                jokePunchline.classList.remove("hidden");
            }, 2000);
            
            // Reset button text
            jokeButton.querySelector("p").textContent = "Tell me another joke!";
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            jokeSetup.textContent = "Error loading joke. Try again!";
            jokeButton.querySelector("p").textContent = "Tell me a joke!";
        });
}

// Event Listeners
document.getElementById("btn_activity").addEventListener("click", getActivityIdea);
document.getElementById("activity-type").addEventListener("change", getActivityIdea);
document.getElementById("btn_joke").addEventListener("click", getJoke);