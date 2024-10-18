let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let text = document.querySelector('.text')


btn.addEventListener('click', () => {
    let inputValue = input.value;
    if (inputValue.trim()) {
        const li = document.createElement('li')
        li.textContent = inputValue


        const delBtn = document.createElement('button')
        delBtn.textContent = 'del'
        delBtn.classList.add('delBtn')

        delBtn.addEventListener('click', () =>{
            text.removeChild(li)
        })


        li.appendChild(delBtn)
        text.prepend(li)
        li.addEventListener('click', () =>{
            li.style.textDecoration = 'line-through'
            
        })
    }
    input.value = ''
})