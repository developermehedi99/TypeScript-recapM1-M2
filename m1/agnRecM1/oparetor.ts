{
    const pleys1 : string[] = ['tamim','kayes','siddique','asraful'];
    const pleys2 : string[] = ['shakib','mushfiq','riyad','shafiul','arajjik'];

    pleys1.push(...pleys2);

    const pleyarList:string[] = [...pleys1, ...pleys2];

    const paniyo = {
        pani1:'balck horse',
        pani2:'mountain dew',
        pani3:'spreed'
    };
    const vat = {
        vat:'sada vat',
        pulao:'pulao vat'
    }

    const eatingItem = {...paniyo, ...vat};


    const getfrinds =(...frinds:string[])=>{
        frinds.forEach(frind=> console.log(frind))
    }
    getfrinds('ami','tumi','se','tara','allthat','all');
}

