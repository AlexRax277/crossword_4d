/**
 * Функция воспроизведения аудио-файлов.
 * @param {object} audio - аудио-файл (необходимо предваритльно импортировать в скрипт через относительный путь).
 * @returns возвращает воспроизведение переданного аудио-файла.
 */

export default function AudioHandler(audio) {
  const sound = new Audio(audio);
  sound.volume = 0.2;
  return sound.play();
}
