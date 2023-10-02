//object
// const MyBio = {
//     name: "Ivan Valiant Santoso",
//     age: 23,
//     isMarried: false,
// }

// myBio = ["Ivan Valiant Santoso", 23, false]

// console.log(myBio)

//Array of object
const talent = [
    {
        id: 1,
        name: "Mei Kristian Laoli",
        isVip: false
    },
    {
        id: 2,
        name: "Ivan",
        isVip: true
    },
    {
        id: 3,
        name: "Silvi",
        isVip: false,
        hobby: [
            {
                id: 1,
                name: "tiktokan",
            },
            {
                id: 2,
                name: "rebahan",
            }
        ]
    }
]

//cth: mau panggil name dari silvi dgn array diatas
// console.log(talent[2].name)

//cth: mau panggil hobby tiktokan dari silvi
// console.log(talent[3].hobby[0].name)

//jika data array banyak dan mau panggil data yang perlu dicek ada atau tidak
// console.log(talent[3]?.hobby[0]?.name)

//URL Object
// image = URL.createObjectURL(image[0])