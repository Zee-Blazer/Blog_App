import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { View, Text, TextInput } from 'react-native';

export const BlogForm = ({ add, navigation }) => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const contentAddition = () => {
        add({
            _id: `${title}__${Math.floor(Math.random() * 10)}`,
            title,
            content
        });

        navigation.navigate("Blogs");
    }

    return (
        <>
            <View>
                <Text>Enter Title</Text>
                <TextInput 
                    placeholder='Type Blog Title...' 
                    value={ title }
                    onChangeText={ setTitle }
                />
            </View>

            <View>
                <Text>Enter Content</Text>

                <TextInput 
                    value={ content }
                    onChangeText={ setContent }
                    placeholder='Type Blog Contents...' 
                    multiline
                    autoCorrect
                    numberOfLines={4}
                />
            </View>

            <Button 
                mode="contained" 
                onPress={ () => contentAddition() }
            >Save</Button>
        </>
    )
}