const FindStr = (idStr) => {
  const allWordsStr = document.querySelectorAll('.word');
  let res;
  allWordsStr.forEach((word) => {
    word.id === idStr ? res = word : null;
  });
  return res;
};

export default FindStr;
