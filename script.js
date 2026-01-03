// State management
let currentPhase = 1;
let completedExercises = 0;
let independentScore = 0;
let answeredIndependent = new Set();
let independentAnswers = {};

// Phase navigation
function nextPhase() {
    if (currentPhase < 5) {
        document.getElementById(`phase${currentPhase}`).classList.remove('active');
        currentPhase++;
        document.getElementById(`phase${currentPhase}`).classList.add('active');
        updateProgress();
        updatePhaseDots();
        window.scrollTo(0, 0);
    }
}

function prevPhase() {
    if (currentPhase > 1) {
        document.getElementById(`phase${currentPhase}`).classList.remove('active');
        currentPhase--;
        document.getElementById(`phase${currentPhase}`).classList.add('active');
        updateProgress();
        updatePhaseDots();
        window.scrollTo(0, 0);
    }
}

function updateProgress() {
    const progress = ((currentPhase - 1) / 4) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${Math.round(progress)}%`;
}

function updatePhaseDots() {
    document.querySelectorAll('.phase-dot').forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index + 1 < currentPhase) {
            dot.classList.add('completed');
        } else if (index + 1 === currentPhase) {
            dot.classList.add('active');
        }
    });
}

// Exercise 1 functions
function checkStep1Ex1(answer) {
    const resultEl = document.getElementById('ex1-result1');
    const buttons = document.querySelectorAll('#ex1-step1 .choice-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (answer === 'correct') {
        resultEl.textContent = 'Correct! 0.25 x 2 = 0.5';
        resultEl.className = 'result-badge correct';
        setTimeout(() => {
            document.getElementById('ex1-step1').classList.remove('active');
            document.getElementById('ex1-step2').classList.remove('hidden');
            document.getElementById('ex1-step2').classList.add('visible', 'active');
        }, 1000);
    } else {
        resultEl.textContent = 'Try again. Multiply 0.25 by 2.';
        resultEl.className = 'result-badge incorrect';
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            resultEl.textContent = '';
        }, 1500);
    }
}

function checkStep2Ex1(answer) {
    const resultEl = document.getElementById('ex1-result2');
    const buttons = document.querySelectorAll('#ex1-step2 .choice-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (answer === 'correct') {
        resultEl.textContent = 'Correct! 0.75 x 10 = 7.5, and 0.5 + 7.5 = 8';
        resultEl.className = 'result-badge correct';
        setTimeout(() => {
            document.getElementById('ex1-step2').classList.remove('active');
            document.getElementById('ex1-step3').classList.remove('hidden');
            document.getElementById('ex1-step3').classList.add('visible', 'active');
        }, 1000);
    } else {
        resultEl.textContent = 'Not quite. Calculate 0.75 x 10 + 0.5';
        resultEl.className = 'result-badge incorrect';
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            resultEl.textContent = '';
        }, 1500);
    }
}

// Exercise 2 functions
function checkStep1Ex2(answer) {
    const resultEl = document.getElementById('ex2-result1');
    const buttons = document.querySelectorAll('#ex2-step1 .choice-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (answer === 'correct') {
        resultEl.textContent = 'Correct! m + n = 1 + 3 = 4';
        resultEl.className = 'result-badge correct';
        setTimeout(() => {
            document.getElementById('ex2-step1').classList.remove('active');
            document.getElementById('ex2-step2').classList.remove('hidden');
            document.getElementById('ex2-step2').classList.add('visible', 'active');
        }, 1000);
    } else {
        resultEl.textContent = 'Remember: ratio is m:n = 1:3, so add them.';
        resultEl.className = 'result-badge incorrect';
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            resultEl.textContent = '';
        }, 1500);
    }
}

function checkStep2Ex2(answer) {
    const resultEl = document.getElementById('ex2-result2');
    const buttons = document.querySelectorAll('#ex2-step2 .choice-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (answer === 'correct') {
        resultEl.textContent = 'Correct! (3×4 + 1×12)/4 = (12+12)/4 = 6';
        resultEl.className = 'result-badge correct';
        setTimeout(() => {
            document.getElementById('ex2-step2').classList.remove('active');
            document.getElementById('ex2-step3').classList.remove('hidden');
            document.getElementById('ex2-step3').classList.add('visible', 'active');
        }, 1000);
    } else {
        resultEl.textContent = 'Calculate: (3×4 + 1×12) ÷ 4';
        resultEl.className = 'result-badge incorrect';
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            resultEl.textContent = '';
        }, 1500);
    }
}

// Exercise 3 functions
function checkStep1Ex3(answer) {
    const resultEl = document.getElementById('ex3-result1');
    const buttons = document.querySelectorAll('#ex3-step1 .choice-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (answer === 'correct') {
        resultEl.textContent = 'Correct! AP = P - A = 15 - 0 = 15';
        resultEl.className = 'result-badge correct';
        setTimeout(() => {
            document.getElementById('ex3-step1').classList.remove('active');
            document.getElementById('ex3-step2').classList.remove('hidden');
            document.getElementById('ex3-step2').classList.add('visible', 'active');
        }, 1000);
    } else {
        resultEl.textContent = 'Distance from A(0) to P(15) is |15 - 0|';
        resultEl.className = 'result-badge incorrect';
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            resultEl.textContent = '';
        }, 1500);
    }
}

function checkStep2Ex3(answer) {
    const resultEl = document.getElementById('ex3-result2');
    const buttons = document.querySelectorAll('#ex3-step2 .choice-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (answer === 'correct') {
        resultEl.textContent = 'Correct! 15:5 = 3:1 (divide both by 5)';
        resultEl.className = 'result-badge correct';
        setTimeout(() => {
            document.getElementById('ex3-step2').classList.remove('active');
            document.getElementById('ex3-step3').classList.remove('hidden');
            document.getElementById('ex3-step3').classList.add('visible', 'active');
        }, 1000);
    } else {
        resultEl.textContent = 'Simplify 15:5 by dividing both by GCD';
        resultEl.className = 'result-badge incorrect';
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            resultEl.textContent = '';
        }, 1500);
    }
}

// Exercise 4 functions
function checkStep1Ex4(answer) {
    const resultEl = document.getElementById('ex4-result1');
    const buttons = document.querySelectorAll('#ex4-step1 .choice-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (answer === 'correct') {
        resultEl.textContent = 'Correct! Higher weight for A pulls average toward A';
        resultEl.className = 'result-badge correct';
        setTimeout(() => {
            document.getElementById('ex4-step1').classList.remove('active');
            document.getElementById('ex4-step2').classList.remove('hidden');
            document.getElementById('ex4-step2').classList.add('visible', 'active');
        }, 1000);
    } else {
        resultEl.textContent = 'Weight = 0.8 for A means A has more influence';
        resultEl.className = 'result-badge incorrect';
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            resultEl.textContent = '';
        }, 1500);
    }
}

function checkStep2Ex4(answer) {
    const resultEl = document.getElementById('ex4-result2');
    const buttons = document.querySelectorAll('#ex4-step2 .choice-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (answer === 'correct') {
        resultEl.textContent = 'Correct! 80 - 20 = 60';
        resultEl.className = 'result-badge correct';
        setTimeout(() => {
            document.getElementById('ex4-step2').classList.remove('active');
            document.getElementById('ex4-step3').classList.remove('hidden');
            document.getElementById('ex4-step3').classList.add('visible', 'active');
        }, 1000);
    } else {
        resultEl.textContent = 'Subtract: 80 - 20 = ?';
        resultEl.className = 'result-badge incorrect';
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            resultEl.textContent = '';
        }, 1500);
    }
}

// Complete exercise and show next
function completeExercise(exerciseNum) {
    completedExercises++;

    if (exerciseNum < 4) {
        document.getElementById(`exercise${exerciseNum}`).style.display = 'none';
        document.getElementById(`exercise${exerciseNum + 1}`).style.display = 'block';
    } else {
        // All exercises complete
        document.getElementById('phase3Next').disabled = false;
    }
}

// Independent practice
function checkIndependent(questionNum, answer) {
    if (answeredIndependent.has(questionNum)) return;

    answeredIndependent.add(questionNum);
    const resultEl = document.getElementById(`ind${questionNum}-result`);
    const buttons = document.querySelectorAll(`.independent-problem:nth-child(${questionNum}) .choice-btn`);

    buttons.forEach(btn => btn.disabled = true);

    if (answer === 'correct') {
        independentScore++;
        resultEl.textContent = '✓';
        resultEl.className = 'result-inline correct';
        independentAnswers[questionNum] = { correct: true };
    } else {
        resultEl.textContent = '✗';
        resultEl.className = 'result-inline incorrect';
        independentAnswers[questionNum] = { correct: false };
    }

    document.getElementById('independentScore').textContent = independentScore;

    if (answeredIndependent.size === 10) {
        document.getElementById('finalScore').style.display = 'block';
        document.getElementById('finalScoreNumber').textContent = `${independentScore}/10`;
        document.getElementById('phase4Next').disabled = false;
        updateFinalResults();
    }
}

// Update final results in Phase 5
function updateFinalResults() {
    document.getElementById('finalIndScore').textContent = `${independentScore}/10`;
    const overallScore = 4 + independentScore;
    document.getElementById('overallScore').textContent = `${overallScore}/14`;
}

// Print functions
function printWorksheet() {
    window.print();
}

function printResults() {
    // Prepare print content
    let resultsHTML = '';
    const correctAnswers = {
        1: '10',
        2: '14',
        3: '9',
        4: '1:1',
        5: 'Closer to A',
        6: '0',
        7: '12',
        8: '3',
        9: '3:1',
        10: '21'
    };

    for (let i = 1; i <= 10; i++) {
        const answered = independentAnswers[i];
        const status = answered ? (answered.correct ? '✓ Correct' : '✗ Incorrect') : 'Not answered';
        resultsHTML += `<p>Question ${i}: ${status} (Answer: ${correctAnswers[i]})</p>`;
    }

    document.getElementById('printIndependentResults').innerHTML = resultsHTML;
    document.getElementById('printFinalScore').textContent = `${independentScore}/10`;
    document.getElementById('printPercentage').textContent = `${Math.round((independentScore/10) * 100)}%`;

    window.print();
}

// Restart lesson
function restartLesson() {
    // Reset state
    currentPhase = 1;
    completedExercises = 0;
    independentScore = 0;
    answeredIndependent = new Set();
    independentAnswers = {};

    // Reset UI
    document.querySelectorAll('.content-card').forEach(card => card.classList.remove('active'));
    document.getElementById('phase1').classList.add('active');

    // Reset guided practice
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`exercise${i}`).style.display = i === 1 ? 'block' : 'none';

        for (let j = 1; j <= 3; j++) {
            const stepEl = document.getElementById(`ex${i}-step${j}`);
            if (stepEl) {
                if (j === 1) {
                    stepEl.classList.add('visible', 'active');
                    stepEl.classList.remove('hidden');
                } else {
                    stepEl.classList.remove('visible', 'active');
                    stepEl.classList.add('hidden');
                }
            }

            const resultEl = document.getElementById(`ex${i}-result${j}`);
            if (resultEl) {
                resultEl.textContent = '';
                resultEl.className = 'result-badge';
            }
        }

        const buttons = document.querySelectorAll(`#exercise${i} .choice-btn`);
        buttons.forEach(btn => btn.disabled = false);
    }

    document.getElementById('phase3Next').disabled = true;

    // Reset independent practice
    document.getElementById('independentScore').textContent = '0';
    document.querySelectorAll('.independent-problem .choice-btn').forEach(btn => btn.disabled = false);
    for (let i = 1; i <= 10; i++) {
        const resultEl = document.getElementById(`ind${i}-result`);
        if (resultEl) {
            resultEl.textContent = '';
            resultEl.className = 'result-inline';
        }
    }
    document.getElementById('finalScore').style.display = 'none';
    document.getElementById('phase4Next').disabled = true;

    updateProgress();
    updatePhaseDots();
    window.scrollTo(0, 0);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    updatePhaseDots();

    // Add click handlers to phase dots
    document.querySelectorAll('.phase-dot').forEach(dot => {
        dot.addEventListener('click', function() {
            const phase = parseInt(this.getAttribute('data-phase'));
            if (phase <= currentPhase || this.classList.contains('completed')) {
                document.getElementById(`phase${currentPhase}`).classList.remove('active');
                currentPhase = phase;
                document.getElementById(`phase${currentPhase}`).classList.add('active');
                updateProgress();
                updatePhaseDots();
                window.scrollTo(0, 0);
            }
        });
    });
});
