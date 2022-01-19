const ironhacker = {
    firstName: 'Tio',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    worksAt: 'Google',
    isRemote: false
};

// 1: update favoriteLanguage to 'React' 

console.log("Ironhacker: ", ironhacker);

ironhacker.favoriteLanguage = "React";
console.log("Ironhacker: ", ironhacker);

// 2: Update ironhacker's age to 29

ironhacker.age = 29;
console.log("Ironhacker: ", ironhacker);

// 3: Remove the 'isRemote' property

delete ironhacker["isRemote"];
console.log("Ironhacker: ", ironhacker);


// 4: Add a new property: 'didGraduate' and set it to a valid boolean value

ironhacker.didGraduate = true;
console.log("Ironhacker: ", ironhacker);

// 5: list all keys of the ironhacker object

for(let key in ironhacker) console.log(key);

// 6: check if ironhacker has property 'works at'

console.log(ironhacker.hasOwnProperty("worksAt"));
console.log(ironhacker.worksAt !== undefined);
console.log(!!ironhacker.worksAt);