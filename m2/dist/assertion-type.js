"use strict";
{
    // type assertion
    let learner;
    learner = 'typescript developer';
    learner = 24;
    // (learner as string).
    const kgtoGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = kgtoGm(2);
    const result2 = kgtoGm('100');
    console.log(result1, result2);
}
