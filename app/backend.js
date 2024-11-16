


function getTotalUserGender(registrationData){
    let totalUserMaleGender = 0;
    let totalUserFemaleGender = 0;
    for (const [user, userInfo] of Object.entries(registrationData)){
        if (user === 'admin'){
            // TODO: Remember to uncomment continue
            // continue;
        }

        totalUserMaleGender += userInfo.gender === 'Male'? 1 : 0;
        totalUserFemaleGender += userInfo.gender === 'Female'? 1 : 0;
    }

    return {Male: totalUserMaleGender, Female: totalUserFemaleGender}
}
function showUserFrequency(){
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));

    const totalUsers = Object.keys(registrationData).length;
    let totalUserMaleGender = 10;
    let totalUserFemaleGender = 20;

    
    for (const [user, userInfo] of Object.entries(registrationData)){
        // if (user === 'admin'){
        //     continue;
        // }
        console.log(userInfo);
        
        totalUserMaleGender += userInfo.gender === 'Male'? 1 : 0;
        totalUserFemaleGender += userInfo.gender === 'Female'? 1 : 0;

        console.log(`Total Male Gender: ${totalUserMaleGender}`);
        console.log(`Total Female Gender: ${totalUserFemaleGender}`);
    }


    
}


const registrationData = JSON.parse(localStorage.getItem('registrationData'));


new Chart(document.getElementById('totalUserGenderChart'), {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Totol User Gender',
            data: getTotalUserGender(registrationData),
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                labels :{
                    boxWidth:0
                },
                onClick : () => {},
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                offset: false
            }

        }
    }
})
