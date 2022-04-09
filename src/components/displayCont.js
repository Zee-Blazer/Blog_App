import React from 'react';
import { Text } from 'react-native';

//Styled Components
import { Opacity, HomeBlog } from '../Styles/mainStyling';

//Icon
import { FontIcon } from '../Styles/mainStyling';

export const DisplayContainer = ({ title, navigation }) => {

    return (
        <Opacity onPress={() => navigation.push("MainScreen", { name: "Ganiyu Bolaji" })}>
            <HomeBlog>
                <Text>{title}</Text>
                <FontIcon name="trash-o" size={21} color="red" />
            </HomeBlog>
        </Opacity>
    )
}