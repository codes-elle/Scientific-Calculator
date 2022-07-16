let display = document.getElementById('input');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(e, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = '';
                }
                break;
            case 'π':
                try{
                    display.innerText = eval(display.innerText(Math.PI()));
                } catch{
                    display.innerText = 3.14159;
                }
                break;
            case 'sin':
                display.innerText = Math.sin(display.innerText);
                break;
            case 'cos':
                display.innerText = Math.cos(display.innerText);
                break;
            case 'tan':
                display.innerText = Math.tan(display.innerText);
                break;
            case '%':
                try{
                    display.innerText = display.innerText/100;
                } catch {
                    display.innerText = '';
                }
                break;
            case 'x²':
                display.innerText = Math.pow(display.innerText, 2);
                break;
            case 'EXP':
                display.innerText = Math.exp(display.innerText);
            break;
            case '√':
                display.innerText = Math.sqrt(display.innerText);
                break;
            case 'log':
                display.innerText = Math.log(display.innerText);
                break;
            case 'e':
                display.innerText = 2.718;
                break;
        default:
        display.innerText+= e.target.innerText;
        }
    });
});








