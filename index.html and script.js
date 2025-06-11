
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ZenTrack - SaaS Sign-Up</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 font-sans">
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center mb-6 text-blue-600">ZenTrack</h1>
      <form id="signupForm" class="space-y-4">
        <input type="text" name="name" placeholder="Full Name" required class="w-full px-4 py-2 border rounded" />
        <input type="email" name="email" placeholder="Email Address" required class="w-full px-4 py-2 border rounded" />
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign Up</button>
      </form>
      <p id="message" class="text-center mt-4 text-green-600 hidden">Sign-up successful! Check your inbox.</p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>