import styled from 'styled-components';

export const BigHitWrapper = styled.div`

    .hit-header{
        padding:0 20px;
    }

    .songs{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;

        .songs-item{
            margin:20px;

            a{
                display:block;
                width:160px;

                &.image{  
                    height:160px;
                    outline:1px solid #d9d9d9;
                }

                &.songs-title{  
                    font-size:16px;
                    color:#000;
                }
            } 
        }
    }
`;