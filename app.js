const filterOutOdds = (...args) => args.filter((num) => num %2 ===0);

const findMin = (...args) => Math.min(args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((num) => num *2)];

const removeRandom = (items) => {
    let random = Math.floor(Math.random()*items.length);
    return [...items.slice(0,random), ...items.slice(random+1)];
}

const extend = (array1,array2) => ([...array1, ...array2]);

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val})

const removeKey = (obj, key) => {
    newObj = {...obj};
    delete newObj[key];
    return newObj;
}
const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj,key,value) => ({...obj, [key]:value});