import styled from 'styled-components';
import pic1 from '@/assets/img/wrap-bg.png';

export const SongWrapper = styled.div`
    .song-content{
        background:url(${pic1}) repeat-y;
        background-size:1080px auto;
        display:flex;
    }
    

`;
export const SongContentLeft = styled.div`
    width: 781px;

`;
export const SongContentRight = styled.div`
    width: 299px;
    padding:20px 40px 40px 30px   
`;