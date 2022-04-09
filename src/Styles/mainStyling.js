import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

//Icons
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export const Opacity = styled.TouchableOpacity`
    padding: ${ props => props.theme.containerSpacing.small };
    margin: ${ props => props.theme.containerSpacing.small };
    border: ${ props => props.theme.space[1] };
    font-size: ${ props => props.theme.fontSizes.h1 }
`;

export const RightIcon = styled(Entypo)`
    margin-right: 18px;
`;

export const FontIcon = styled(FontAwesome)`
    margin-right: 21px;
`;

export const HomeBlog = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4px;
`;