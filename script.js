document.getElementById('donation-btn').addEventListener('click' , function(){

    const donate = getElementsByInput('add-money-noakhali')
    const mainbalanceN = getElementByText('noakhali-donation')
    const Balance = getElementByText('totalBalance')
    
    if(donate > 0 && Balance > 0){
        const originalBanlance = mainbalanceN + donate
        document.getElementById('noakhali-donation').innerText = originalBanlance

        const newBalances = Balance - donate
        document.getElementById('totalBalance').innerText = newBalances;
        document.getElementById('my_modal_1').showModal();
    } 
    else{
        alert('Wrong input')
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
        document.getElementById('my_modal_2').showModal();
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
        document.getElementById('my_modal_3').showModal();
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
        document.getElementById('my_modal_5').showModal()


        const historytab = document.createElement('div')
        historytab.className ='bg-white p-3 rounded-md ';

        historytab.innerHTML = `
           <p class="text-xl">${new Date().toLocaleDateString()}</p>
        `;
        const historycontainer = document.getElementById('history-section')
        historycontainer.insertBefore(historytab, historycontainer.firstChild)
    }
    else{
        alert('Something is not right!')
    } 
})

// history tab functionality
const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')
historyTab.addEventListener('click', function(){

    historyTab.classList.add('bg-primaryr', 'text-black' ,)
    donationTab.classList.remove('bg-primaryr')

    document.getElementById('cards').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
})
