/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack=[];
    let n=nums2.length;
    let arr=new Array(n).fill(0);
    for(let i=n-1;i>=0;i--){
        if(stack.length===0){
            arr[i]=-1;

        }
        else if(nums2[i]<stack[stack.length - 1]){
            arr[i]=stack[stack.length - 1];
        }
        
        else{
            let k=stack.length-1;
            let flag=false;
            while(k>=0){
                if(stack[k]>nums2[i]){
                    arr[i]=stack[k]
                    flag=true
                    break;
                }
                k--;
            }
            if(flag===false){

             arr[i]=-1;
            }
        }
            stack.push(nums2[i]);
    }
    let ans=[];
    for(let i=0;i<nums1.length;i++){
        let j=nums2.indexOf(nums1[i]);
        ans.push(arr[j]);
    }
    return ans;
};