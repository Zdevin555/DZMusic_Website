import styled from 'styled-components';
import pic1 from '@/assets/img/download.png';
import pic2 from '@/assets/img/banner_sprite.png';

export const HitBannerWrapper = styled.div`
    background:url(${props => props.bgImage}) center center/6000px;

    .content{
        display:flex;
        height:300px;
        position:relative;
    }
`;

export const HitBannerLeft = styled.div`
    flex:1;
    width:0;

    .ant-carousel{
        .slick-dots li{
            margin:0 6px;
            height:10px;
            width:8px;

            button{
                width:8px;
                height:8px; 
                background:url(${pic2}) -4px -350px;
                transition-property:none;
                transition-duration:0;
            }

            &.slick-active{
                button{
                    background:url(${pic2}) -22px -350px;
                }
            }

        }
    }

    .item{
        height:300px;
        overflow:hidden;
        .image{
            max-width:100%
        }
    }  
`;

export const HitBannerRight = styled.div`
    width:268px;
    height:300px;
    background:url(${pic1}) 0 0;
    background-size:268px auto;

`;

export const HitBannerControl = styled.div`
    position:absolute;
    left:0;
    right:0;
    top:40%;
    /* transform:translateY(-50%); */

    .btn{
        position:absolute;
        width:37px;
        height:62px;
        background-image: url(${pic2});
        cursor:pointer;

        &:hover{
           background-color: rgba(0, 0, 0, .1);
        }
    }

    .left{
       left: -68px;
       background-position: 0 -360px;
    }

    .right{
        right:-68px;
        background-position: 0 -508px;
    }
`;

