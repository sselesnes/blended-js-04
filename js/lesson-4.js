/// Завдання 1
// 1 - отримай body елемент і виведи його в консоль;
const bodyElement = document.querySelector("body");
console.log(bodyElement);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleElement = document.querySelector("#title");
console.log(titleElement);

// 3 - отримай елемент class="list" і виведи його в консоль;
const listElement = document.querySelector(".list");
console.log(listElement);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topicElements = document.querySelectorAll(`[data-topic]`);
console.dir(topicElements);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(topicElements.item(0));
console.log(topicElements[0]);
console.log(document.querySelector(`[data-topic]`));

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(topicElements.item(topicElements.length - 1));
// console.log(listElement.lastElementChild);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1Neighbor = document.querySelector("h1").nextElementSibling;
console.log(h1Neighbor);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3Elements = document.querySelectorAll("h3");
console.dir(h3Elements);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3Elements.forEach(element => element.classList.add("active"));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liNavigationElement = document.querySelector(`li[data-topic="navigation"]`);
console.log(liNavigationElement);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
liNavigationElement.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const pElement = liNavigationElement.querySelector("p");
pElement.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const manipulationElement = document.querySelector(`[data-topic=${currentTopic}]`);
console.log(manipulationElement);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
manipulationElement.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedElement = document.querySelector(`h3.completed`);
console.dir(completedElement);

const headlines = [1, 2, 3, 4, 5, 6];
const completedElementFiltered = headlines
  .map(h => document.querySelector(`h${h}.completed`)) // || null)
  .filter(element => element !== null);
console.dir(completedElementFiltered[0]);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
completedElement.closest("li").remove();

// const liElementH3Completed = document.querySelector("li:has(h3.completed)");
// liElementH3Completed.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const headline1 = document.querySelector("h1");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
headline1.insertAdjacentElement("afterend", newParagraph);
// headline1.after(newParagraph);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newLi = document.createElement("li");
newLi.setAttribute("data-topic", "innerhtml");
const h3 = document.createElement("h3");
h3.textContent = "Властивість innerHTML";
const p = document.createElement("p");
p.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
newLi.appendChild(h3);
newLi.appendChild(p);
listElement.appendChild(newLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const topic = "innerhtml";
const title = "Властивість innerHTML";
const description =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
const newLiElement = `<li data-topic="${topic}"><h3>${title}</h3><p>${description}</p></li>`;
listElement.insertAdjacentHTML("beforeend", newLiElement);

// 20 - очисти список
// listElement.innerHTML = "";
listElement.replaceChildren();
// listElement.querySelectorAll("*").forEach(child => child.remove()); // погано для великих списків
// Array.from(listElement.children).forEach(child => child.remove()); // погано для великих списків

/// Завдання 2
// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
let numbers = document.createElement("div");
numbers.classList.add("numberContainer");
listElement.insertAdjacentElement("afterend", numbers);

const boxes = Array.from({ length: 100 });
const boxesHTML = boxes.map(() => `<div class="number">${randomNumber()}</div>`);
// const boxesHTML = Array.from( { length: 100 }, () => `<div class="number">${randomNumber()}</div>` );

numbers.innerHTML = boxesHTML.join("");

/// Завдання 3
// Form Events, Input, Focus, Blur and Submit.
// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`
const formEl = document.querySelector(".js-contact-form");
const inputEl = document.querySelector(".js-username-input");
const spanEl = document.querySelector(".js-username-output");

formEl.addEventListener("input", e => {
  const input = e.target;
  if (input.type !== "text") return;
  if (input.value.length >= 6) {
    input.classList.add("success");
    input.classList.remove("error");
    spanEl.textContent = input.value;
  } else {
    input.classList.add("error");
    input.classList.remove("success");
    spanEl.textContent = `Anonymous`;
  }
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
inputEl.addEventListener("focus", () => {
  if (inputEl.value.trim() === "") {
    inputEl.style.outline = "3px solid red";
  } else {
    inputEl.style.outline = "3px solid green";
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
inputEl.addEventListener("blur", () => {
  if (inputEl.value.trim() === "") {
    inputEl.style.outline = "3px solid red";
  } else {
    inputEl.style.outline = "3px solid lime";
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.

formEl.addEventListener("submit", e => {
  e.preventDefault();
  const { userName, accept } = e.target.elements;
  const inputValue = userName.value.trim();
  const check = accept.checked;
  if (inputValue === "") {
    alert("input can not be empty!!");
    return;
  }
  if (!check) {
    alert("You need accept!");
    return;
  }

  const data = { userName: inputValue };
  console.log(data);
  formEl.reset();
  spanEl.textContent = "Anonymous";
  userName.style.outline = "none";
  accept.style.outline = "none";
});

/// Завдання 4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// 1. Отримай посилання на кнопки і квадрат
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const box = document.querySelector(".box");

decreaseBtn.addEventListener("click", () => {
  const currentWidth = parseFloat(getComputedStyle(box).width);
  const currentHeight = parseFloat(getComputedStyle(box).height);
  box.style.width = `${currentWidth - 20}px`;
  box.style.height = `${currentHeight - 20}px`;
  decreaseBtn.scrollIntoView({ behavior: "smooth", block: "center" });
});

increaseBtn.addEventListener("click", () => {
  const currentWidth = parseFloat(getComputedStyle(box).width);
  const currentHeight = parseFloat(getComputedStyle(box).height);
  box.style.width = `${currentWidth + 20}px`;
  box.style.height = `${currentHeight + 20}px`;
  increaseBtn.scrollIntoView({ behavior: "smooth", block: "center" });
});
