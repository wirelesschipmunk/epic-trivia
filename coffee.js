"use strict"

const questionText = document.querySelector(".question")
const inputNumber = document.querySelector("input")
const okBtn = document.querySelector(".okBtn")
const points = document.querySelector(".points")

const questions = new Map([
  [
    1,
    new Map([
      ["question", "In what year was the XBOX one released?"],
      [0, "2021"],
      [1, "2013"],
      [2, "1999"],
      [3, "2019"],
      ["correct answer", 1],
    ]),
  ],
  [
    2,
    new Map([
      [
        "question",
        "What is the most popular programming language in the world?",
      ],
      [0, "TypeScript"],
      [1, "C++"],
      [2, "JavaScript"],
      [3, "C#"],
      ["correct answer", 2],
    ]),
  ],

  [
    3,
    new Map([
      ["question", "What is a bratwurst?"],
      [0, "A German mountain"],
      [1, "A German sausage"],
      [2, "A French war cry"],
      [3, "A german cathedral"],
      ["correct answer", 1],
    ]),
  ],

  [
    4,
    new Map([
      ["question", "What is a bratwurst?"],
      [0, "A German mountain"],
      [1, "A German sausage"],
      [2, "A French war cry"],
      [3, "A German cathedral"],
      ["correct answer", 1],
    ]),
  ],

  [
    5,
    new Map([
      ["question", "Which resource heats about 90% of houses in iceland?"],
      [0, "Solar"],
      [1, "Wind"],
      [2, "Geothermal energy"],
      [3, "Coal"],
      ["correct answer", 2],
    ]),
  ],

  [
    6,
    new Map([
      [
        "question",
        "What is the amount of money that you earn when you pass GO in monopoly?",
      ],
      [0, "$200"],
      [1, "$5"],
      [2, "$145"],
      [3, "$100"],
      ["correct answer", 0],
    ]),
  ],

  [
    7,
    new Map([
      ["question", "Which is the biggest bone in you body?"],
      [0, "Hip Bone"],
      [1, "Femur"],
      [2, "Tibia"],
      [3, "Skull"],
      ["correct answer", 1],
    ]),
  ],

  [
    8,
    new Map([
      ["question", "In gaming and technology what does AR stand for?"],
      [0, "Anti-Robbery"],
      [1, "All Ready"],
      [2, "Arificial Randomness"],
      [3, "Augmented Reality"],
      ["correct answer", 3],
    ]),
  ],

  [
    9,
    new Map([
      ["question", "What kind of creature is Manny from the Ice Age Films?"],
      [0, "Squirrel"],
      [1, "Sloth"],
      [2, "Mammoth"],
      [3, "Bear"],
      ["correct answer", 2],
    ]),
  ],

  [
    10,
    new Map([
      [
        "question",
        "Who first told Harry Potter that the was a wizard in Harry Potter & the Sorcerer's Stone?",
      ],
      [0, "Dumbledore"],
      [1, "Aunt Petunia"],
      [2, "Ron Weasly"],
      [3, "Hagrid"],
      ["correct answer", 3],
    ]),
  ],
])

let randomQuestionNumber = Math.trunc(Math.random() * questions.size + 1)
console.log(randomQuestionNumber)

let randomQuestion = questions.get(randomQuestionNumber)

let question = new Map([
  ["question", randomQuestion.get("question")],
  [0, randomQuestion.get(0)],
  [1, randomQuestion.get(1)],
  [2, randomQuestion.get(2)],
  [3, randomQuestion.get(3)],
  ["correct answer", randomQuestion.get("correct answer")],
])

const answers = [
  document.querySelector(".answer1"),
  document.querySelector(".answer2"),
  document.querySelector(".answer3"),
  document.querySelector(".answer4"),
]

const getQuestion = function () {
  questionText.textContent = question.get("question")
  for (let i = 0; i < answers.length; i++) {
    answers[i].textContent = question.get(i)
  }
}

getQuestion()

const removeRightAndWrongClass = function () {
  for (let i = 0; i < document.querySelectorAll("p").length; i++) {
    document.querySelectorAll("p")[i].classList.remove("wrong")
    document.querySelectorAll("span")[i].classList.remove("wrong")
  }

  for (let i = 1; i < document.querySelectorAll("p").length; i++) {
    document.querySelectorAll("p")[i].classList.remove("right")
    document.querySelectorAll("span")[i].classList.remove("right")
  }
}

const getNewQuestion = function () {
  removeRightAndWrongClass()

  randomQuestionNumber = Math.trunc(Math.random() * questions.size + 1)
  console.log(randomQuestionNumber)

  randomQuestion = questions.get(randomQuestionNumber)

  question = new Map([
    ["question", randomQuestion.get("question")],
    [0, randomQuestion.get(0)],
    [1, randomQuestion.get(1)],
    [2, randomQuestion.get(2)],
    [3, randomQuestion.get(3)],
    ["correct answer", randomQuestion.get("correct answer")],
  ])

  getQuestion()
}

//

okBtn.addEventListener("click", () => {
  const answer = Number(inputNumber.value)
  console.log(answer)

  if (answer > 0 && answer < 5) {
    if (answer === question.get("correct answer") + 1) {
      console.log("correct!")

      // add right class
      document.querySelector(`.answer${answer}`).classList.add("right")
      document.querySelectorAll("p")[answer - 1].classList.add("right")

      // add point
      points.textContent = Number(points.textContent) + 1

      // get next question
      setTimeout(getNewQuestion, 500)
    } else {
      // add wrong class
      document.querySelector(`.answer${answer}`).classList.add("wrong")
      document.querySelectorAll("p")[answer - 1].classList.add("wrong")

      // remove point
      points.textContent = Number(points.textContent) - 1
    }
  }
})
