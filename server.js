document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const messageEl = document.getElementById("message");

    if (!name || !email) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const res = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),
        });

        const data = await res.json();
        messageEl.innerText = data.message;
        messageEl.classList.remove("hidden"); // 👈 This shows the message
        messageEl.classList.add("text-green-600"); // Ensure success style is added
    } catch (error) {
        messageEl.innerText = "Signup failed. Please try again.";
        messageEl.classList.remove("hidden");
        messageEl.classList.add("text-red-600");
    }
});



