function m2 (){
    
    function f1(){
        var a=5;
        console.log('submodule m2.f1');
        return ':)';
    }
    function g1(){
        var a=6;
        console.log('submodule m2.g1');
        return ':)';
    }

    return {
        f1:f1,
        g1:g1
    }
}

_global.m2=m2();