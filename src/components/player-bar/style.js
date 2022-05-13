import styled from 'styled-components';

import pic1 from '@/assets/img/playlist.png';
import pic2 from '@/assets/img/progress_bar.png';
import pic3 from '@/assets/img/sprite_icon.png';
import pic4 from '@/assets/img/playlist_bg.png';

export const BarWrapper = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    right:0;
    height:70px;
    background-position:0 0;
    background-repeat:repeat;
    background-size: 200px auto;

    button{
        background-color:transparent;
        border:none;
        cursor:pointer;
    }
    
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
                    :hover{
                        background-position: -36px -274px;
                    }
                }

                .cycle-mode{
                    width: 23px;
                    height: 21px;
                    background-position: -74px -275px;
                    background-size:167px auto;
                    :hover{
                        background-position: -103.7px -275px;
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
       background-position:-1px -204px;
       margin:0 8px;
       :hover{
            background-position:-41px -204px;
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
    position:absolute;
    width: 1080px;
    height: 331px;
    left:50%;
    transform:translateX(-50%);
    bottom:62px; 

        .playlist-header{
            height: 45px;
            background: url(${pic4}) -1px 0 no-repeat;
            background-size:2195px auto;
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

            .playlist-right{
                flex:1;
                
            }
            
            .playlist-left{
                position:absolute;
                width: 613px;
                height:286px;
                top:0;
                left:2px;

                .playlist-left-mask{
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
                        width: 608px;
                        height:31px;

                        .col{
                            padding-left:10px;
                        }
                        
                        .playlist-item-col1{
                            margin-left:10px;
                            width:12px;
                            height: 12px;
                            background:url(${pic1}) -181px 0;
                        }
                        .playlist-item-col2{
                            flex:1;
                            color:#ccc;
                            
                        }
                        .playlist-item-col3{
                            width: 78px;
                            
                        }
                        .playlist-item-col4{
                            display:inline-flex;
                            justify-content:space-between;
                            width: 185px;
                            
                            a{
                                color:#9b9b9b;
                            }

                            span{
                                color:#666;
                            }
                        }
                    }
                }

            }
        }
    
`;