$.getJSON('https://ipapi.co/json/', function(data) {
  let body = JSON.parse(JSON.stringify(data, null, 2));
  console.log(body);
  $.post("https://us-central1-conaprof-a5ea1.cloudfunctions.net/enviarEmail", body, function (data2) {
    console.log(data2);
  });
});
