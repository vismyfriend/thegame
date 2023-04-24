const askMe = document.querySelector(".ask")
const check = document.querySelector(".check")
const next = document.querySelector(".next")
const card = document.querySelector(".card")
const cardValue = document.querySelector(".card__value")
const cardHint = document.querySelector(".card__hint")
const manual1 = document.querySelector(".manual-1")
const manual2 = document.querySelector(".manual-2")
const manual3 = document.querySelector(".manual-3")
const hint = document.querySelector(".notebook__hint")
let randomNumber = null
let min = null
let max = null
let value = null
function getAnswers() {
    card.classList.remove("open")
    showCheckManual()
    min = answers[0].id
    max = min + answers.length
    setRandomNumber()
    console.log(randomNumber)
    value = answers.find(n => n.id === randomNumber)
    cardHint.classList.remove("show")
    // ищет объект в массиве и сравнивает с id
    setTimeout(function () { card.classList.add("open") }, 0);
    card.style.border = "solid 4px rgb(235, 70, 70)";
    cardValue.textContent = value.eng
    cardHint.textContent = value.ru
}
function setRandomNumber() {
    randomNumber = Math.floor(Math.random() * (max - min) + min)

}
function showQuestionsManual() {

    manual1.textContent = "Задай вопрос: ``How often do you + глагол с карточки``? Нажми на “CHECK”, чтобы увидеть перевод." 
    manual2.textContent = "По очереди здавай этот вопрос каждому игроку, после всех ответов выбери самый правдивый. Тот игрок будет задавать следующий вопрос."
    manual3.textContent = "Нажми на “ANSWER”, чтобы составить ответ, если спросили тебя."
    hint.textContent = "Запиши в тетрадь, чтобы увеличить свои шансы запомнить (don't be lazy)"
}
function showCheckManual() {
    manual1.textContent = "Слушай вопрос, который тебе зададут и дай полный ответ I + действие + слова на твоей карточке." 
    manual2.textContent = "Дождись ответов всех игроков. Если твой ответ выберут - ты задаешь следующий вопрос"
    manual3.textContent = "Если твой ответ не выбрали, жди нового вопроса и один раз нажми на “ANSWER”, чтобы составить новый ответ"
    hint.textContent = "Запиши в тетрадь, чтобы увеличить свои шансы запомнить (don't be lazy)"
}




// глагол на первом месте
function getquestions() {
    min = questions[0].id
    max = min + questions.length
    card.classList.remove("open")
    setRandomNumber()
    setTimeout(function () { card.classList.add("open") }, 0);
    value = questions.find(n => n.id === randomNumber)
    cardHint.classList.remove("show")
    // обновляет blur на каждой новой карточке
    cardValue.textContent = value.eng
    cardHint.textContent = value.ru
    card.style.border = "solid 4px rgb(5, 184, 5)";
    showQuestionsManual()
}




check.addEventListener("click", () => {
    cardHint.classList.toggle("show")
})

askMe.addEventListener("click", getAnswers)

next.addEventListener("click", getquestions)
card.addEventListener("click", () => {
    card.classList.contains("open") ? null : getquestions()
})