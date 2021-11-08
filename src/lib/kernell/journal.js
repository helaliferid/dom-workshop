export const journal = {
    mois:'Janvier',
    totalDebit:0,
    totalCredit:0,
    render:function(){
        'journal rendering';
    },
    toString:function(){
        console.log(`Journal : ${this.mois}`);
    }
}