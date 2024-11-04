{
    // function with generic

    const createArr = (param:string) :string[] =>{
        return [param];
    }

    const res1 = createArr('pakistan');

    const createArrayWithGeneric = <T>(param:T) :T[] =>{
        return [param];
    }
    type User = {id:number,name:string,live:string}
    const result2 = createArrayWithGeneric<string>('bangladesh')
    const result3 = createArrayWithGeneric<User>({id:434,name:'khan',live:'village'})



    const createGenericTuple =<T, Q>(param1:T, param2:Q):[T,Q] =>{
        return [param1, param2]
    }
    interface Classedu {srini:string,edu:string}
    const resu = createGenericTuple<string, number>('our', 11);
    const resu10 = createGenericTuple<number,Classedu>(3,{srini:'ten',edu:'madrasah'})





}