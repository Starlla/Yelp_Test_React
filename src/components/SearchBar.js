import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name={"search"} style={styles.iconStyle}/>
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search" style={styles.inputStyle} value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={() => onTermSubmit()}/>
    </View>
}

const styles = StyleSheet.create({


    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
    }
});

export default SearchBar;