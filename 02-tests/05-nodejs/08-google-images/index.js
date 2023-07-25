const http = require("http");

http.get("http://localhost:8080", (res) => {
  let rawHtml = "";
  res.on("data", (chunk) => {
    rawHtml += chunk;
  });
  res.on("end", () => {
    try {
      console.log(rawHtml);
    } catch (e) {
      console.error(e.message);
    }
  });
});
