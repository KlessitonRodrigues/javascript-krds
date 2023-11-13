import { google } from "googleapis";

const uploadToDriver = async () => {
  console.log("HELLO");

  const auth = new google.auth.GoogleAuth({
    credentials: {},
    scopes: ["https://www.googleapis.com/auth/drive.file"],
  });

  const driver = google.drive({ version: "v2", auth });

  driver.files.insert({
    media: {
      mimeType: "application/octet-stream",
      body: JSON.stringify({ test: 123 }),
    },
  });
};

uploadToDriver().catch(console.error);
