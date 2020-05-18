import React, {useState, useEffect} from'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        console.log(response.data);
    };

    useEffect(() =>{
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}> {result.name}</Text>
            <FlatList
            data = {result.photos}
            keyExtractor = {(photo) => photo}
            renderItem = {({item}) =>{
                return <Image style ={styles.image} source={{uri:item}} />
            }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginVertical: 15
    },
    image:{
        height:200,
        width: 300,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 4,
    }
});

export default ResultsShowScreen;
