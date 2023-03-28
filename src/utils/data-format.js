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

export const musicUrlFormat = (id) => {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export const tranStrToCharArr = (str)=>{
    const arr = []; 
    for(let i of str){  
        arr.push(i);
    };
    return arr;
}

export const lyricSplitter = (lyric) => {
    const lineLyrics = lyric.split("\n");
    const patten = /^\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
    const lyrics = [];
    for(let line of lineLyrics){
        if(line){
            const timeArr = patten.exec(line);
            const totalTime = timeArr[1]*60*1000+timeArr[2]*1000+(timeArr[3].length>2?timeArr[3]*1:timeArr[3]*10);
            const content = line.replace(patten,"").trim();
            const lyricObj = {totalTime,content};
            lyrics.push(lyricObj);
        } 
    } 
    return lyrics; 
}