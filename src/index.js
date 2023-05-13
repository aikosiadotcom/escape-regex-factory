if(!RegExp.getInstance){
    RegExp.getInstance = (...args)=>{
        const pattern = args[0];
        args.shift();
        return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),...args);; 
    }
}

