import React from "react";
import {Platform} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetail from "../screens/MealDetail";
import FilterScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from "../screens/Favorites";
import {Ionicons} from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';

const MyStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const NavigationOptionHandler = () => ({
    headerShown : false
  })


const MealsStack = () =>{
    return(
        <MyStack.Navigator>
        <MyStack.Screen name="Categories" component={CategoriesScreen} options={{title :'Categories',headerStyle:{backgroundColor : Platform.OS === 'ios' ? 'white' : Colors.primaryColor},headerTintColor : Platform.OS === 'ios' ? Colors.primaryColor : 'white'}} />
        <MyStack.Screen name="CategoryMeals" component={CategoryMeals} options={NavigationOptionHandler}  />
        <MyStack.Screen name="MealDetail" component={MealDetail} options={NavigationOptionHandler} />
    </MyStack.Navigator>
    )
} 

const FavoritesStack = ()=>{
    return(
        <MyStack.Navigator>
        <MyStack.Screen name="Favorites" component={Favorites} options={NavigationOptionHandler} />
        <MyStack.Screen name="MealDetail" component={MealDetail} options={NavigationOptionHandler} />
    </MyStack.Navigator>
    )
}

const MealTab = ()=>{
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused}) => {
                let iconName;

                if (route.name === 'Meals') {
                    iconName = focused
                        ? 'md-restaurant'
                        : 'md-restaurant';
                } else if (route.name === 'Favorites') {
                    iconName = focused ? 'md-star' : 'md-star-outline';
                }

                return <Ionicons name={iconName} size={24} color="blue" />;
            },
        })}
                       tabBarOptions={{
                           activeTintColor: 'blue',
                           inactiveTintColor: 'black',
                       }}>
        <Tab.Screen name="Meals" component={MealsStack}  />
        <Tab.Screen name="Favorites" component={FavoritesStack} />
    </Tab.Navigator>
    )
}





const AppNavigator = props =>{

    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Meals" component={MealTab}/>
                <Drawer.Screen name="Filter" component={FilterScreen} />
            </Drawer.Navigator>
          
        </NavigationContainer>
    )

}

export default AppNavigator;