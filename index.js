let icon = document.querySelector('.icon');
let design = document.querySelector('.design');
if (icon || design) {
    icon.setAttribute('href', 'icon.html')
    design.setAttribute('href', 'design.html')
}

//click back
const back = document.querySelector('.back_icon')

if (back) {
    back.addEventListener('click', () => {
        if (history.go) {
            window.history.back()
        }
    })
}
