document.getElementById('donation-btn').addEventListener('click' , function(){

    const donate = document.getElementById('add-money-noakhali').value;
    const mainbalanceN = document.getElementById('noakhali-donation').innerText
    const mainBalanceN = parseFloat(mainbalanceN) ;
    const newdonate = parseFloat(donate)
    
    const originalBanlance = mainBalanceN + newdonate

    document.getElementById('noakhali-donation').innerText = originalBanlance + ""
})