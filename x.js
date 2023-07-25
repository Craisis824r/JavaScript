function x(element, i) {
    let List = [];

    let obj = element[i]
    obj = JSON.stringify(obj)
    let res = obj.slice(1, -1)
    List.push(res)

    return List
}