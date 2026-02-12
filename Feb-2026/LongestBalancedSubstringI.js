/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    let n=s.length;
    let j=0;
    let ans=1;
    for(let i=0;i<n;i++){
        let arr=new Array(26).fill(0)
        let ch=s.charCodeAt(i)-97;
       arr[ch]++;
       for(let j=i+1;j<n;j++){
            let ch1=s.charCodeAt(j)-97;
            // if(arr[])
            arr[ch1]++;
            let prev=0
            let flag=1;
            for(let k=0;k<26;k++){
                if(arr[k]===0) continue;
                if(prev===0){
                    prev=arr[k];
                }
                else if(arr[k]!=prev){
                    flag=0;
                    break;
                }
                
            }
            if(flag==1){

                ans=Math.max(ans,j-i+1);
            }
       }

    }
    return ans;
};