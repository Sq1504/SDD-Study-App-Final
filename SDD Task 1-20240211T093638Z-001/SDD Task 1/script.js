let score = parseInt(localStorage.getItem('score')) || 0;

function calculateScore(answer, questionNumber) {
  const isCorrect = checkAnswer(questionNumber, answer);

  console.log(`Question ${questionNumber}: User answer - ${answer}, Correct answer - ${isCorrect}`);

  if (isCorrect) {
    score++;
    console.log(`Score incremented: ${score}`);
  }

  localStorage.setItem('score', score);

  const nextQuestionNumber = questionNumber + 1;
  if (nextQuestionNumber <= 5) {
    window.location.href = `question${nextQuestionNumber}.html`;
  } else {
    localStorage.removeItem('score');
    displayResult();
  }
}

function checkAnswer(questionNumber, userAnswer) {
  switch (questionNumber) {
    case 1:
      return userAnswer === "c1";
    case 2:
      return userAnswer === "d2";
    case 3:
      return userAnswer === "d3";
    case 4:
      return userAnswer === "b4";
    case 5:
      return userAnswer === "a5";
    default:
      return false;
  }
}

function displayResult() {
  document.getElementById('quiz-container').innerHTML = `<h1>Quiz Completed</h1><p>Your final score is: ${score}/5</p>`;
}

function getCurrentQuestionNumber() {
  return parseInt(document.currentScript.src.split('/').pop().replace('question', '').replace('.html', ''));
}
