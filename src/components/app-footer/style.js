import styled from 'styled-components';

export const FooterWrapper = styled.div`
    height:170px;
    color:#666;
    font-size:14px;
    
    .footer-top{
        height:100px;
        background-color: #f2f2f2;

        .content{
            display:flex;
        }
    }
`;

export const FooterLeft = styled.div`
    position:relative;
    padding-left:27px;

    .declaim{
        display:flex;
        position:relative;
        flex-wrap:wrap;

        .item{

            margin:10px 0;
            a{ 
                padding:0 10px 0 0;;
                color:#999;
            }
            
            .line{
                color:#999;
                margin: 0 10px 0 0;
            }

            :nth-last-of-type(1) .line{
                color:#f2f2f2;
            }
        }
    }

    p{
        margin-top:15px;
    }

`;
export const FooterRight = styled.div`
    display:flex;
    flex:1;
    margin-left:50px;
    .item{
        display:flex;
        flex-direction: column; 
        height:90px;
        margin:0 15px;
        padding-top:4px;

        .link{
            display:block;
            height:60px;
            width:62px; 
            text-indent:-9999px;
            background-size:139px auto;
        }

        .icon{
            display:block;
            width:70px;
            height:16px;
            background-size:237px auto;
        }

        :nth-child(1){
           .link{
            background-position: 2px 0px; 
           }

           .icon{
            background-position: 0px 2px;
           }
        } 

        :nth-child(2){
           .link{
            background-position: -78px -67px; 
           }

           .icon{
            background-position: -2px -81px;
           }
        } 

        :nth-child(3){
           .link{
            background-position: 0px -134px; 
           }

           .icon{
            background-position: -4px -109px;
           }
        } 

        :nth-child(4){
           .link{
            background-position: -78px -134px; 
           }

           .icon{
            background-position: -2px -137px;
           }
        } 
    }
`;