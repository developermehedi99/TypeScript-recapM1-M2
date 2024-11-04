{
    // generic type
    
    type GenericArray<T> = Array<T>;
    // const division : Array<string> = ['rajshahi', 'dhaka', 'silet','borisal','chattogram','khulna'];
    const division : GenericArray<string>= ['rajshahi', 'dhaka', 'silet','borisal','chattogram','khulna'];

    // const diviNumbers: Array<number> = [1,,3,6,7,8,4];
    // const diviNumbers : number[] = [1,3,6,7,8,4];
    const diviNumbers : GenericArray<number>= [1,3,6,7,8,4];

    // const isDivi : Array<boolean> = [true,false,true];
    const isDivi : GenericArray<boolean> = [true,false,true];

    type GenericTuple<X,Y> = [X , Y]
    const manus: GenericTuple<string, string> = ['M.x', 'M.y'];
    const users: GenericTuple<number,{name:string,gamil:string}> = [23, {name:'ranna',gamil:'@gmal.com'}]
}