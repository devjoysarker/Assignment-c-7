
let total = 0;

family.map(data  => {

    console.log(`
    ID            : ${data.id} 
    Name          : ${data.Name} 
    Skill         : ${data.skill} 
    Location      : ${data.Location} 
    Gender        : ${data.Gender} 
    Fee           : ${data.fee} 
    Age           : ${data.age} 

    `);
    total = total + data.fee

});

console.log(`
Total fee : ${total}

`);