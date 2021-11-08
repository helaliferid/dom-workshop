module.exports = class Account{
    constructor(code,label,accountClass){
        this.code=code;
        this.label=label;
        this.accountClass=accountClass;
    }

    get Code(){
        return this.code;
    }

    set Code(value){
        if(typeof value ==='string' && value.length>4){
            this.code=value;
        }else{
            throw new Error('Error: value passed must be string with length greater then 4 chars')
        }
    }

    get Label(){
        return this.label;
    }

    set Label(value){
        if(typeof value ==='string' && value.length>80){
            this.label=value;
        }else{
            throw new Error('Error: value passed must be string with length greater then 80 chars')
        }
    }

    get AccountClass(){
        return this.accountClass;
    }

    set AccountClass(value){
        if(typeof value ==='string' && value.length===1){
            this.accountClass=value;
        }else{
            throw new Error('Error: value passed must be string with length equal à 1 char')
        }
    }

    toString (){
        return `
         {
            code:${this.code},
            code:${this.label},
            code:${this.accountClass},
        }`;
    }
}

