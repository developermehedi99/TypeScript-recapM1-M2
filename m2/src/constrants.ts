{
    // generic constraints
    type Malpati={
        bike:string;
        car:string;
        ship:string
    }

    type Owner = "bike" | "car" | "ship";
    type Owner2 = keyof Malpati;

    const person:Owner = "bike";
    const person2:Owner2="car";

    const getPropertyValue =<X, Y extends keyof X>(obj:X,key: Y)=>{
        return obj[key]
    }
    
    const user={
        mog:"mog",
        mal:"asber potro"
    }

    const result = getPropertyValue(user, "mog")
    console.log(result);
}