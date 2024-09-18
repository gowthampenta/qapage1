const questions = document.querySelectorAll('.question-box');

questions.forEach(questionBox => {
    questionBox.addEventListener('click', () => {
        const icon = questionBox.querySelector('i');
        const answer = questionBox.querySelector('.answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});