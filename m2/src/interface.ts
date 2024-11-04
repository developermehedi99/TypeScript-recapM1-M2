{
    // interface
    type User1 = {
        name:string;
        email:string;
        roll:number
    }
    type UserWithAlice = User1 & {version:string};

    const alim : User1 ={
        name:'alim exam',
        email:'alim@gmail.com',
        roll:2
    }
    const kamil:UserWithAlice={
        name:'kemil exam',
        email:'@kaim.com',
        roll:3,
        version:'2'
    }

    interface Alim2 {
        name:string;
        age:number;
    }
    interface WithalimE extends Alim2 {roll:string};

    const exam2:Alim2={
        name:'inter exam',
        age:12
    }

    const inter : WithalimE={
        name:'i a',
        age:17,
        roll:'onk'
    }
}