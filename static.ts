class Utils {
    static cloneObject(object: Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

const tenisNike: {marca:string, color:string, size:number } = {
    marca: "Nike",
    color: "blue",
    size: 42
};
const tenisAdidas: {marca:string, color:string, size:number } = {
    marca: "Adidas",
    color: "Yellow",
    size: 42
};
console.log(Utils.cloneObject([tenisNike, tenisAdidas]));