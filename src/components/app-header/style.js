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
        //a元素默认不能设置宽高，需要转成块
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
            /*相对定位,与后面的绝对定位配合，设置精灵图中的
            红色三角小箭头的最终位置*/
            position:relative;
            a{
                display:block;
                padding:0 20px;
                color:#ccc
            }

            /*:last-of-type匹配当前元素(select-item)的父元素(select-list)
            中的特定类型的最后一个子元素,这里指的就是最后一个div*/
            /*:last-of-type a表示后代选择，即选择的是最后一个div中的a标签 */
            &:last-of-type a{
                position:relative;
                /*E::after选择在E元素内部的结束位置创建一个行内元素,须结合content属性使用。
                此处行内元素的内容为空，但通过样式设置，将精灵图hot准确的显示到指定位置*/
                ::after{
                    /*绝对定位,应为此处需要固定在最后一个标签的的后尾右上角*/
                    position:absolute;
                    content:"";
                    /* 盒子的高度宽度要和精灵图的大小一致 */
                    width:28px;
                    height:19px;
                    /*styled中要实现引入精灵图的url，必须把其当做一个模块借助require引入*/
                    background-image:url(${pic});
                    /* background-image:url(${require('@/assets/img/sprite_01.png')}); */
                    /* 在ps中进行定位的时候，把光标放在矩形选区的左上角，可以得到位置 */
                    background-position: -190px 0;
                    top:20px;
                    right:-15px;
                }
            }
            /*&这是sass的语法，表示在嵌套层次中回溯一层,即代表上一级选择器.select-item*/
            /*:hover当鼠标移动到链接上时的伪类选择器 */
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