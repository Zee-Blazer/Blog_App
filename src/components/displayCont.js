import React, { useContext } from 'react';
import { Text } from 'react-native';

//Styled Components
import { Opacity, HomeBlog } from '../Styles/mainStyling';

//The Blog Context
import { BlogContext } from '../Context/blogContext';

//Icon
import { FontIcon } from '../Styles/mainStyling';

export const DisplayContainer = ({ item, navigation }) => {

    const { removeContent } = useContext( BlogContext );

    return (
        <Opacity onPress={() => navigation.push("MainScreen", { item })}>
            <HomeBlog>
                <Text>{item.title}</Text>
                <FontIcon 
                    name="trash-o" 
                    size={21} 
                    color="red" 
                    onPress={ () => removeContent(item) }
                />
            </HomeBlog>
        </Opacity>
    )
}