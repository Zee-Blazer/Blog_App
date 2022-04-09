import React, { useContext } from 'react';
import { Text } from 'react-native';
import { BlogForm } from '../components/forms/blog-form.component';

import { BlogContext } from '../Context/blogContext';

export const AddBlogScreen = ({ navigation }) => {

    const { addContent } = useContext(BlogContext);

    return (
        <BlogForm add={ addContent } navigation={ navigation } />
    )
}