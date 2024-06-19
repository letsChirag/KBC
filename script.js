const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars'
    },
    {
        question: 'Who was the first president of the united states?',
        options: ['George Washington','Abraham Lincoln','Thomas Jefferson','John Adams'],
        correctAnswer: 'George Washington'
    },
    {
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean','Indian Ocean','Arctic Ocean','Pacific Ocean'],
        correctAnswer: 'Pacific Ocean'
    },
    {
        question: 'What is the currency of Japan?',
        options: ['Yen','Won','Yuan','Dollar'],
        correctAnswer: 'Yen'
    },
    {
        question: 'Which element has the chemical symbol O?',
        options: ['Gold','Iron','Diamond','Platinum'],
        correctAnswer: 'Diamond'
    },
    {
        question: 'Who is the author of the "Harry Potter" series?',
        options: ['J.K. Rowling','J.R.R. Tolkien','George R.R. Martin','C.S. Lewis'],
        correctAnswer: 'J.K. Rowling'
    },
    {
        question: 'What is the smallest unit of life?',
        options: ['Atom','Molecule','Cell','Tissue'],
        correctAnswer: 'Cell'
    },
    {
        question: 'In which year did the Titanic sink?',
        options: ['1905','1912','1920','1935'],
        correctAnswer: '1912'
    }, 
    {
        question: 'Which organ is responsible for pumping blood throughout the human body?',
        options: ['Brain','Liver','Lungs','Heart'],
        correctAnswer: 'Heart'
    },

    // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => chooseAnswer(option);
        optionsElement.appendChild(button);
    });
}

function chooseAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('correct-sound').play();
    } else {
        document.getElementById('wrong-sound').play();
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    alert(`Game Over!\nYour Score: ${score}`);
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }

    const answer = selectedOption.value;
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        score++;
        document.getElementById('correct-sound').play();
    } else {
        document.getElementById('wrong-sound').play();
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}
