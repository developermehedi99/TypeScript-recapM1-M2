{
    // union type
    type FrontendDeveloper= 'react fronend developer' | 'lavaral frontend developer';

    const newDeveloper:FrontendDeveloper = 'react fronend developer';
    
    type Mans ={
        name:string;
        email:string;
        gender: 'male' | 'female';
        blaod: 'A+'| 'A-'|'B+';
    }
    const users: Mans ={
        name:'dew',
        email:'slfj',
        gender:'male',
        blaod:'B+'
    }

    type FDeveloper = 'Frontend';
    type BDeveloper = 'Backend';

    type FullStack = FDeveloper & BDeveloper;

    // 
}