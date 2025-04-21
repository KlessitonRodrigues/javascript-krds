import youtubedl from "youtube-dl-exec";

const playlistUrl =
  "https://www.youtube.com/watch?v=VMsf78yCtPY&list=PLyc3wU9V53f3jidz5IY2AXKtX4YA_RL-p";

youtubedl(playlistUrl, {
  extractAudio: true,
  audioFormat: "mp3",
  audioQuality: 0, // Best quality (0 is best, 9 is worst)

  // Embed metadata and thumbnail
  embedThumbnail: true,
  addMetadata: true,

  // Use ffmpeg for post-processing (required for mp3+cover)
  // postprocessorArgs: ["-id3v2_version", "3", "-metadata", "title=%(title)s"],

  // Output format: title.mp3
  output: "~/Music/%(playlist_title)s/%(title)s.%(ext)s",

  // Download entire playlist
  yesPlaylist: true,
})
  .then(() => console.log("Playlist download complete!"))
  .catch((err) => console.error("Error:", err));
