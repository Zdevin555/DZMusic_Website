import styled from 'styled-components';
import pic1 from '@/assets/img/sprite_cover.png';
import pic2 from '@/assets/img/sprite_icon.png';
import pic3 from '@/assets/img/sprite_02.png';

export const CoverWrapper = styled.div`
    margin:0 auto;

    .album-image{
        width:${props=>props.size*1.16+"px"};
        height:${props=>props.size+"px"};
        position:relative;

        .bg{
            display:block;
            width:${props=>props.size+"px"};
            height:${props=>props.size+"px"}; 
        }

        .cover{
            position:absolute;
            left:0;
            top:0;
            right:0;
            bottom:0;
            background: url(${pic1}) 0 ${props=>props.size/100*(-570)+"px"};
            background-size: ${props=>props.size/100*380+"px"} auto;

            :hover{
                &::after{
                    content:"";
                    position:absolute;
                    width:${props=>props.size/100*25+"px"};
                    height:${props=>props.size/100*25+"px"};
                    background: url(${pic2}) 0 ${props=>props.size/100*(-127)+"px"};
                    background-size: ${props=>props.size/100*112+"px"} auto;
                    bottom:7px;
                    right:25px;
                }
            }

            .album-image-shadow{
                position:absolute;
                bottom:-12px;
                left:0;
                height:${props=>props.size/100*11+"px"};
                width:${props=>props.size/100*105+"px"};
                background: url(${pic3}) ${props=>props.size/100*(-260)+"px"} 0;
                background-size: ${props=>props.size/100*412+"px"} auto;
            }
        }

        
    }

    .album-info{

        a{
            display:block;
            width:${props=>props.size+"px"};
        }

        .album-name{
            color:#000;
            margin-top:10px;
        }

        .album-artist{
            color:#666 
        }
    }
`;
    