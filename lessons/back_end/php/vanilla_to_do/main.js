document.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {

        fetch( `/index/${e.target.id}`, {method:'DELETE'}).then(()=> {
            location.reload();
        })
    }

})

document.addEventListener('keyup', (e) => {
    if (e.target.classList.contains('add') && e.key=='Enter') {
        alert('pressed enter')
    };

})

document.addEventListener('focusout', (e) => {
    if (e.target.classList.contains('add')) {
        alert('lost focus')
    }
})