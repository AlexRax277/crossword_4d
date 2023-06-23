const GetDataFromLS = () => {
  const data = [];
  if (localStorage.getItem('Data')) {
    for (let i = 1; i <= JSON.parse(localStorage.getItem('Data')).length; i++) {
      const word = JSON.parse(localStorage.getItem(`WordID - ${i}`));
      data.push(word);
    }
  }
  return data;
};

export default GetDataFromLS;
