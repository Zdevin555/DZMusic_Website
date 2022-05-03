import styled from 'styled-components';

export const HitHeaderWrapper = styled.div`
    //1.给盒子设置高度
    height:50px;
    border-bottom:2px solid #C10D0C;
    display:flex;
    justify-content:space-between;
    padding: 20px 10px 5px 10px;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;
    
    /* align-items:center; */

    .header-left{
        display:flex;
        //2.设置垂直对齐方式(重点)
        align-items:center;

        .header-left-icon{
            display:inline-block;
            height:16px;
            width:15px;
            background-position: -235px -164px;
            margin-right:10px;
        }

        .header-title{
            font-size:20px;
            color:#000;
            margin-right: 20px;
        }

        .keywords{
            display:flex;
            justify-content:space-between;

            .item{ 

                .divider{
                    margin: 0 15px;
                    color: #ccc;
                }

                :nth-last-of-type(1) .divider{
                    color:#fff;
                }
            }
        }
    }

    .header-right{
        display:flex;
        align-items:center;

        .header-right-icon{
            display:inline-block;
            height:12px;
            width:12px;
            margin-left: 4px;
            background-position: 0 -240px;
        }
        
    }
    
`;