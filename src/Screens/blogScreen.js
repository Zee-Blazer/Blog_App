import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { DisplayContainer } from '../components/displayCont';

import { BlogContext } from '../Context/blogContext';

export const BlogScreen = ({ navigation }) => {

    const { contents } = useContext( BlogContext );

    console.log(contents)

    return (
        <>
    
            <FlatList 
                data={contents}
                renderItem={ ({ item }) => (
                    <DisplayContainer title={ item.title } navigation={ navigation } />
                )}
                keyExtractor={ item => item._id }
            />
        </>
    )
}