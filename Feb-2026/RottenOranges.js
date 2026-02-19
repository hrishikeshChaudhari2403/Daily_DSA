/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let q=[];
    let head=-1;
    let n=grid.length;
    let m=grid[0].length
    let visited=Array.from({length:n},()=>Array(m).fill(false));
    let ans=0;
    let direction=[[-1,0],[1,0],[0,-1],[0,1]];
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(grid[i][j]===2){

                
                    q.push([i,j])
            }
        }
    }
    while(head<q.length-1){
         let temp = q.slice(head + 1);

         let rotted = false;
        for(let [n1,m1] of temp){

           
            head++;
       
         
            for(let i of direction){
                let k1=n1+i[0];
                let k2= m1+i[1];
                if((k1>-1 &&k2>-1) &&(k1<n && k2<m)  ){

                    if(grid[k1][k2]!==0 && grid[k1][k2]!==2){
                        grid[k1][k2]=2;

                            q.push([k1,k2]);
                            rotted = true;
                   

                    }
                
                }
            }
        }
       if(rotted) ans++;
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if( grid[i][j]===1 ){

              return -1;
            }
        }
    }
    return ans;

};