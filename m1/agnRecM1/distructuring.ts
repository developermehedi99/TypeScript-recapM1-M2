{
    // destructuring
    const user ={
        name:'hasan',
        age:44,
        address:{
            dis:'rajshahi',
            coun:'bd',
            live:{
                village:'borobariya',
                pession:'dev'
            }
        }
    }

    const {name, address:{dis}, address:{live:{pession}}} = user;


    const mySkills:string[] = ['html','css','tailwind','js','react','next','typescript'];
    const [a,b,c,d, ...rest] = mySkills;
}