import styled from 'styled-components';
import icon from '@/assets/img/sprite_icon.png';
import pic from '@/assets/img/sprite_cover.png';

export const CoverWrapper = styled.div`
    background-image:url(${props => props.bgImage});
    width:160px;
    height:160px;
    overflow:hidden;
    position:relative;

    .cover-top{
        position:absolute;
        height:127px;
        width:160px;
        top:0;
        left:0;

        .image{
            display:inline-block;
            width:160px;
            height:160px;
            background-image:url(${pic});
            background-position:0px 0px;
            background-size: 434px auto;
        }
    }

    .cover-bottom{
        position:absolute;
        height:33px;
        width:160px;
        bottom:0;
        left:0;
        background-color: rgba(0,0,0,0.4);
        
        span{
            position:absolute;
            display:inline-block;
            
        }

        .left-icon{
            width:18px;
            height:14px;
            background-image:url(${icon});
            background-position: 0 -31px;
            background-size: 159px auto;
            left:12px;
            bottom:7px;

            .play-count{
                color:#ccc;
                position:absolute;
                font-size:14px;
                line-height:27px;
                left:24px; 
                top:-6px;
            }
        }

        .right-icon{
            width:21px;
            height:21px;
            right:12px;
            bottom:4px;
            background:url(${icon}) 0 0;
            background-size: 150px auto;
        }
    }

`;

