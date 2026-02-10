/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let odd=0;
    let even=0;
    let n=nums.length;
    let ans=0;
    for(let i=0;i<n;i++){
        let map=new Map();
        odd=0;
        even=0;
        if(nums[i]%2===0) even++;
        else odd++;
        map.set(nums[i],(map.get(nums[i])||0)+1);
        for(let j=i+1;j<n;j++){

            if(nums[j]%2===0 && !map.has(nums[j])) even++;
            else if(!map.has(nums[j])) odd++;
                    map.set(nums[j],(map.get(nums[j])||0)+1);
            if(even===odd){
                ans=Math.max(ans,j-i+1);
            }
        }
    }
    return ans;
};