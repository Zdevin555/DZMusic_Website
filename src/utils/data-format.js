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
    `${imageUrl}?param=${size}y${size}`;

export const imageBlurFormat = (imageUrl) => {
    const start = imageUrl.lastIndexOf('/')+1;
    const end = imageUrl.length-4;
    const imgId = imageUrl.slice(start,end);
    return `https://music.163.com/api/img/blur/${imgId}`;
}

export const dateFormat = (time,fmt) =>{
    let date = new Date(time);
    if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
    }
    let o = {
        'M+':date.getMonth()+1,
        'd+':date.getDate(),
        'h+':date.getHours(),
        'm+':date.getMinutes(),
        's+':date.getSeconds()
    };
    for (let k in o){
        if(new RegExp(`(${k})`).test(fmt)){
            let str = o[k]+'';
            fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str:padLeftZero(str));
        }
    }
    return fmt;
}

const padLeftZero = (str) =>{
    return ('00'+str).substr(str.length);
}

export const getMusicUrl = (id) => {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}