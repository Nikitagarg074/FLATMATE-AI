// Scroll to search section
function goToSearch() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Match function (connected to backend)
async function findMatch() {
    const data = {
        name: "User",
        sleep: document.getElementById("sleep").value,
        budget: parseInt(document.getElementById("budget").value),
        routine: document.getElementById("routine").value,
        habits: document.getElementById("habits").value,
        area: document.getElementById("area").value
    };

    const box = document.getElementById("resultBox");
    box.innerHTML = "🔍 Finding match...";

    try {
        const res = await fetch("http://localhost:5000/match", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (!result.bestMatch) {
            box.innerHTML = "❌ No match found";
            return;
        }

        box.innerHTML = `
            <h3>🎉 Match Found</h3>
            <p><b>Name:</b> ${result.bestMatch.name}</p>
            <p><b>Area:</b> ${result.bestMatch.area}</p>
            <p><b>Budget:</b> ₹${result.bestMatch.budget}</p>
            <p><b>Score:</b> ${result.score}%</p>
        `;
    } catch (err) {
        box.innerHTML = "⚠️ Server error";
    }
}