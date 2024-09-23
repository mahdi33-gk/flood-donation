document.getElementById('donation-btn').addEventListener('click' , function(){

    const donate = document.getElementById('add-money-noakhali').value;
    const mainbalanceN = document.getElementById('noakhali-donation').innerText
    const mainBalanceN = parseFloat(mainbalanceN) ;
    const newdonate = parseFloat(donate)
    
    const originalBanlance = mainBalanceN + newdonate

    document.getElementById('noakhali-donation').innerText = originalBanlance + ""
})

// Main ammount




// feni donation
document.getElementById('feni-submit').addEventListener('click' , function(){
    const fenidonate = getElementsByInput('feni-donation-input')
    const fenibalance = getElementByText('feni-balance')

    const newfeni = fenibalance + fenidonate

    document.getElementById('feni-balance').innerText = newfeni
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