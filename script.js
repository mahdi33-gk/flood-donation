document.getElementById('donation-btn').addEventListener('click' , function(){

    const donate = getElementsByInput('add-money-noakhali')
    const mainbalanceN = getElementByText('noakhali-donation')
    const Balance = getElementByText('totalBalance')
    
    if(donate > 0 && Balance > 0){
        const originalBanlance = mainbalanceN + donate
        document.getElementById('noakhali-donation').innerText = originalBanlance

        const newBalances = Balance - donate
        document.getElementById('totalBalance').innerText = newBalances
    } 
})

// Main ammount




// feni donation
document.getElementById('feni-submit').addEventListener('click' , function(){
    const fenidonate = getElementsByInput('feni-donation-input')
    const fenibalance = getElementByText('feni-balance')
    const Balance = getElementByText('totalBalance')

    if(fenidonate > 0 && Balance > 0 ){
        const newfeni = fenibalance + fenidonate

        document.getElementById('feni-balance').innerText = newfeni
        const nrwBalance = Balance - fenidonate
        document.getElementById('totalBalance').innerText = nrwBalance
    }
    else{
        alert('Are you drunk buddy?')
    }
})

// quata movement
document.getElementById('quata-submit').addEventListener('click' , function(){
    const quatavata = getElementsByInput('quata-input')
    const quatabalance = getElementByText('quata-balance')
    const Balance = getElementByText('totalBalance')

    if(quatavata > 0 && Balance > 0 ){
        const newQuata = quatavata + quatabalance

        document.getElementById('quata-balance').innerText = newQuata
        const nrwBalance = Balance - quatavata
        document.getElementById('totalBalance').innerText = nrwBalance
    }
    else{
        alert('something is not right!')
    }
})

// gopalganj !donation
document.getElementById('gopalganj-submit').addEventListener('click', function(){
    const gopaldonate = getElementsByInput('gopalganj-input')
    const gopalganj = getElementByText('gopalganj-balance')
    const Balance = getElementByText('totalBalance')

    if(gopaldonate > 0 && Balance >0){
        const newBalance = gopaldonate + gopalganj

        document.getElementById('gopalganj-balance').innerText = newBalance
        
        
        const nrwBalance = Balance -gopaldonate
        document.getElementById('totalBalance').innerText = nrwBalance
    }
    else{
        alert('Something is not right!')
    }
})