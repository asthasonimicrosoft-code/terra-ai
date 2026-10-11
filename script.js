
const activities = {
    walking: {
        name: "Mindful Nature Walk",
        steps: "Walk safely and notice five things around you."
    },
    gardening: {
        name: "Gardening Time",
        steps: "Water your plants or grow a new seed."
    },
    birds: {
        name: "Birdwatching",
        steps: "Find a quiet place and listen for bird calls."
    },
    mindfulness: {
        name: "Outdoor Mindfulness",
        steps: "Notice the breeze, natural sounds, and your surroundings."
    }
};

document.getElementById("generate").addEventListener("click", async () => {
    const mood = document.getElementById("mood").value.trim();
    const time = document.getElementById("time").value;
    const choice = document.getElementById("activity").value;
    const result = document.getElementById("result");

    if (!mood) {
        result.textContent = "Please tell us how you are feeling first.";
        return;
    }

    result.textContent = "Finding your outdoor activity...";

    let selected = choice;

    if (selected === "any") {
        const options = Object.keys(activities);
        selected = options[Math.floor(Math.random() * options.length)];
    }

    // Try an open-weight model using Transformers.js.
    try {
        const { pipeline } = await import(
            "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.7.2"
        );

        const classifier = await pipeline(
            "zero-shot-classification",
            "Xenova/mobilebert-uncased-mnli"
        );

        const labels = Object.keys(activities);
        const prediction = await classifier(mood, labels);

        if (choice === "any" && prediction.labels.length) {
            selected = prediction.labels[0];
        }
    } catch (error) {
        // The local recommendation still works without the AI model.
        console.log("Using local recommendation instead.");
    }

    const plan = activities[selected];

    result.innerHTML = `
        <h3>🌿 ${plan.name}</h3>
        <p>${plan.steps}</p>
        <p><strong>Available time:</strong> ${time} minutes</p>
        <p><strong>Your mood:</strong> ${mood}</p>
        <p>Now put your phone away and enjoy the outdoors!</p>
    `;
});

// Light and dark mode
document.getElementById("theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    document.getElementById("theme").textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
```
