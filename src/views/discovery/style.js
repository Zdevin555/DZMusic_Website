import styled from "styled-components";

export const DiscoveryWrapper = styled.div`
    .top{
        height:35px;
        background-color: #c20c0c;
    }
`;

export const TopSubMenu = styled.div`
    display:flex;
    padding:0 225px;
    position:relative;
    top:-3px;

    .listItem{
        /* margin:0 20px;
        line-height:40px;
        text-align:center;
        position:relative; */
        margin:6px;
        display:block;
        
        
        a{
            /* display:inline-block;
            color:#eee;
            font-size:14px; */
            color:#fff;
            font-size:14px;
            height:25px;
            padding:2px 15px;
        }

        &:hover a,a.active{
            /* position:relative;
            height:30px;
            line-height:30px;
            border-radius:10px;
            background-color: #666;
            text-decoration:none; */
            background-color: #980909;
            border-radius:15px;
            text-decoration:none;
           
        }
    }
`;