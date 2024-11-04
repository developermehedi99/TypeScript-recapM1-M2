"use strict";
var _a, _b;
{
    const age = 27;
    const result = age >= 18 ? "is not adalt" : "adalt";
    console.log(result);
    const learner = {
        name: "mehedi",
        address: {
            city: "rajshahi",
            village: "barbaria",
            presentAddress: "6201,raj,bD",
        },
        country: "Bangladesh",
    };
    const permenantAddress = (_b = (_a = learner === null || learner === void 0 ? void 0 : learner.address) === null || _a === void 0 ? void 0 : _a.permenantAddress) !== null && _b !== void 0 ? _b : "not a permenant address";
    console.log(permenantAddress);
    let username = undefined;
    let displayName = username !== null && username !== void 0 ? username : "Guest";
    console.log(displayName); // Output: "Guest"
}
