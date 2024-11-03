{
  type Mans = {
    name:string;
    hand:number;
    leg:number;
    nicelook?:string;
    body:string;
    spkeak:true
  };

  const man1 : Mans = {
    name:"manus2",
    hand:2,
    leg:2,
    body:'206 har and monso diya',
    spkeak:true
  }

  const man2 : Mans = {
    name:"manus2",
    hand:2,
    leg:2,
    body:'206 har and monso diya',
    spkeak:true
  }

  type AddAliceType = (a:number, b:number) => number;
  const add : AddAliceType = (sum1 , sum2) => sum1 + sum2;
  
  add(34, 53)

  type Alice = {
    readonly id: number;
    name: string;
    age: number;
    job: string;
    address?: string;
  };
  
  const alice: Alice = {
    id: 1,
    name: "Alice",
    age: 30,
    job: "Developer",
  };

}
