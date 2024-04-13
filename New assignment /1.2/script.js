function recommendPortfolio() {
    var age = parseInt(document.getElementById('age').value);
    var income = parseInt(document.getElementById('income').value);
    var portfolioText = '';
    var stockExamples = '';
    var bondExamples = '';

    if (age >= 18 && age < 30) {
        if (income < 30000) {
            portfolioText = 'Recommended Portfolio: 80% Stocks, 20% Bonds';
            stockExamples = 'Examples of stocks: Apple (AAPL), Amazon (AMZN), Netflix (NFLX)';
            bondExamples = 'Examples of bonds: Vanguard Total Bond Market ETF (BND), iShares Core U.S. Aggregate Bond ETF (AGG)';
        } else {
            portfolioText = 'Recommended Portfolio: 70% Stocks, 30% Bonds';
            stockExamples = 'Examples of stocks: Facebook (FB), Google (GOOGL), Microsoft (MSFT)';
            bondExamples = 'Examples of bonds: iShares iBoxx $ Investment Grade Corporate Bond ETF (LQD), Vanguard Short-Term Bond ETF (BSV)';
        }
    } else if (age >= 30 && age < 50) {
        if (income < 50000) {
            portfolioText = 'Recommended Portfolio: 70% Stocks, 30% Bonds';
            stockExamples = 'Examples of stocks: Johnson & Johnson (JNJ), Procter & Gamble (PG), Visa (V)';
            bondExamples = 'Examples of bonds: Vanguard Total Bond Market ETF (BND), US Treasurys 20+ Year Treasury Bond ETF (TLT)';
        } else {
            portfolioText = 'Recommended Portfolio: 60% Stocks, 40% Bonds';
            stockExamples = 'Examples of stocks: Berkshire Hathaway (BRK-B), JPMorgan Chase (JPM), Alphabet (GOOGL)';
            bondExamples = 'Examples of bonds: Junk bonds, Corporate Bonds, exchange-traded funds';
        }
    } else if (age >= 50 && age < 65) {
        if (income < 70000) {
            portfolioText = 'Recommended Portfolio: 60% Stocks, 40% Bonds';
            stockExamples = 'Examples of stocks: Exxon Mobil (XOM), AT&T (T), Pfizer (PFE)';
            bondExamples = 'Examples of bonds: iShares iBoxx $ Investment Grade Corporate Bond ETF (LQD), Vanguard Long-Term Bond ETF (BLV)';
        } else {
            portfolioText = 'Recommended Portfolio: 50% Stocks, 50% Bonds';
            stockExamples = 'Examples of stocks: Walmart (WMT), Coca-Cola (KO), Verizon (VZ)';
            bondExamples = 'Examples of bonds: iShares iBoxx $ Investment Grade Corporate Bond ETF (LQD), iShares National Muni Bond ETF (MUB)';
        }
    } else if (age >= 65 && age <= 100) {
        if (income < 80000) {
            portfolioText = 'Recommended Portfolio: 50% Stocks, 50% Bonds';
            stockExamples = 'Examples of stocks: Procter & Gamble (PG), Johnson & Johnson (JNJ), McDonald\'s (MCD)';
            bondExamples = 'Examples of bonds: iShares iBoxx $ Investment Grade Corporate Bond ETF (LQD), Vanguard Short-Term Corporate Bond ETF (VCSH)';
        } else {
            portfolioText = 'Recommended Portfolio: 40% Stocks, 60% Bonds';
            stockExamples = 'Examples of stocks: PepsiCo (PEP), 3M (MMM), Colgate-Palmolive (CL)';
            bondExamples = 'Examples of bonds: iShares iBoxx $ Investment Grade Corporate Bond ETF (LQD), Vanguard Total International Bond ETF (BNDX)';
        }
    } else {
        portfolioText = 'Please enter a valid age between 18 and 100.';
    }

    document.getElementById('portfolioText').textContent = portfolioText;
    document.getElementById('stockExamples').textContent = stockExamples;
    document.getElementById('bondExamples').textContent = bondExamples;
    document.getElementById('portfolio').style.display = 'block';
}

var scenarios = [
    {
        age: 25,
        income: 25000,
        goal: 'Save for a house down payment',
        options: [
            { portfolio: '80% Stocks, 20% Bonds', correct: false },
            { portfolio: '70% Stocks, 30% Bonds', correct: true },
            { portfolio: '30% Stocks, 70% Bonds', correct: false }
        ]
    },
    {
        age: 35,
        income: 45000,
        goal: 'Save for childrens education',
        options: [
            { portfolio: '70% Stocks, 30% Bonds', correct: true },
            { portfolio: '20% Stocks, 80% Bonds', correct: false },
            { portfolio: '50% Stocks, 50% Bonds', correct: false }
        ]
    },
    {
        age: 55,
        income: 70000,
        goal: 'Retirement planning and Wealth preservation',
        options: [
            { portfolio: '40% Stocks, 60% Bonds', correct: true },
            { portfolio: '50% Stocks, 50% Bonds', correct: false },
            { portfolio: '70% Stocks, 30% Bonds', correct: false }
        ]
    }
];

var currentQuestionIndex = 0;

function displayQuestion() {
    var scenario = scenarios[currentQuestionIndex];
    var options = scenario.options;

    document.getElementById('scenario').textContent = `Scenario: 
      ${scenario.age}-year-old with an annual income of £${scenario.income}, 
      looking to ${scenario.goal}.`;

    document.getElementById('option1Label').textContent = options[0].portfolio;
    document.getElementById('option2Label').textContent = options[1].portfolio;
    document.getElementById('option3Label').textContent = options[2].portfolio;
}

function checkAnswer(event) {
    event.preventDefault();

    var selectedOption = document.querySelector('input[name="portfolio"]:checked').value;
    var correctOption = scenarios[currentQuestionIndex].options.find(option => option.correct);

    if (selectedOption === correctOption.portfolio) {
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        document.getElementById('feedback').textContent = `Incorrect. The recommended portfolio is ${correctOption.portfolio}.`;
    }

    document.getElementById('feedbackContainer').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < scenarios.length) {
        displayQuestion();
        document.getElementById('feedbackContainer').style.display = 'none';
    } else {
        document.getElementById('questionContainer').style.display = 'none';
        document.getElementById('feedbackContainer').innerHTML = '<p>End of quiz. Thank you for playing!</p>';
        document.getElementById('feedbackContainer').style.display = 'block';
    }
}

function startQuiz() {
    displayQuestion();
    document.getElementById('questionContainer').style.display = 'block';
}

document.getElementById('optionsForm').addEventListener('submit', checkAnswer);
