const buttons = document.querySelectorAll('button');
const screen = document.getElementById('inp-screen');
const Outscreen = document.getElementById('out-screen');
const clearBtn = document.getElementById('clear-btn');



for (let button of buttons) {

    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === "BS") {
            let str = screen.value;
            str = str.substring(0, str.length - 1);
            screen.value = str;
        } else if (buttonText === 'C') {
            screen.value = "";
        } else if (buttonText === '=') {

            try {
                screen.value = eval(screen.value);
                Outscreen.value = screen.value;
            } catch (e) {
                console.log(e.message);
                screen.value = "Invalid"
            }

        } else {
            screen.value += buttonText;

        }
    })
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;


    if (keyName === 'Enter') {

        try {
            screen.value = eval(screen.value);
            Outscreen.value = screen.value;
        } catch (e) {
            console.log(e.message);
            screen.value = "Invalid"
        }
    }

});

clearBtn.addEventListener('dblclick', (e) => {
    Outscreen.value = "";
});