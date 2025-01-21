// Получаем элементы
const button = document.querySelector(".skillsOpenBtn");
const mainInfoBox = document.querySelector(".mainInfoBox");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");

// Обработчик клика на кнопку "Skills"
button.addEventListener("click", function () {
  // Скрываем старые боксы с анимацией
  mainInfoBox.classList.add("fade-out-right");
  nav.classList.add("fade-out-right");

  // Ждем завершения анимации
  setTimeout(() => {
    // Скрываем элементы
    mainInfoBox.style.display = "none";
    nav.style.display = "none";

    // Создаем новый бокс с заголовком
    const skillsBox = document.createElement("div");
    skillsBox.classList.add("skillsBox", "box", "fade-in-left", "jsBox");
    skillsBox.innerHTML = `
      <h2>Skills</h2>
      <ul style="margin-top: 5px;">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React <span class="learningBadge">learning</span></li>
        <li>English <span class="englishLevel">B1</span></li>
      </ul>
    `;

    const backBtn = document.createElement("div");
    backBtn.classList.add("backBtn", "fade-in");
    backBtn.innerHTML = `
      <button class="backBtnBtn">Back</button>
    `;

    // Добавляем новый бокс на страницу
    main.appendChild(skillsBox);
    main.appendChild(backBtn);

    // Обработчик клика на кнопку "Back"
    const backBtnBtn = backBtn.querySelector(".backBtnBtn");
    backBtnBtn.addEventListener("click", function () {
      // Добавляем анимацию для скрытия списка навыков влево
      skillsBox.classList.add("fade-out-left");

      // Ждем завершения анимации перед скрытием
      setTimeout(() => {
        skillsBox.style.display = "none"; // Скрываем список навыко
        backBtn.style.display = "none"; // Скрываем кнопку "Back"

        // Показываем старые элементы с анимацией появления справа
        mainInfoBox.classList.add("fade-in-right");
        nav.classList.add("fade-in-right");

        // Убираем анимацию, чтобы элементы появились сразу
        mainInfoBox.style.display = "block";
        nav.style.display = "block";

        // Сбрасываем классы анимации
        mainInfoBox.classList.remove("fade-out-right");
        nav.classList.remove("fade-out-right");
        
        // Убедитесь, что flexbox работает правильно
        mainInfoBox.style.display = "flex"; // Убедитесь, что это flex
      }, 500); // Задержка для завершения анимации
    });
  }, 500); // Задержка для завершения анимации
});