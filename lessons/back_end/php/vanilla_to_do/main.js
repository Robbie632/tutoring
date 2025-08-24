document.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {

        fetch( `/index/${e.target.id}`, {method:'DELETE'}).then(()=> {
            location.reload();
        })
    }

})