function updateOutput() {
  $("iframe").contents().find("html").html(`
        <html>
        <head>
            <style type="text/css">
                ${$("#cssPanel").val()}
            </style>
        </head>

        <body>
            ${$("#htmlPanel").val()}
        </body>
        </html>
    `);
}

function eventListener() {
  $(".panel").on("keydown", function () {
    updateOutput();
  });
  changedAlert();
}

function changedAlert() {
  $(".panel").on("keypress", function (e) {
    e.preventDefault;
    if (e.which === 13) {
      alert("Your output has been changed!");
    }
  });
}

function toggle() {
  $(document).ready(function () {
    $(".html").click(function () {
      $("#htmlPanel").toggle();
      $(".html").toggle();
    });
  });
  $(document).ready(function () {
    $(".css").click(function () {
      $("#cssPanel").toggle();
      $(".css").toggle();
    });
  });
  $(document).ready(function () {
    $(".javascript").click(function () {
      $("#javascriptPanel").toggle();
      $(".javascript").toggle();
    });
  });
}

updateOutput();
eventListener();
toggle();
