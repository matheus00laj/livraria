let tabelaLivros = document.querySelector('#livros');
tabelaLivros.addEventListener('click', (event)=>{
    let elementClicked = event.target;

    if(elementClicked.dataset.type == 'remove'){
        let livroId = elementClicked.dataset.ref;
        fetch(`http://loclahost:3000/livros/${livroId}`, { method: 'DELETE'})
        .then((response)=>{

            let tr = elementClicked.closest(`#livro_${livroID}`);
            tr.remove();
        }).catch((err)=>{
            console.log(err);
        })
    }
})