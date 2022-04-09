import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { View, Text, TextInput } from 'react-native';

export const BlogForm = () => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

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
                onPress={ () => alert(`${title} ${content}`) }
            >Save</Button>
        </>
    )
}