/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n=nums.length;
    let flag=false;
    let ans=0;
    let lastWindow=0;
    let farthest=0;
    for(let i=0;i<n-1;i++){
     
        farthest=Math.max(farthest,nums[i]+i);
        if(i===lastWindow){
            ans++;
            lastWindow=farthest

        }
        
    }
    return ans;
};