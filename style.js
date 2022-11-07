console.log('hello')
let string = ''
let button = document.querySelectorAll('.rowbutton')
Array.from(button).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML == 'AC'){
            string = ''
            document.querySelector('input').value = string
            document.querySelector('input')
        }
        else {
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})