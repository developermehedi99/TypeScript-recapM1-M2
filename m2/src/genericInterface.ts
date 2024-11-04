{
    // interface generic type
    interface Developer<T,X=null> {
        name:string,
        passion:{
            job:boolean;
            salary:number;
            pc:string
        }
        smartwatch: T,
        bike?:X
    }

    type porWatch = {
        brand:string;
        processor:string;
    }

    const poorDeveloper : Developer<porWatch> = {
        name:'rana khan',
        passion:{
            job:true,
            salary:100000,
            pc:'gigabyte'
        },
        smartwatch:{
            brand:'asus',
            processor:'cora i5',
        }
    }

    interface richWatch{
        brand:string;
        processor:string;
        price:number
    }
    type bikeJon = {brand:string, engine:string}

    const richDeveloper : Developer<richWatch,bikeJon > = {
        name:'mehedi hasan',
        passion:{
            job:true,
            salary:500000,
            pc:'Hp'
        },
        smartwatch:{
            brand:'apple',
            processor:'best p',
            price:3000
        },
        bike:{
            brand:'yamaha',
            engine:'100cc'
        }
    }
}