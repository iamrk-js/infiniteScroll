let cl = console.log;

// window > document > body

// condition >> scrollTop + clientHeight >= scrollHeight - 300
const main = document.getElementById('main')
window.addEventListener('scroll', () => {
    cl(`ScrollTop ${document.documentElement.scrollTop} 
        cientHeight ${document.documentElement.clientHeight}
        scrollHeight ${document.documentElement.scrollHeight}`)
    
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    if(scrollTop + clientHeight >= scrollHeight - 300){
        let section = document.createElement('section');
        section.innerHTML = "On the fly section element"
        for (let i = 0; i < 6; i++) {
            main.append(section)
        }
    }
})