let uah = document.querySelector('#uah');
let usd = document.querySelector('#usd');

uah.addEventListener('input', (e) => {
  let req = new XMLHttpRequest();

  req.open('GET', 'js/current.json');
  req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  req.send();

  req.addEventListener('load', () => {

    if (req.status === 200) {
      const data = JSON.parse(req.response);
      usd.value = (+uah.value / data.current.usd).toFixed(2);
    } else {
      usd.value = "Something went wrong";
    }

  })
})