   count=0;
    for(let i=0;i<N;i++){
     if(B[i]!=B[0]){
      count++
     }
    }if(count==0){
    console.log("Single Type")
    }else{
    console.log("Mixed Basket")
    }