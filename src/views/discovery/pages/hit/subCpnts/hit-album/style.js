import styled from 'styled-components';
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
        padding-left:16px;
        position:relative;

        .album-content{
            padding:22px 25px;
        }    
    }
`;

export const AlbumControl = styled.div`
    position:absolute;
    top:38%;
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