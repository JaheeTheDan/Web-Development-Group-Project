
function showUserFrequency(){
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));

    
    for (const user in registrationData){
        if (user === 'admin'){
            continue;
        }
        console.log(user);
        
    }

}


showUserFrequency();