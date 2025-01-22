// Получаем элементы
const buttonSkills = document.querySelector(".skillsOpenBtn");
const buttonProjects = document.querySelector(".projectsOpenBtn");
const mainInfoBox = document.querySelector(".mainInfoBox");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");

// Функция для отображения нового бокса с кнопкой "Back"
function renderBox(title, contentHTML) {
  // Скрываем старые элементы
  mainInfoBox.classList.add("fade-out-left");
  nav.classList.add("fade-out-left");

  mainInfoBox.style.display = "none";
  nav.style.display = "none";

  // Создаем новый бокс
  const newBox = document.createElement("div");
  newBox.classList.add("box", "fade-in-right", "jsBox");
  newBox.innerHTML = `
    <h2>${title}</h2>
    ${contentHTML}
  `;

  // Создаем кнопку "Back"
  const backBtn = document.createElement("div");
  backBtn.classList.add("backBtn", "fade-in");
  backBtn.innerHTML = `
    <button class="backBtnBtn">Back</button>
  `;

  // Добавляем элементы на страницу
  main.appendChild(newBox);
  main.appendChild(backBtn);

  // Обработчик клика на кнопку "Back"
  const backBtnBtn = backBtn.querySelector(".backBtnBtn");
  backBtnBtn.addEventListener("click", function () {
    // Добавляем анимацию для скрытия нового бокса
    newBox.classList.add("fade-out-left");
    backBtn.classList.add("fade-out-left");

    // Скрываем элементы
    newBox.style.display = "none";
    backBtn.style.display = "none";

    // Показываем старые элементы с анимацией
    mainInfoBox.style.display = "flex";
    nav.style.display = "block";

    mainInfoBox.classList.remove("fade-out-left");
    nav.classList.remove("fade-out-left");

    mainInfoBox.classList.add("fade-in-right");
    nav.classList.add("fade-in-right");

    // Удаляем новые элементы
    newBox.remove();
    backBtn.remove();
  });
}

// Навыки
buttonSkills.addEventListener("click", function () {
  renderBox(
    "Skills",
    `
      <ul style="margin-top: 5px;">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React <span class="learningBadge">learning</span></li>
        <li>English <span class="englishLevel">B1</span></li>
        <li>Git</li>
        <li>Terminal <span class="zshBadge">zsh</span></li>
      </ul>
    `
  );
});

// Проекты
buttonProjects.addEventListener("click", function () {
  renderBox(
    "Projects",
    `
      <ul class="skills-heading" style="margin-top: 5px;">
        <li><a href="https://ByteMe6.github.io/practicnharobota2/" aria-label="Nice View project">Nice View</a></li>
        <li><a href="https://ByteMe6.github.io/project-2//" aria-label="IT Studio project">It studio
          <span class="badPr">not adaptatated</span>
        </a></li>
        <li><a href="https://ByteMe6.github.io/Optima/" aria-label="Optima project">Optima</a></li>
        <li><a href="https://ByteMe6.github.io/callmar/" aria-label="Callmar project">Callmar</a></li>
        <li><a href="https://byteme6.github.io/popular-games/" aria-label="Popular games project">
          Popular games
          <span class="badPr">not adaptatated</span>
        </a></li>
        <li><a href="https://byteme6.github.io/milena-art/" aria-label="ArtShop project">ArtShop</a></li>
        <li><a href="https://ByteMe6.github.io/findCountry/" aria-label="Find country project">find country</a></li>
        <li><a href="https://ByteMe6.github.io/pictureFind/" aria-label="Image find project">image find</a></li>
        <li><a href="https://ByteMe6.github.io/database/" aria-label="Database project">database</a></li>
        <li><a href="https://byteme6.github.io/arrron/" aria-label="Arron project">Arron</a></li>
        <li><a href="https://byteme6.github.io/eventBooster/" aria-label="Event Booster project">Event booster</a></li>
      </ul>
    `
  );
});

// Добавьте здесь новые кнопки с их обработчиками, если появятся дополнительные секции.