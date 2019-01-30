$.getJSON('https://ipapi.co/json/', function(data) {
  const body = JSON.stringify(data, null, 2);
  $.post("https://us-central1-ip-sender-email.cloudfunctions.net/enviarEmail", body, function (data) {
    console.log(data);
  });
});
