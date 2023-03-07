function capitalizeProperties(jsonString) {
    const obj = JSON.parse(jsonString);
    const capitalizedObj = {};

    for (let key in obj) {
        capitalizedObj[key.toUpperCase()] =
            typeof obj[key] === "string" ? obj[key].charAt(0).toUpperCase() + obj[key].slice(1).toLowerCase() : obj[key];
    }

    return capitalizedObj;
}

const jsonString = '{"firstName": "john", "lastName": "doe"}';
const capitalizedObj = capitalizeProperties(jsonString);
console.log(capitalizedObj);

