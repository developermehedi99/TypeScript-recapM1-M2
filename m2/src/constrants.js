{
    var person = "bike";
    var person2 = "car";
    var getPropertyValue = function (obj, key) {
        return obj[key];
    };
    var user = {
        mog: "mog",
        mal: "asber potro"
    };
    var result = getPropertyValue(user, "mog");
    console.log(result);
}
