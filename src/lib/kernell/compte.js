export class Account{
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
            this.value=value;
        }else{
            Thr
        }
    }
}

