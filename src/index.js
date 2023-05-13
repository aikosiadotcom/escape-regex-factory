if(!RegExp.getInstance){
    /**
     * Get escaping instance of RegExp
     * @param  {...any} args 
     * @returns {RegExp}
     */
    RegExp.getInstance = (...args)=>{
        const pattern = args[0];
        args.shift();
        return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),...args);; 
    }
}

