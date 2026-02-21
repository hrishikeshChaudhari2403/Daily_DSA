/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n=nums.length;
    if(n==1) return true;
    let ans=0
    for(let i=0;i<n;i++){
        
        if(i>ans) break;
        else if(ans<(i+nums[i])){
            ans=i+nums[i];
        }
        if(ans>=n-1) return true;
    }
    return false
};