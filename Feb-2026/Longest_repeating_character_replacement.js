var characterReplacement = function(s, k) {
    let arr=new Array(26).fill(0);
    let n=s.length;
    let ans=0;
    let left=0;
    let maxF=0;
    for(let i=0;i<n;i++){
        let ch=s.charCodeAt(i)-65;
        arr[ch]++;
        
        maxF=Math.max(maxF,arr[ch]);
        while((i-left+1)-maxF >k){
            arr[s.charCodeAt(left)-65]--;
            left++;
        }
        ans=Math.max(ans,i-left+1);
    }
    return ans;
};