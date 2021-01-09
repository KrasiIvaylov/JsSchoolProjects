function gladiator(lostFights, helmet, sword, shield, armor ){

    let expenses = 0;
    let broken = 0;

    for (let i = 1; i <= lostFights; i++) {
       
        if(i % 2 == 0){
            expenses += helmet;
        }
        if(i % 3 == 0){
            expenses += sword;
        }
        if(i % 2 == 0 && i % 3 == 0){
            expenses += shield;
            broken++;
            if(broken == 2){
                expenses += armor;
                broken = 0;
            }
        }
    }


    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(23,
    12.50,
    21.50,
    40,
    200
    );