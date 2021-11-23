var btn = document.getElementById('inpBtn')

btn.addEventListener('click' , function() {

    event.preventDefault()

    var inp = document.getElementById('inpBox').value
    console.log(document.getElementById('inpBox').innerHTML)

    var newTsk = document.createElement('li')
    newTsk.innerHTML = inp
    
    var ull = document.getElementById('1ul')
    ull.appendChild(newTsk)

    console.log(newTsk)
    console.log(inp)

})

