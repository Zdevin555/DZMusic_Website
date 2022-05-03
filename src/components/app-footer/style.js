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

    .footer-bottom{
        height:70px;
        background-color: blue;
    }
`;

export const FooterLeft = styled.div`
    position:relative;

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

        .link{
            display:block;
            height:73px;
            width:73px; 
            text-indent:-9999px;
            background-size:170px auto;
        }

        .icon{
            display:block;
            flex:1;
            width:73px;
            background-size:220px auto;
        }

        :nth-child(1){
           .link{
            background-position: 0px 0px; 
           }

           .icon{
            background-position: 5px 3px;
           }
        } 

        :nth-child(2){
           .link{
            background-position: -97px -81px; 
           }

           .icon{
            background-position: 5px -75px;
           }
        } 

        :nth-child(3){
           .link{
            background-position: 0px -162px; 
           }

           .icon{
            background-position: 5px -101px;
           }
        } 

        :nth-child(4){
           .link{
            background-position: -97px -162px; 
           }

           .icon{
            background-position: 5px -127px;
           }
        } 
    }
`;