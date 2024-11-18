function getTotalUserGender(registrationData) {
    let genders = {Male: 0, Female:0};

    for (const [user, userInfo] of Object.entries(registrationData)) {
        if (user === "admin") {
            // TODO: Remember to uncomment continue
            // continue;
        }
        genders[userInfo.gender] = userInfo.gender in genders ? genders[userInfo.gender]+1 : 1;
    }
    return genders;
}

// TODO: Make more dynamic when it comes to multiple genders
function getUserAgeGroup(registrationData) {
    let differentAgeGroups = ["18-20", "21-30", "31-40", "41-50", "51-60", "61+"];

    let ageGroups = {};
    for (const group of differentAgeGroups) {
        ageGroups[group] = { maleAgeGroup: 0, femaleAgeGroup: 0, totalAgeGroup: 0 };
    }

    for (const [user, userInfo] of Object.entries(registrationData)) {
        if (user === "admin") {
            // TODO: Remember to uncomment continue
            // continue;
        }
        let age = userInfo.age;

        if (age >= 18 && age <= 20) {
            ageGroups["18-20"].maleAgeGroup += userInfo.gender === "Male" ? 1 : 0;
            ageGroups["18-20"].femaleAgeGroup += userInfo.gender === "Female" ? 1 : 0;
            ageGroups["18-20"].totalageGroup++;
        } else if (age >= 21 && age <= 30) {
            ageGroups["21-30"].maleAgeGroup += userInfo.gender === "Male" ? 1 : 0;
            ageGroups["21-30"].femaleAgeGroup += userInfo.gender === "Female" ? 1 : 0;
            ageGroups["21-30"].totalAgeGroup++;
        } else if (age >= 31 && age <= 40) {
            ageGroups["31-40"].maleAgeGroup += userInfo.gender === "Male" ? 1 : 0;
            ageGroups["31-40"].femaleAgeGroup += userInfo.gender === "Female" ? 1 : 0;
            ageGroups["31-40"].totalAgeGroup++;
        } else if (age >= 41 && age <= 50) {
            ageGroups["41-50"].maleAgeGroup += userInfo.gender === "Male" ? 1 : 0;
            ageGroups["41-50"].femaleAgeGroup += userInfo.gender === "Female" ? 1 : 0;
            ageGroups["41-50"].totalAgeGroup++;
        } else if (age >= 51 && age <= 60) {
            ageGroups["51-60"].maleAgeGroup += userInfo.gender === "Male" ? 1 : 0;
            ageGroups["51-60"].femaleAgeGroup += userInfo.gender === "Female" ? 1 : 0;
            ageGroups["51-60"].totalAgeGroup++;
        } else if (age >= 61) {
            ageGroups["51-60"].maleAgeGroup += userInfo.gender === "Male" ? 1 : 0;
            ageGroups["51-60"].femaleAgeGroup += userInfo.gender === "Female" ? 1 : 0;
            ageGroups["51-60"].totalageGroup++;
        }
    }

    return ageGroups;
}


const registrationData = JSON.parse(localStorage.getItem("registrationData"));

new Chart(document.getElementById("totalUserGenderChart"), {
    type: "bar",
    data: {
        datasets: [
            {
                label: "Total User Gender",
                data: getTotalUserGender(registrationData),
                backgroundColor: ["rgba(54, 162, 235, 0.4)", "rgba(255, 99, 132, 0.4)", "#B7B7B766"],
                borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)", "#B7B7B7"],
                borderWidth: 2,
            },
        ]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                labels: {
                    boxWidth: 0,
                    font: {
                        size: 36,
                    },
                },
                onClick: () => { },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                offset: false,
            },
        },
    },
});



let data = [];
for (const [groupName, groupData] of Object.entries(getUserAgeGroup(registrationData))) {
    data.push({x : groupName,
        maleAgeGroup : groupData.maleAgeGroup,
        femaleAgeGroup : groupData.femaleAgeGroup,
        totalAgeGroup : groupData.totalAgeGroup
    });
}

new Chart(document.getElementById("userAgeGroupChart"), {
    type: "bar",
    data: {
        datasets: [
            {
                label: "Male Age Group",
                data: data,
                parsing: {
                    yAxisKey: "maleAgeGroup",
                },
            },
            {
                label: "Female Age Group",
                data: data,
                parsing: {
                    yAxisKey: "femaleAgeGroup",
                },
            },
            {
                label: "Total Age Group",
                data: data,
                parsing: {
                    yAxisKey: "totalAgeGroup",
                },
            }
        ],
    },
    options: {
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                offset: false,
            },
        },
    },
});
