let listItem = [...document.querySelectorAll('.reveal-animation li')];

let options = {
  rootMargin: '-10%', // Margin values ​​recognized by the viewport
  threshold: 0.0
}

let observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let letters = [...entry.target.querySelectorAll('span')];
      letters.forEach((letter, idx) => {
        setTimeout(() => {
          letter.classList.add('--active');
        }, idx * 10);
      })
      entry.target.children[0].classList.add('--active');
    }
  })
}

listItem.forEach(item => {

  let newString = '';
  let itemText = item.children[0].innerText.split('');
  itemText.map(letter => {
    newString += letter == ' ' ? `<span class="gap"></span>` : `<span>${letter}</span>`;
  });
  item.innerHTML = newString;
  item.childNodes.forEach(letter => { letter.ariaHidden = "true" });

  observer.observe(item); // observe 메서드로 target elem을 추가한다. 요소 관찰 중지는 IntersectionObserver.unobserve(target)을 실행한다.
});

console.dir(observer.observe);