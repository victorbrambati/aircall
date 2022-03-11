var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    var html = "";
    var textVia = "tried to call on ";

    for (var i = 0; i < data.length; i++) {
      html += '<div class="container2">';

      html +=
        '<p class="date">' +
        new Date(data[i].created_at).toLocaleString("default", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }) +
        "</p>";
      html += '<div class="call">';
      html += '<div class="textCall">';
      if (data[i].call_type === "missed") {
        html +=
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff0000" class="bi bi-telephone-x" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/><path fill-rule="evenodd" d="M11.146 1.646a.5.5 0 0 1 .708 0L13 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.707 3.5l1.147 1.146a.5.5 0 0 1-.708.708L13 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 0 1 0-.708z"/></svg>';
      } else if (data[i].call_type === "answered") {
        html +=
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008000" class="bi bi-telephone-plus" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/><path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"/></svg>';
      } else if (data[i].call_type === "voicemail") {
        html +=
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8a2be2" class="bi bi-voicemail" viewBox="0 0 16 16"><path d="M7 8.5A3.49 3.49 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5zm-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm14 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z"/></svg>';
      } else {
        html += '<p class="call_type">' + data[i].call_type + "</p>";
      }
      html += '<div class="fromAndVia">';
      html += '<h2 class="from">' + data[i].from + "</h2>";
      if (data[i].via.length > 10) {
        html +=
          '<p class="via">' +
          textVia +
          data[i].via.substring(0, 10) +
          ".." +
          "</p>";
      } else {
        html += '<p class="via">' + textVia + data[i].via + "</p>";
      }

      html += "</div>";
      html +=
        '<p class="hours">' +
        new Date(data[i].created_at).toLocaleString("default", {
          hour: "numeric",
          minute: "numeric",
        }) +
        "</p>";
      html += "</div>";
      html += "</div>";
      html += "</div>";
    }

    document.getElementById("list").innerHTML = html;
  }
};
xhttp.open("GET", "https://aircall-job.herokuapp.com/activities", true);
xhttp.send();
