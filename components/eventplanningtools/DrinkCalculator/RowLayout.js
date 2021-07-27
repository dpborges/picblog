import React from 'react';
import styled, { css } from 'styled-components';
import { setMedia } from '../../../styles/CommonStyles';

// Return column heading
function RowLayout({row}) {
  let [type, quantity, unitOfMeasure] = row;
  
  return (
    <RowContainer>
      <TypeColumn>
        <TypeContent>{type}</TypeContent>
      </TypeColumn>
      <QuantityColumn>
          <QuantityContent>{quantity}</QuantityContent>
      </QuantityColumn>
      <div>&nbsp;</div>
      <UnitColumn>
        <UnitContent>{unitOfMeasure}</UnitContent>
      </UnitColumn>
    </RowContainer>
  )
}

export default RowLayout;

const RowContainer = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  display: grid;
  grid-template-columns:  40% 5em 30% 20%;
  margin-top: .5em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    grid-template-columns: 40% 5em 10% 35%;
    margin-top: 1.5em 0 0 0;
    width: 90%;
   }
`;

const TypeColumn = styled.div`
   display: flex;
   ${props => props.mr ? css`margin-right: ${props.mr};` : '' };
   /* width: 20%; */

   @media only screen and (max-width: ${setMedia.tabletMax}) {
     font-size: ${({ theme }) => theme.fontSize.xsmall};
   }
`;

const TypeContent= styled.div`
   color: ${({ theme }) => theme.color.text};
   font-size: 1em;
   /* width: 100; */

   @media only screen and (max-width: ${setMedia.tabletMax}) {
    line-height: 1.1em;
    font-size: .9em;
   }
`;

const QuantityColumn = styled.div`
   margin-right: 10em;
   text-align: right;
   width: 4em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${({ theme }) => theme.fontSize.xsmall};
     margin-right: 0em;
     padding-right: 3px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-right: 16%;
  }
`;

const QuantityContent = styled.div`
  font-size: 1em;
  color: ${({ theme }) => theme.color.text};
  text-align: right;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    line-height: 1.1em;
    font-size: .9em;
   }
`;

const UnitColumn = styled.div`

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${({ theme }) => theme.fontSize.xsmall};
  }
`;

const UnitContent = styled.div`
  font-size: 1em;
  color: ${({ theme }) => theme.color.text};
  /* padding-left: 2em; */
  

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: .9em;
    padding-left: 0;
    line-height: 1.1em;
   }
`;

