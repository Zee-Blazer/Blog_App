import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Theme Provider
import { ThemeProvider } from 'styled-components';
//The Theme
import { theme } from './src/theme';

//Context Provider
import { BlogContextProvider } from './src/Context/blogContext';

//Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import { BlogScreen } from './src/Screens/blogScreen';
import { AddBlogScreen } from './src/Screens/addBlogScreen';
import { MainBlogScreen } from './src/Screens/mainBlogScreen';

// Font Icons
import { RightIcon } from './src/Styles/mainStyling';
import { FontIcon } from './src/Styles/mainStyling';

import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center
`;

const StackNav = createStackNavigator();

export default function App() {

  return (
    <ThemeProvider theme={ theme }>

      <BlogContextProvider>
        <NavigationContainer>
          <StackNav.Navigator>
            <StackNav.Screen 
              name="Blogs" 
              component={ BlogScreen } 
              options={ ({ navigation }) => ({
                headerRight: () => <RightIcon 
                    name="add-to-list" 
                    size={24} 
                    color="purple" 
                    onPress={ () => navigation.navigate("AddBlog") }
                  />
              })}
            />

            <StackNav.Screen 
              name="MainScreen" 
              component={ MainBlogScreen }  
              options={ ({ route, navigation }) => ({
                headerRight: () => <FontIcon 
                    onPress={ () => navigation.navigate("AddBlog") } 
                    name="pencil-square-o" 
                    size={24} 
                    color="purple" 
                  />
              }) }
            />

            <StackNav.Screen 
              name="AddBlog" 
              component={ AddBlogScreen }
            />
          </StackNav.Navigator>
        </NavigationContainer>
      </BlogContextProvider>

    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
