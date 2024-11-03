{
    type Admin = {work:string;role:string;}
    type Member = {isJob:boolean;salary:number}
    type PageOwner = Admin & Member;
    
    type pageEditor = Admin | Member;

    const pages:PageOwner = {
        work:'post',
        role:'admin',
        isJob:true,
        salary:3050
    }
}