import styled from 'styled-components';

import {REPEAT_MODE} from '@/common/local-data';
import pic1 from '@/assets/img/playlist.png';
import pic2 from '@/assets/img/progress_bar.png';
import pic3 from '@/assets/img/sprite_icon.png';
import pic4 from '@/assets/img/playlist_bg.png';
import pic5 from '@/assets/img/playbar_sprite.png';

export const BarWrapper = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    right:0;
    height:70px;
    background-position:0 0;
    background-repeat:repeat;
    background-size: 200px auto;
    
    outline:1px solid red;
    
    .bar-position{
        position:absolute;
        left:50%;
        top:50%;
        transform:translateX(-50%) translateY(-50%);
        padding-top:8px;

        .bar-content{   
            display:flex;
            width:1080px;
            justify-content:space-between;
            align-items:center;
            z-index:11;

            button{
                background-color:transparent;
                border:none;
                cursor:pointer;
            }

            .bar-left{
                display:flex;
                align-items:center;
            }

            .bar-right{
                flex:1;
                padding-left:30px;
                display:flex;
                align-items:center;
                justify-content:space-between;
                position:relative;

                .lyrics{
                    width: 21px;
                    height: 21px;
                    background-position: -136px -555px;
                    background-size:167px auto;
                    :hover{
                        background-position: -136px -582.5px;
                    }
                }

                .favor{
                    width: 20px;
                    height: 20px;
                    background-position: -101px -182px;
                    background-size:167px auto;
                    :hover{
                        background-position: -101px -210.7px;
                    }
                }

                .share{
                    width: 20px;
                    height: 20px;
                    background-position: -129px -182px;
                    background-size:167px auto;
                    :hover{
                        background-position: -129px -210.5px;
                    }
                }

                .volume{
                    width: 23px;
                    height: 24px;
                    background-position: -4px -274px;
                    background-size:167px auto;
                    position:relative;
                    :hover{
                        background-position: -36px -274px;
                    }

                    .bar-palyer-vol{
                        position:absolute;
                        bottom:43px;
                        right:-3px;
                        z-index:20;
                    }
                }

                .repeat_mode{
                    width: 23px;
                    height: 21px;
                    background-position:${props => {
                        switch(props.repeatMode){
                            case REPEAT_MODE.REPEAT_ONE: 
                                return "-74px -381px";
                            case REPEAT_MODE.SHUFFLE: 
                                return "-74px -275px";
                            default: return "-5px -381px";
                        }
                    }};
                    background-size:167px auto;
                    
                    :hover{
                        background-position:${props => {
                        switch(props.repeatMode){
                            case REPEAT_MODE.REPEAT_ONE: 
                                return "-103.7px -381px";
                            case REPEAT_MODE.SHUFFLE: 
                                return "-103.7px -275px";
                            default: return "-38px -381px";
                        }
                    }};
                    }
                }

                .playlist{
                    width: 63px;
                    height: 27px;
                    background-position: -48px -77px;
                    background-size:167px auto;
                    :hover{
                        background-position: -48px -110px;
                    }
                    padding-left: 21px;
                    span{
                        color:#666;
                    }
                }

                .divider2{
                    width: 6px;
                    height: 29px;
                    background-position: -160px -272px;
                    background-size:167px auto;
                    margin:0 6px;
                }
            }
        }

        .bar-player-playlist{
            position:absolute;
            left:50%;
            transform:translateX(-50%);
            bottom:57px; 
            z-index:10;
            width: 1080px;
            height: 331px;
        }
    } 
`;

export const Controller = styled.div`
    display:flex;
    align-items:center;

    .prev,.next{
       width:29px;
       height:29px;
    }

    .prev{
       background-position:-1px -130px; 
       :hover{
            background-position:-31px -130px;
        } 
    }

    .play-pause{
       width:37px;
       height:37px;
       margin:0 8px;
       background-position:${props=>{
            if(props.isPaused){
                return "0 -204px;" 
            }else{
                return "0 -165px;" 
            }
        }};
       
       :hover{
            background-position:${props=>{
                if(props.isPaused){
                    return "-40px -204px;" 
                }else{
                    return "-40px -165px;" 
                }
            }};   
        } 
    }

    .next{
        background-position:-81px -130px;
        :hover{
            background-position:-111px -130px;
        } 
    }
`;

export const SongInfo = styled.div`
    display:flex;
    align-items:center;

    .image{
        margin: 0 20px 0 40px;
        position:relative;

        .image-cover{
            position:absolute;
            top:0;
            left:0;
            width: 40px;
            height: 40px;
            background-position: 0 -94px no-repeat;
            background-size: 178px auto;
        }
    }

    .detail{
        margin-top:6px;

        .info{
            display:inline-flex;
            align-items:center;
            padding-bottom:2px;
            a{
                margin-right:20px;
                font-size:14px;
            }
            
            .song-name{
                color:#e8e8e8;
            }
            .singer{
                color:#9b9b9b;
            }

            .from{
                display:inline-block;
                width: 14px;
                height: 14px;
                background-position: -110px -103px;
                text-indent:-9999px;
            }
        }

        .progress{
            display:flex;
            align-items:center;

            .time-info{
                padding-bottom:2px;
                span{
                    color:#797979;
                }

                .divider1{
                    margin:0 5px;
                }

                .current{
                    color:#a1a1a1;
                }
            }
                           
            .ant-slider{
                width:520px;
                height:12px;
                margin:0 15px 0 0;
                padding:0;

                .ant-slider-rail{
                    height:11px;
                    background:url(${pic2}) 0 -30px;
                    background-size:520px auto;
                }

                .ant-slider-track{
                    height:11px;
                    background:url(${pic2}) 0 -67px;
                    background-size:520px auto;
                }

                .ant-slider-handle{
                    width: 18px;
                    height: 18px;
                    background:url(${pic3}) -2px -252px;
                    border:none;
                    margin:-3px 0 0 0;
                    :hover{
                        background-position:-2px -282px;
                    }
                }
            }    
        }
    }
                
`;

export const PlayList = styled.div`
    display:${props=>props.isShow};

    .playlist-header{
        height: 45px;
        background: url(${pic4}) -1px 0 no-repeat;
        background-size:2195px auto;
        display:flex;
        justify-content:space-between;
        align-items:center;

        .playlist-header-left{
            width: 608px;
            color:#e2e2e2;
            display:flex;
            justify-content:space-between;
            padding:0 20px;

            .playlist-title{
                margin-left:10px;
                font-size:16px;
            }

            .playlist-operator{
                display:flex;
                color:#ccc;
                justify-content:center;
                align-items:center;

                .divider{
                    color:#2c2c2c;
                    margin:0 10px;
                }

                div{
                    display:inline-flex;

                    &::before{
                        display:inline-block;
                        content:"";
                        width:16px;
                        height:15px;
                        background-image:url(${pic1});
                        margin:1px 6px 0 0;
                    }

                    :hover{
                        cursor:pointer;
                        text-decoration:underline;
                        color:e2e2e2;
                    }
                }

                .delete{
                    &::before{
                        background-position: -50px 0;
                    }
                    
                    :hover{
                        color:#e2e2e2;
                        &::before{
                            background-position:-50px -20px;
                        }   
                    } 
                }

                .collect{
                    &::before{
                        background-position: -24px 0;
                    }

                    :hover{
                        color:#e2e2e2;
                        &::before{
                            background-position:-24px -20px;
                        }   
                    } 
                }
            }  
        }
        .playlist-header-right{
            flex:1;
            color:#fff;
            font-size:14px;
            line-height:14px;
            text-align: center;
        }
    }

    .playlist-main{
        height:286px;
        width:1080px;
        background: url(${pic4}) -1114px 0 repeat-y;
        background-size:2195px auto;
        display:flex;
        justify-content:space-between;
        position:relative;
        overflow:hidden;

        .playlist-bg{
            position:absolute;
            top:-360px;
            width:1080px;
            height:auto;
            opacity:0.2;
        }   

        .playlist-main-right{
            flex:1;
            position:relative;

            .frame-left{
                position:absolute;
                width: 6px;
                height:286px;
                background-color:#000;
                opacity:0.5;
                left:608px;
            }

            .frame-right{
                position:absolute;
                width: 6px;
                height:286px;
                background-color:#000;
                opacity:0.5;
                right:1px;
            }

            .frame-middle{
                position:absolute;
                right: 60px;
                top: 0;
                height: 245px;
                width: 355px;
                overflow:hidden;
                margin: 22px 0 24px 0;

                .lyric-container{ 
                    width:355px;
                    text-align:center;
                    overflow:hidden;
                    height:280px;

                    .item{
                        display:block;
                        color:#989898;
                        word-wrap:break-word;
                        transition:color 0.7s linear;
                        line-height:35px;
                        min-height:35px;

                        &.active{
                            color:#fff;
                            font-size:14px;
                            transition:color 0.7s linear;
                        }
                    }
                } 
            }
                
        }
            
        .playlist-main-left{
            position:absolute;
            width: 613px;
            height:286px;
            top:0;
            left:2px;

            .playlist-main-left-mask{
                z-index:2;
                background-color:#121212;
                opacity:.3;
            }
            
            .playlist-content{
                position:absolute;
                z-index:4;

                .playlist-item{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    width: 607px;
                    height:31px;

                    .col{
                        padding-left:10px;
                    }
                    
                    .playlist-item-col1{
                        margin-left:10px;
                        width:12px;
                        height: 12px;
                    }
                    .playlist-item-col2{
                        flex:1;
                        color:#ccc;
                    }
                    .playlist-item-col3{
                        display:none;
                    }
                    .playlist-item-col4{
                        display:inline-flex;
                        justify-content:space-between;
                        margin-right:10px;
                        width: 185px;
                        
                        a{
                            color:#9b9b9b;
                            display:inline-block;
                            width: 70px;
                        }

                        .link-icon{
                            width: 20px;
                            text-indent:-9999px;
                        }

                        span{
                            color:#666;
                        }
                    }

                    :hover{
                        background-color:rgba(0,0,0,.4);
                        cursor:pointer;

                        .playlist-item-col3{
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            width: 100px;
                            height:31px;

                            .col3-icon{
                                width:16px;
                                height:15px;
                                background-image:url(${pic1});
                            }
                            
                            .favor{
                                background-position: -24px 0;
                                :hover{
                                    background-position:-24px -20px;
                                }
                            }

                            .share{
                                background-position: 0 0;
                                :hover{
                                    background-position: 0 -20px;
                                }
                            }

                            .download{
                                background-position: -57px -50px;
                                :hover{
                                    background-position: -80px -50px;
                                }
                            }

                            .delete{
                                background-position: -50px 0;
                                :hover{
                                    background-position: -50px -20px;
                                }
                            }
                        }

                        .playlist-item-col2{
                            color:#fff; 
                        }

                        .playlist-item-col4{ 
                            a,span{color:#fff;}
                        }
                    }
                }

                .playlist-item.selected{
                    background-color:rgba(0,0,0,.3);

                    .playlist-item-col1{
                        background:url(${pic1}) -181px 0;
                    }
                    .playlist-item-col2{
                        color:#fff; 
                    }
                    .playlist-item-col4{ 
                        a,span{color:#fff;}
                    }
                }
            }

        }
    }
`;

export const Volume = styled.div`
    display:${props=>props.isShowVol};
    height:114px;
    width:32px;
    background:url(${pic5}) 0 -502px;

    .ant-slider-vertical{
        width: 6px;
        height: 85px;
        margin:18px 10px;
        padding:0 4px;

        .ant-slider-rail{
            background-color: transparent;
        }

        .ant-slider-track{
            width:4px;
            height:88px;
            background:url(${pic5}) -40px -523px;
        }

        .ant-slider-handle{
            width: 16px;
            height: 17px;
            background:url(${pic3}) -41px -251px;
            border:none;
            margin-left:-6px;
            box-shadow:none;
            :hover{
                background-position:-41px -281px;
            }
        } 
    } 
`;

export const ScrollHandler = styled.div`
    position:absolute;
    top:45px;
    left:609px;
    
    span{
        width:5px;
        height:100px;
        display:block;
        background:#868686; 
        border: 1px solid #a6a6a6;
        border-radius: 5px;
        cursor:pointer;
        opacity: .8;
    }

    .handler{
        position:relative;
        /* transition:top 0.5s ease; */
    }
`;