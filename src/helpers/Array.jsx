module.exports = {

    spliceArray(arr, index, number) {

        var arrOfVals = (typeof arr === 'string') ? arr.split('') : arr;
        arrOfVals.splice(index , number);
        return arrOfVals;
    }
}
