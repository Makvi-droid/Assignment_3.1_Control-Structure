function checkDay() {
  let num = parseInt(prompt("Enter a number (1-7):"));

  switch (num) {
    case 1:
      alert("Today is Monday");
      break;
    case 2:
      alert("Today is Tuesday");
      break;
    case 3:
      alert("Today is Wednesday");
      break;
    case 4:
      alert("Today is Thursday");
      break;
    case 5:
      alert("Today is Friday");
      break;
    case 6:
      alert("Today is Saturday");
      break;
    case 7:
      alert("Today is Sunday");
      break;
    default:
      // Part 1: ASCII "I LOVE YOU" with height 10
      let asciiLove = `
**       **   *********   **           **    *********     **       **    *********   **     **     **     *********
 **     **    **          **           **    **            ** **    **    **          **     **     **     **     **
  **   **     **          **           **    **            **  **   **    **          **     **     **     **      **
   ** **      **          **           **    **            **   **  **    **          **     **     **     **     **
    ***       *********   **           **    *********     **    ** **    *********   **     **     **     ********
   ** **      **          **           **    **            **     ****    **          **     **     **     **
  **   **     **          **           **    **            **      ***    **          **     **     **     **
 **     **    **          **           **    **            **       **    **          **     **     **     **
**       **   **          **           **    **            **       **    **          **     **     **     **
**       **   *********   *********    **    *********     **       **    *********   *********     **     **
`;
      alert(asciiLove);

      // Part 2: open new window with group member pictures
      var myWindow = window.open("", "", "width=600,height=600");
      myWindow.document.write(`
        <html>
          <head>
            <title>Group Members</title>
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <h2 class="text-2xl font-bold mb-4">Group Members</h2>
            <div class="grid grid-cols-2 gap-4">
              <img src="https://via.placeholder.com/200" class="rounded-xl shadow-lg">
              <img src="https://via.placeholder.com/200" class="rounded-xl shadow-lg">
              <img src="https://via.placeholder.com/200" class="rounded-xl shadow-lg">
              <img src="https://via.placeholder.com/200" class="rounded-xl shadow-lg">
            </div>
          </body>
        </html>
      `);
      myWindow.blur();
      break;
  }
}
