const icone = document.getElementById('mode_icon');
const form = document.getElementById('login_form')

icone.addEventListener('click', () => {
    if (icone.classList.contains('fa-moon')) {
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun')

        form.classList.add('dark')
        return;
    }
    icone.classList.remove('fa-sun');
    icone.classList.add('fa-moon')
    form.classList.remove('dark')
})

