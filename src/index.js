const init = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('#searchByID').value;

    fetch(`http://localhost:3000/movies/${input}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.textContent = data.title;
            summary.textContent = data.summary;
        })
    })
}

document.addEventListener('DOMContentLoaded', init);