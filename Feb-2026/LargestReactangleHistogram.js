/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n=heights.length;
  
    let left=new Array(n).fill(-1);
    let right=new Array(n).fill(-1);
    let stack=[];
    for(let i=0;i<n;i++){
        if(stack.length===0){
            stack.push(i);
            continue;
        }
        if(heights[stack[stack.length-1]]>heights[i]){
            while(heights[stack[stack.length-1]]>heights[i] && stack.length!==0){
                let k1=stack[stack.length-1];
                right[k1]=i-1;
                stack.pop();

            }
        }
        
        stack.push(i);

    }
    while(stack.length!==0){
          let k1=stack[stack.length-1];
                right[k1]=n-1;
                stack.pop();
    }

    let stack2=[];
    //right

     for(let i=n-1;i>=0;i--){
        if(stack2.length===0){
            stack2.push(i);
            continue;
        }
        if(heights[stack2[stack2.length-1]]>heights[i]){
            while(heights[stack2[stack2.length-1]]>heights[i] && stack2.length!==0){
                let k1=stack2[stack2.length-1];
                left[k1]=i+1;
                stack2.pop();

            }
        }
        
        stack2.push(i);

    }
    while(stack2.length!==0){
          let k1=stack2[stack2.length-1];
                left[k1]=0;
                stack2.pop();
    }

 
    let area=0;
    for(let i=0;i<n;i++){
        area=Math.max((right[i]-left[i]+1)*heights[i],area);

    }
    return area
};   