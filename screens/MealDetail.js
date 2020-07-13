import React,{useEffect} from "react";
import {View,Text,StyleSheet,ScrollView,Image} from "react-native";
import CustomHeader from "../components/CustomHeader";
import {useDispatch,useSelector} from "react-redux";
import {toggleFavorite} from "../store/actions/meals";

const MealDetail = props =>{

    const dispatch = useDispatch();
    const meal = props.route.params.item;

    const isFavorited = useSelector(state=>state.meals.favoriteMeals.filter(newmeal=>newmeal.id === meal.id));
    
    const markFavorite =()=>{

        dispatch(toggleFavorite(meal.id));

    }

    return(
        
        <View>
        <CustomHeader navigation={props.navigation} title={meal.title} show={true} favorite={markFavorite} isFavorited={isFavorited.length===0 ? true : false} />
        <ScrollView>
        <Image source={{uri : meal.imageUrl}} style={styles.image} />
        <View style={styles.details}>
        <Text>{meal.duration}</Text>
        <Text>{meal.complexity}</Text>
        <Text>{meal.affordability}</Text>
        </View>

        <Text style={styles.title}>Ingredients</Text>
        {meal.ingredients.map(ingredient=>(

        <Text style={styles.listItem} key={ingredient}>{ingredient}</Text>


        ))}
        
        <Text style={styles.title}>Steps</Text>
        {meal.steps.map(step=>(
            <Text style={styles.listItem} key={step}>{step}</Text>
        ))}
        
        </ScrollView>
        </View>
       
    )

}

const styles = StyleSheet.create({

    image : {

        width : '100%',
        height : 200


    },
    details : {

        flexDirection :'row',
        padding : 15,
        justifyContent : 'space-around'

    },
    title : {

        fontFamily :'open-sans-bold',
        fontSize : 22,
        textAlign : 'center'

    },
    listItem : {

        marginHorizontal : 20,
        marginVertical : 10,
        borderColor : '#ccc',
        borderWidth : 1,
        padding : 10
        
    }

})

export default MealDetail;