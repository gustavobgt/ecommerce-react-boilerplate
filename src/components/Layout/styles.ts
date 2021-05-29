import styled from 'styled-components';

/**
 * HD = Header
 * CT = Content
 * FT = Footer
 */

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 70px auto 70px;

    grid-template-areas:
        'HD'
        'CT'
        'FT';

    height: 100vh;
`;
