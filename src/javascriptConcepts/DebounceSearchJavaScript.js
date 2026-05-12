function debounce (fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer= setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}

const debounceSearch = debounce(search, 1000);

function search (query){
    console.log("APi call for:", query)
}


//post run 1 second the hello comes means when user stops typing for 1 second it searches
debounceSearch("h");
debounceSearch("he");
debounceSearch('hel');
debounceSearch("hell");
debounceSearch("hello")