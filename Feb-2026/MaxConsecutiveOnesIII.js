/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let countOne=0;
    let n=nums.length;
    let left=0;
    let right=0;
    let ans=0;
    let maxCnt=0;
    while(right<n){
        if(nums[right]===1)countOne++;

        maxCnt=Math.max(maxCnt,countOne);
        while((right - left + 1)-maxCnt > k){
            if(nums[left]===1) countOne--;
            
            left++;
        }
        ans=Math.max(ans,right-left+1)
        right++;
    }
    return ans;
};