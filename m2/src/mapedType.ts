{
    const arryofNumbers : number[] = [23,45,77,98,11];
    const convertNumtosting: string[] = arryofNumbers.map(num => num.toString());
    console.log(convertNumtosting);

    type AreaNum = {height:number;width:number;}
    type AreaSting = {
        [key in keyof AreaNum] : string;
    }
    type AreaString1<T> = {
        [key in keyof T] : T[key]
    }
    const Area1 : AreaString1<{height:string; width:number}> = {
        height:'23',
        width:23
    }
}