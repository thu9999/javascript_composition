/**
 * Define all methods
 * Return an object with methods and properties
 */ 

 // Return an object having method walk();

const walk = ({ name }) => ({
    walk: () =>  console.log(`${name} can walk!`)
});


const eat = ({ name }) => ({
    eat: () =>  console.log(`${name} can eat!`)
});

const swim = ({ name }) => ({
    swim: () => console.log(`${name} can swim!`)
});

const fly = ({ name }) => ({
    fly: () => console.log(`${name} can fly!`)
});

const ButterFlyCreator = (name) => ({
    name,
    ...eat({ name }),
    ...fly({ name })
});

const DogCreator = (name) => ({
    name,
    ...eat({ name }),
    ...walk({ name }),
    ...swim({ name })
});

const CatCreator = (name) => ({
    name,
    ...eat({ name }),
    ...walk({ name })
});

