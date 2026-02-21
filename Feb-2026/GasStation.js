/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let n=gas.length;
    let tot=0;
    let tc=0;
    for(let i=0;i<n;i++){
        tot+=gas[i];
        tc+=cost[i];
    }
    if(tot<tc) return -1;
    tc=0
    let start=0;
    for(let i=0;i<n;i++){
        tc+=gas[i]-cost[i];
        if(tc<0){
            tc=0;
            start=i+1;
        }
    }
    return start;
};