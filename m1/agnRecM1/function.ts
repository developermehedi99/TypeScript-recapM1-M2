{
    // function
    function numbers(a:number, b:number):number{
        return a + b;
    }
    numbers(23,34)

    const total =(income:number, khoroch:number):number=>{
        return income - khoroch;
    }

    total(323,23);


    const user = {
        name:'rana',
        age:44,
        balance:20,
        addBalance(balance:number):string{
            return (`my new balance is ${this.balance + balance}`);
        }
    }

    const arrays:number[] = [1,4,6,8];
    const newArray:number[] = arrays.map((elem:number):number  => elem * elem);
}