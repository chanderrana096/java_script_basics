let names = ["Hole-in-onw","Eagle","Birdie","Par","Bogey","Double Bogey","Change me"];
function golfscore(par,stokes){
    if(stokes == 1){
        return names[0];
    }
    else if(stokes <= par-2){
        return names[1];
    }
    else if(stokes == par-1){
        return names[2];
    }
    else if(stokes == par){
        return names[3];
    }
    else if(stokes == par+1){
        return names[4];
    }
    else if(stokes == par+2){
        return names[5];
    }
    else if(stokes >= par+3){
        return names[6];
    }
}
console.log(golfscore(4,10))
