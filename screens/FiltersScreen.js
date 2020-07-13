import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,Switch,Platform} from "react-native";
import CustomHeader from "../components/CustomHeader";
import Colors from "../constants/Colors";
import {useDispatch} from "react-redux";
import {setFilters} from "../store/actions/meals";


const FiltersScreen = props =>{

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegatarian, setIsVegtarian] = useState(false);
    const dispatch = useDispatch();


    const saveFilters = () =>{

        const appliedFilter ={

            gluten : isGlutenFree,
            lactose : isLactoseFree,
            vegan : isVegan,
            vegatarian : isVegatarian

        }

      dispatch(setFilters(appliedFilter));
      
    }

    return(
        <View style={{flex :1}}>
        <CustomHeader title="Filter Meals" navigation={props.navigation} save={true} saveFilter={saveFilters} />
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <View style={styles.filterContainer}>
         <Text>Gluten Free</Text>
         <Switch trackColor={{true : Colors.primaryColor}} thumbColor={Platform.OS === 'android' ? Colors.primaryColor : 'white'} value={isGlutenFree} onValueChange={newValue=>setIsGlutenFree(newValue)}/>
        </View>

        <View style={styles.filterContainer}>
         <Text>Lactose Free</Text>
         <Switch trackColor={{true : Colors.primaryColor}} thumbColor={Platform.OS === 'android' ? Colors.primaryColor : 'white'} value={isLactoseFree} onValueChange={newValue=>setIsLactoseFree(newValue)}/>
        </View>

        <View style={styles.filterContainer}>
         <Text>Vegan</Text>
         <Switch trackColor={{true : Colors.primaryColor}} thumbColor={Platform.OS === 'android' ? Colors.primaryColor : 'white'} value={isVegan} onValueChange={newValue=>setIsVegan(newValue)}/>
        </View>

        <View style={styles.filterContainer}>
         <Text>Vegatarian</Text>
         <Switch trackColor={{true : Colors.primaryColor}} thumbColor={Platform.OS === 'android' ? Colors.primaryColor : 'white'} value={isVegatarian} onValueChange={newValue=>setIsVegtarian(newValue)}/>
        </View>
        </View>
    )


}

const styles = StyleSheet.create({

    filterContainer : {
        
        flexDirection :'row',
        justifyContent : 'space-around',
        width : '97%',
        marginVertical : 10

       
    },
    title : {

        fontFamily : 'open-sans-bold',
        fontSize : 22,
        textAlign : 'center',
        marginTop : 15,
        marginBottom : 15

    }

})

export default FiltersScreen;

