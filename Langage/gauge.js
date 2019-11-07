const changeNum = () => {
  const randomNum = Math.round(Math.random() * 100);
  const degrees = Math.round((randomNum / 100) * 180);
  const root = document.querySelector(":root");
  let title = document.querySelector(".loader__title");

  let currentNumber = title.innerText;

  setInterval(() => {
     if (currentNumber < randomNum) {
      currentNumber++;
      title.innerText = currentNumber;
    } else if (currentNumber > randomNum) {
      currentNumber--;
      title.innerText = currentNumber;
    }
  }, 3);

  root.style.setProperty("--rotation", `${degrees}deg`);
  if(randomNum > 80) {
    root.style.setProperty("--color", '#fc3903');
    root.style.setProperty("--loader-color", '#ff9b80');

  }
  else if(randomNum > 50)
  {
    root.style.setProperty("--color", '#fcc203');
    root.style.setProperty("--loader-color", '#ffe078');
  }
  else{
    root.style.setProperty("--color", '#8cc800');
    root.style.setProperty("--loader-color", '#D7ECA6');
  }
};


setInterval(() => {
  changeNum();
}, 2000);
