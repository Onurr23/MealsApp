import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,FlatList,ImageBackground} from "react-native";
import CustomHeader from "../components/CustomHeader";
import {CATEGORIES,MEALS} from "../data/dummy-data";
import {useSelector} from "react-redux";

const Favorites = props =>{

    const {navigation} = props;

    const favMeals = useSelector(state=>state.meals.favoriteMeals)

    const renderNoFav=()=>{
        return(
            <View>
                <Text>There is no favorite for now. You can start select some favorites from meals !</Text>
            </View>
        )
    }


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
        <View style={{flex :1}}>
        <CustomHeader title="Favorites" navigation={navigation} />
        <View style={styles.screen}>
            {favMeals ? <TouchableOpacity onPress={()=>navigation.navigate('MealDetail')} style={{width : '95%'}}>
            <FlatList data={favMeals} keyExtractor={(item,index)=>item.id} renderItem={renderMeals} />
            </TouchableOpacity> : renderNoFav }
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


export default Favorites;
