export const countFormat = (count) =>{
    if(count<0) return "";
    if(count>=0 && count<10000) return count;
    if(count>=10000){
        if(count/1000000000 >= 1){
            return Math.floor(count/100000000)/10+"B"
        }else if(count/1000000 >= 1){
            return Math.floor(count/100000)/10+"M"
        }else{
            return Math.floor(count/1000)+"K"
        }
    }
};

export const imageSizeFormat = (imageUrl,size) => 
    `${imageUrl}?param=${size}x${size}`;