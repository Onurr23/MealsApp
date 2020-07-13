import React,{useEffect} from "react";
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Platform} from "react-native";
import {CATEGORIES} from "../data/dummy-data";


const CategoriesScreen = (props) =>{
    

    const {navigation} = props;
    
    const renderGridItem = ({item})=>{
        return(
            <TouchableOpacity style={{...styles.gridItem,backgroundColor : item.color}} onPress={()=>navigation.navigate('CategoryMeals',{categoryId : item.id})}>
            <View>
            <Text style={styles.text}>{item.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    return(
       <FlatList keyExtractor={(item,index)=>item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    )

}


const styles = StyleSheet.create({

    gridItem :{

        flex :1,
        margin : 15,
        height : 150,
        borderRadius : 10,
        shadowColor : 'black',
        shadowOpacity : 0.26,
        shadowOffset : {width : 0, height : 2},
        shadowRadius : 10,
        elevation : 3,
        justifyContent : 'center',
        alignItems :'center'

    },
    text : {

        fontFamily : 'open-sans-bold',
        fontSize : 22

    }

})

export default CategoriesScreen;

