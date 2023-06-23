export default function AudioHandler(audio) {
  const sound = new Audio(audio);
  sound.volume = 0.3;
  return sound.play();
}
