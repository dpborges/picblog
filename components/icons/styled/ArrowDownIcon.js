
import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";
import { setMedia } from '../../../styles/CommonStyles';

const ArrowDown = ({className}) => <IoIosArrowDown className={className} />

export const  ArrowDownIcon  = styled(ArrowDown)`
    font-size: ${props => props.theme.fontSize.default};
    color: ${props => props.theme.color.primary };
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
    padding:0;

    @media only screen and (max-width: ${setMedia.tabletMax}) {
        font-size: ${props => props.theme.fontSize.medium  };
    }
`;