import styled from 'styled-components';
import pic1 from '@/assets/img/sprite_cover.png';
import pic2 from '@/assets/img/sprite_icon.png';
import pic3 from '@/assets/img/sprite_02.png';

export const HitAlbumWrapper = styled.div`

    .hit-header{
        padding:0 20px;
    }

    .albums{
        margin:20px;
        width:772px;
        height:200px;
        background-color: #f5f5f5;
        border:1px solid #d3d3d3;
        display:flex;
        justify-items:center;
        padding-left:27px;
        position:relative;
        .album-content{
            .album-item{
            width:110px;
            height:110px;
            margin:25px 15px;

            a{
                display:block;
                font-size:14px;
                line-height:18px;
            }

            .album-image{
                height:110px;
                width:128px;
                background: url(${pic1}) 0 -627px;
                background-size: 418px auto;
                position:relative;

                :hover{
                    &::after{
                       content:"";
                       display:inline-block;
                       position:absolute;
                       width:28px;
                       height:28px;
                       background: url(${pic2}) 0 -140px; 
                       bottom:5px;
                       right:25px;
                    }
                }

                .album-image-shadow{
                    display:block;
                    position:absolute;
                    bottom:-12px;
                    left:0;
                    height:12px;
                    width:116px;
                    background: url(${pic3}) -286px 0;
                    background-size: 453px auto;
                }
            }

            .album-name{
                color:#000;
                margin-top:11px;
            }

            .album-artist{
                color:#666
            }
        }
        }
        
    }
`

export const AlbumCover = styled.div`
    background-image:url(${props => props.bgImage});
 `;

 export const AlbumControl = styled.div`
    position:absolute;
    top:42%;
    left:0;
    right:0; 

    .albums-control-left{
        position:absolute;
        left:12px;
        width:10px;
        height:15px;
        background: url(${pic3}) -264px -77px;
        cursor:pointer;


        &:hover{
            background: url(${pic3}) -284px -77px;
        }
    }

    .albums-control-right{
        position:absolute;
        right:12px;
        width:10px;
        height:15px;
        background: url(${pic3}) -305px -77px;
        cursor:pointer;


        &:hover{
            background: url(${pic3}) -324px -77px;
        }
    }
  

 `;