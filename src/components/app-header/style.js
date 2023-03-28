import styled from 'styled-components';
import pic from '@/assets/img/sprite_01.png';

export const HeaderWrapper = styled.div`
    height:85px;
    color:#fff;
    background-color: #242424;
    font-size:20px;

    .content {
        height: 80px;
        display:flex;
        justify-content: space-between;
    }

    .divider {
        height:5px;
        background-color: #c20c0c;
    }
`;

export const HeaderLeft = styled.div`
    display:flex;

    .logo{
        display:inline-block;
        height:60px;
        width:237px;
        background-position: 0 -10px;
        background-size:330px auto;
        text-indent: -9999px;
    }

    .select-list{
        display:flex;
        /*内容居中 */
        line-height:80px;

        .select-item{
            position:relative;
            a{
                display:block;
                padding:0 20px;
                color:#ccc
            }

            &:last-of-type a{
                position:relative;
                ::after{
                    position:absolute;
                    content:"";
                    width:28px;
                    height:19px;
                    background-image:url(${pic});
                    background-position: -190px 0;
                    top:20px;
                    right:-15px;
                }
            }
            
            &:hover a, a.active{
                color:#fff;
                background: #000; 
                text-decoration:none;
            }

            .active .icon{
                position:absolute;
                display:inline-block;
                width:12px;
                height:7px;
                bottom:-1px;
                left:50%;
                transform:translate(-50%,0);
                background-position: -226px 0;
            }
        }
    }
`;

export const HeaderRight = styled.div`
    display:flex;
    color:#ccc;
    font-size:12px;
    align-items:center;

    .search{
        width:170px;
        height:32px;
        border-radius:16px;

        input{
            &::placeholder{
                font-size:14px;
            }
        }
    }

    .center{
        height:32px;
        width:105px;
        border-radius:16px;
        line-height:32px;
        text-align:center;
        border:1px solid #666;
        margin:0 16px;
        background-color: transparent;
        
        a{
            color:#ccc;
            font-size:14px;
            text-decoration:none;
        }

        &:hover{
            border:1px solid #eee;
            a{
                color:#eee;
            }
        }
    }

    .login{
        margin:0 5px;
        line-height:32px;
        text-align:center;

        a{
            color:#999;
            font-size:14px;
            text-decoration:none;
        }

        &:hover a{
            color:#eee;
        }

    }
`;