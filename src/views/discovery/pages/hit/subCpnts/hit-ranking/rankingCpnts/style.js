import styled from 'styled-components';
import pic2 from '@/assets/img/sprite_cover.png';
import pic3 from '@/assets/img/sprite_02.png';
import pic4 from '@/assets/img/sprite_icon2.png';

export const SingleRankingWrapper = styled.div`
    flex:1;
    .ranking-title{
        position:relative;

        img{
            position:absolute;
            left:22px;
            top:22px;
        }

        .cover{
            position:absolute;
            width:90px;
            height:90px;
            background:url(${pic2}) -216px -63px; 
            background-size: 342px auto;
            left:22px;
            top:22px;
            text-indent: -9999px;
        }
        
        .title-name{
            position:absolute;
            font-size:16px;
            font-weight:700;
            color:#000;
            left:125px;
            top:30px;
        }

        .title-icon{
            position:absolute;
            top:65px;
            text-indent: -9999px;
            background-image:url(${pic3});

            &.play-icon1{
                width:27px;
                height:26px;
                background-position:-315px -242px;
                background-size: 488px auto;
                left:125px;
                :hover{
                    background-position:-315px -277.5px;
                }
            }

            &.favor-icon1{
                width:25px;
                height:25px;
                background-position:-375px -257px;
                background-size: 516px auto;
                left:162px;
                :hover{
                    background-position:-375px -294.5px;
                }
            }
        }   
    }

    .ranking-list{
        font-size:14px;
        position:absolute;
        top:125px;
        margin-top:10px;
        margin-left:40px; 
        
        .ranking-item{
            height:36.2px;
            width:200px;
            counter-increment:index;
            color:#000; 
            display:flex;
            align-items:center;

            
            ::before{
                content:counter(index);
                font-size:18px;
                color:#666;
                margin-right:12px;
            } 

            :nth-child(-n+3){
                ::before{
                    content:counter(index);
                    color:#c10d0c;
                }
            }  

            &:last-of-type{
                margin-left:-6px;
                a{
                    display:inline-block;
                    margin-left:-3px;
                }
            }

            a{
                color:#000;
                display:block;
                width:180px;
            }

            .button{
                display:none;
            }

            :hover .button{
                display:block;
                float:left;
                
                ul{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;

                    .play-icon2{
                        margin-right:4px;
                        background-image:url(${pic3});
                        width:20px;
                        height:20px;
                        background-position:-296px -296px;
                        background-size: 458px auto;
                        :hover{
                            background-position:-296px -318px;
                            cursor:pointer;
                        }
                    }

                    .add-icon{
                        margin-right:4px;
                        background-image:url(${pic4});
                        width:17px;
                        height:17px;
                        background-position:0px -847px;
                        background-size: 103px auto;
                        :hover{
                            background-position:-27px -847px;
                            cursor:pointer;
                        }
                    }

                    .favor-icon2{
                        background-image:url(${pic3});
                        width:19px;
                        height:19px;
                        background-position:-352px -319px;
                        background-size: 490px auto;
                        :hover{
                            background-position:-352px -343px;
                            cursor:pointer;
                        }
                    }
                }
            }
        }

        .all{
            color:#000;
            padding-left:180px;
            display:inline-block;
            margin-top: 3px;
        }
    }
`;