import React from 'react';
import { Text } from 'react-native';

export const MainBlogScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <>
            <Text>{ item.title }</Text>

            <Text>{ item.content }</Text>
        </>
    );    
}