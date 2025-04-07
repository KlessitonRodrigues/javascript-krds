import { createRoot } from "react-dom/client";

const startScreenRecord = async (audio: boolean, ext: string) => {
  return new Promise<Blob>(async (resolve) => {
    let mediaRecorder;
    let recordedChunks: BlobPart[] = [];

    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        frameRate: 60,
        channelCount: 2,
      },
      audio,
    });

    mediaRecorder = new MediaRecorder(stream, { mimeType: `video/${ext}` });
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) recordedChunks.push(event.data);
    };
    mediaRecorder.onstop = () => {
      resolve(new Blob(recordedChunks, { type: `video/${ext}` }));
    };
    mediaRecorder.start();
  });
};

const saveMediaFile = (blob: Blob, ext: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `recorded_video.${ext}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const App = () => {
  const onScreenRecord = async () => {
    const extension = "mp4";
    const blob = await startScreenRecord(true, extension);
    saveMediaFile(blob, extension);
    const video = document.getElementById("video-stream") as HTMLVideoElement;
    video.src = URL.createObjectURL(blob);
    video.controls = true;
    video.play();
  };

  return (
    <div>
      <video id="video-stream" width={800} height={600} />
      <button type="button" onClick={onScreenRecord}>
        Start Screen Record
      </button>
    </div>
  );
};

const rootEl = document.getElementById("root");
if (rootEl) createRoot(rootEl).render(<App />);

/*
const startScreenRecord = async () => {
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
      console.log("Screen Capture API not supported.");
    }
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        frameRate: 60,
      },
      audio: true,
    });

    const videoStream = document.getElementById(
      "video-stream"
    ) as HTMLVideoElement;
    if (!videoStream) return;
    videoStream.srcObject = stream;
    videoStream.play();

    const chunks: BlobPart[] = [];
    const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });

    recorder.ondataavailable = (ev) => {
      console.log(ev);

      ev.data.size > 0 && chunks.push(ev.data);
    };
  } catch (err) {
    console.error("Error: " + err);
  }
};

const saveScreenCapture = (chunks: BlobPart[]) => {
  const blob = new Blob(chunks, { type: "video/webm" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "recording.webm";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

*/
