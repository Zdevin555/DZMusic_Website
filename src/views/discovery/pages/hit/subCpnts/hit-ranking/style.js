import styled from 'styled-components';
import pic1 from '@/assets/img/hit-top-bg.png';


export const HitRankingWrapper = styled.div`
    .header{
        padding:0 20px;
    }

    .ranking{
        margin:20px;
        width:772px;
        height:529px;
        background:url(${pic1}) 0 0 no-repeat;
        background-size: 770px auto;
        display:flex;
        justify-content:space-between
    }
`;

// export const List = styled.div`

//     &:nth-child(${props=>props.index}){
//         ::before{
//             content:String(${props=>props.index});
//             font-size:18px;
//             color:#c10d0c;
//             margin-right:12px;
//         }
//     }
// `;