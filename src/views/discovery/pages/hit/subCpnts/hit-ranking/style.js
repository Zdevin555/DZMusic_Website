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