"use strict";
{
    const team1 = ['rahim', 'karim', 'abul'];
    const team2 = ['babul', 'kabul', 'dabul'];
    team1.push(...team2);
    console.log(team1);
    const mentor1 = { typescript: 'mezba', redux: 'mir', dbms: 'mizan' };
    const mentor2 = { prisma: 'firoz', next: 'tonmoy', cloud: 'nahid' };
    const mentorsList = Object.assign(Object.assign({}, mentor1), mentor2);
    console.log(mentorsList);
    // rest operator
    const sum = (...skills) => {
        skills.forEach((skill) => console.log(`expert: ${skill}`));
    };
    sum('html', 'css', 'js', 'react', 'node', 'mongodb');
}
