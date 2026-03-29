const input = document.querySelector(".inputbox");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        
        if (!isNaN(value) || value === ".") {
            currentInput += value;
            input.value = currentInput;
        }

    
        else if (["+", "-", "*", "/"].includes(value)) {
            currentInput += ` ${value} `;
            input.value = currentInput;
        }

    
        else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                input.value = currentInput;
            } catch {
                input.value = "Error";
                currentInput = "";
            }
        }

        
        else if (value.toLowerCase() === "c") {
            currentInput = "";
            input.value = "";
        }

        
        else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1);
            input.value = currentInput;
        }
    });
});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    
    if (!isNaN(key)) {
        currentInput += key;
        input.value = currentInput;
    }

    
    else if (["+", "-", "*", "/"].includes(key)) {
        currentInput += ` ${key} `;
        input.value = currentInput;
    }

    
    else if (key === ".") {
        currentInput += key;
        input.value = currentInput;
    }

    
    else if (key === "Enter") {
        e.preventDefault(); 
        try {
            currentInput = eval(currentInput).toString();
            input.value = currentInput;
        } catch {
            input.value = "Error";
            currentInput = "";
        }
    }

    
    else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        input.value = currentInput;
    }

    
    else if (key === "Escape") {
        currentInput = "";
        input.value = "";
    }
});
document.addEventListener("keydown", (e) => {
    const key = e.key;

    buttons.forEach(btn => {
        if (btn.textContent === key || 
           (key === "Enter" && btn.textContent === "=") ||
           (key === "Backspace" && btn.textContent === "⌫")) {
            
            btn.style.transform = "scale(0.9)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 100);
        }
    });
});
