import React, { useContext } from 'react';
import { Text } from 'react-native';
import { BlogForm } from '../components/forms/blog-form.component';

import { BlogContext } from '../Context/blogContext';

export const AddBlogScreen = ({ navigation, route }) => {

    const { action, item } = route.params;
    const { addContent, edit } = useContext(BlogContext);

    return (
        <>
        
            { action === 'edit' ?
                <BlogForm edit={ edit } add={ addContent } item={ item } navigation={ navigation } />
                :
                <BlogForm edit={ edit }  add={ addContent } navigation={ navigation } />
            }

        </>
    )
}