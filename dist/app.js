const passwordOutput = document.getElementById('password')
const passwordLengthInput = document.getElementById('passwordLength');
const passwordLengthOutput = document.getElementById('lengthOutput');
const generateButton = document.getElementById('generate')
const checkButtons = document.querySelectorAll('[data-check]')
const strengthValue = document.getElementById('strength')
const strengthIndicators = document.querySelectorAll('[data-indicator]')


window.onload = () => {
    validate()
    calculateStrength()
    sliderBG()
    passwordLengthOutput.textContent = passwordLengthInput.value
}

passwordLengthInput.addEventListener('input', () => {
    passwordLengthOutput.textContent = passwordLengthInput.value
    validate()
    calculateStrength()
    sliderBG()
})

checkButtons.forEach(check => {
    check.addEventListener('change', () => {
        calculateStrength()
    })
})


function validate(){
    if(passwordLengthInput.value <= 0) {
        passwordOutput.classList.remove('text-almostWhite')
        passwordOutput.classList.add('text-noPassword')
        generateButton.classList.add('cursor-not-allowed')
        generateButton.classList.remove('cursor-pointer')
    } else {
        passwordOutput.classList.remove('text-noPassword')
        passwordOutput.classList.add('text-almostWhite')
        generateButton.classList.remove('cursor-not-allowed')
        generateButton.classList.add('cursor-pointer')
    }
}

function calculateStrength() {
    count = 0
    for(let i = 0; i < checkButtons.length; i++) {
        if(checkButtons[i].checked) {
            count += 1
        }
    }

    switch (count) {
        case 1:
            strengthValue.textContent = `TOO WEAK!`
            clearStyle(strengthIndicators)
            for(let i = 0; i < count; i++) {
                strengthIndicators[i].classList.add('bg-red')
                strengthIndicators[i].classList.add('border-red')
            }
            break;
        case 2:
            strengthValue.textContent = `WEAK!`
            clearStyle(strengthIndicators)
            for(let i = 0; i < count; i++) {
                strengthIndicators[i].classList.add('bg-orange')
                strengthIndicators[i].classList.add('border-orange')
            }
            break;
    
        case 3:
            strengthValue.textContent = `MEDIUM!`
            clearStyle(strengthIndicators)
            for(let i = 0; i < count; i++) {
                strengthIndicators[i].classList.add('bg-yellow')
                strengthIndicators[i].classList.add('border-yellow')
            }
            break;
    
        case 4:
            strengthValue.textContent = `STRONG!`
            clearStyle(strengthIndicators)
            for(let i = 0; i < count; i++) {
                strengthIndicators[i].classList.add('bg-neonGreen')
                strengthIndicators[i].classList.add('border-neonGreen')
            }
            break;
        case 0:
            strengthValue.textContent = `NO STRENGTH!`
            clearStyle(strengthIndicators)
            for(let i = 0; i < 4; i++) {
                strengthIndicators[i].classList.add('bg-none')
                strengthIndicators[i].classList.add('border-almostWhite')
                generateButton.classList.add('cursor-not-allowed')
                generateButton.classList.remove('cursor-pointer')
            }
            break;
    
        default:
            break;
    }
}

function sliderBG() {
    let x = passwordLengthInput.value;
    x =  x/20 * 100;
    let color = `linear-gradient(90deg, #a4ffaf ${x}%, #18171f ${x}%)`;
    passwordLengthInput.style.background = color;
}

function clearStyle(indicators) {
    generateButton.classList.remove('cursor-not-allowed')
    generateButton.classList.add('cursor-pointer')
    for(let i = 0; i < indicators.length; i++) {
        indicators[i].classList.add('border-almostWhite')
        indicators[i].classList.remove('bg-red')
        indicators[i].classList.remove('border-red')
        indicators[i].classList.remove('bg-orange')
        indicators[i].classList.remove('border-orange')
        indicators[i].classList.remove('bg-yellow')
        indicators[i].classList.remove('border-yellow')
        indicators[i].classList.remove('bg-neonGreen')
        indicators[i].classList.remove('border-neonGreen')
    }
}

function generatePassword() {
    let passwordLength = passwordLengthInput.value
    const includeUpperCase = document.getElementById('upper').checked;//if true
    const includeLowerCase = document.getElementById('lower').checked;
    const includeNumbers = document.getElementById('number').checked;
    const includeSymbols = document.getElementById('symbol').checked;
    
    let lowercases = "abcdefghijklmnopqrstuvwxyz";
    let uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*_+)(~";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercases : "";
    allowedChars += includeUpperCase ? uppercases : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if(passwordLengthInput.value > 0 && allowedChars.length > 0) {
        for(let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        passwordOutput.textContent = password
    }
    
}

function copyPassword(button) {
    navigator.clipboard.writeText(passwordOutput.textContent)
    let copyText = button.firstElementChild;

    copyText.classList.remove('hidden')
    setTimeout(() => {
        copyText.classList.add('hidden')
    }, 2000)
}