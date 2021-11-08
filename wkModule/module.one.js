function m1 (){
    
    function f1(){
        var a=5;
        console.log('submodule m1.f1');
        return ':)';
    }
    function g1(){
        var a=6;
        console.log('submodule m1.g1');
        return ':(';
    }

    return {
        f1:f1,
        g1:g1
    }
}

_global.m1=m1();