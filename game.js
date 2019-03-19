const buttons = document.querySelectorAll('.button')
console.log(buttons)



let clickCount = 0
function toggleButton() {
    if (this.classList.contains('zero') ) {
        
        if(clickCount%2 === 0){
            this.classList.remove('zero')
            this.classList.add('naughts')
            this.innerText = 'O'
            clickCount++;
            const naughts = document.querySelectorAll('.naughts')
            let naughtsPosition = '';
            naughts.forEach(naught => {
               
                console.log('this is the one', naughtsPosition += naught.id)
                if(naughtsPosition === '123'){alert('naughts wins')}
            
            })
          console.log(clickCount)
        } else {
            this.classList.remove('zero')
        this.classList.add('crosses')
        this.innerText = 'X'
        clickCount++;
        const crosses = document.querySelectorAll('.crosses')
        let crossesPosition = '';
        crosses.forEach(cross => {
           
            console.log('this is the one', crossesPosition += cross.id)
            if(crossesPosition === '123'){alert('crosses wins')}
        
        })
        console.log(clickCount)
        }   
    }
    else if (this.classList.contains('crosses') ) {
        this.classList.contains('crosses')
    }
    else if (this.classList.contains('naughts') ) {
        this.classList.contains('naughts')
    }
   
    
    



}


buttons.forEach(button => {
    button.addEventListener('click', toggleButton)

})