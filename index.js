function checkQuestionAnswer (question, correctAnswer) {
    question = prompt(question)
    if (question.toLowerCase() === correctAnswer.toLowerCase()) {
        alert('Ответ правильный')
    } else {
        alert('Ответ неправильный')
    }
}
checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')


