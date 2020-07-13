import React,{useEffect} from "react";
import {View,Text,StyleSheet,TouchableOpacity,FlatList,ImageBackground} from "react-native";
import {CATEGORIES,MEALS} from "../data/dummy-data";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../components/CustomHeader";
import {useSelector} from "react-redux";

const CategoryMeals = props =>{

    const catId = props.route.params.categoryId;

    let selectedCategory = CATEGORIES.find(cat=> cat.id === catId);


    const availableMeals = useSelector(state=>state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal=>meal.categoryIds.indexOf(catId) >= 0);

    const {navigation} = props;


    const renderMeals = ({item}) =>{
        return(
            <View style={styles.mealItem}>
                <TouchableOpacity onPress={()=>navigation.navigate('MealDetail',{item})}>
                <View>
                    <View style={{...styles.mealRow,...styles.mealHeader}}>
                        <ImageBackground source={{uri : item.imageUrl}} style={styles.bgImage}>
                        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow,...styles.mealDetail}}>
                    <Text>{item.duration}</Text>
                    <Text>{item.complexity.toUpperCase()}</Text>
                    <Text>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={{flex : 1}}>
        <CustomHeader title={selectedCategory.title} navigation={navigation} />
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item,index)=>item.id} renderItem={renderMeals} />
        </View>
        </View>
        
    )


}

const styles = StyleSheet.create({

    screen : {
        flex :1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    mealRow : {

        flexDirection :'row'

    },
    mealItem : {

        height : 200,
        width : '100%',
        backgroundColor : '#ccc',
        marginBottom : 15,
        borderRadius : 10,
        overflow : 'hidden'

    },
    mealHeader  :{

        height : '90%'

    },
    mealDetail :{

        paddingHorizontal : 10,
        justifyContent : 'space-between',
        alignItems :'center',
        height : '10%'

    },
    
    bgImage : {

        width : '100%',
        height : '100%',
        justifyContent : 'flex-end'

    },
    title : {

        fontFamily : 'open-sans-bold',
        fontSize : 20,
        color : 'white',
        backgroundColor : 'rgba(0,0,0,0.6 )',
        paddingVertical : 5,
        paddingHorizontal : 12,
        textAlign :'center'

    }

})

export default CategoryMeals;

