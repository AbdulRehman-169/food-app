import { useEffect, useState } from 'react';
import { _Image, Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { groupedData } from '../lib/data';
import {useNavigation} from '@react-navigation/native'

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    const navigation = useNavigation();

useEffect(() => {
    setData(groupedData)
}, [groupedData])

    const filteredData = data.map(group => ({
        ...group,
        dishes: group.dishes.filter(dish =>
            dish.title.toLowerCase().includes(searchText.toLowerCase())
            // ||
            //dish.description.toLowerCase().includes(searchText.toLowerCase())
        ),
    }))
        .filter(group => group.dishes.length > 0);
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder="Search here...."  // (Always use lowerCase letters)
                    placeholderTextColor='#999'
                    style={styles.SBar}
                    value={searchText}
                    onChangeText={setSearchText}
                >
                </TextInput>
            </View>
            <ScrollView>
                {filteredData.map((country, index) => (
                    <View style={styles.PMain} key={index}>
                        <Text style={styles.Pakistani}>{country.category}</Text>
                        <FlatList
                            data={country.dishes}
                            keyExtractor={(item) => item.id}
                            horizontal
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[styles.card, country.category === 'Chinese' &&  {marginBottom:25}]}
                                    onPress={() => navigation.navigate("Detailed",{id: item.id })}
                                >
                                <Image source={item.image} style={{ width: 100, height: 100, marginBottom:10 }} />
                                <Text style={styles.itemTitle}>{item.title}</Text>,
                                    <Text >{item.description}</Text>,
                                    <Text style={styles.itemTitle}>{item.Price}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding: 10,
        // alignItems: 'center',
        backgroundColor: '#fff',
    },
    SBar: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        margin: 15
        // marginTop: 15,
        // marginLeft: 15,
        // marginRight: 15
    },
    PMain: {
       // paddingVertical: 10,
      
    },
    Pakistani: {
        fontSize: 20,
        //padding: 10
    },
    English: {
        fontSize: 20,
        //padding: 10
    },
    Chinese: {
        fontSize: 20,
        //padding: 10
    },
    card: {
        width: 140,
        height: 280,
        backgroundColor: '#fff',
        marginHorizontal: 10,
       // borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'horizontal'
    },
    itemTitle: {
        fontSize: 20
    }

})




/*

 import { _Image, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Home = () => {
    const groupedData = [
        {
          category: 'Pakistani',
          dishes: [
            { id: 1, title: 'Biryani', description: 'Famous Pakistani Dish', Price: '500', image: require('../Images/Pakistani/Biryani.png') },
            { id: 2, title: 'Chicken Karahi', description: 'Spicy Chicken Gravy', Price: '600', image: require('../Images/Pakistani/Chicken.jpg') },
            { id: 3, title: 'Roti', description: 'Traditional Bread', Price: '20', image: require('../Images/Pakistani/Roti.jpg') },
            { id: 4, title: 'Daal Chawal', description: 'Lentils with Rice', Price: '400', image: require('../Images/Pakistani/Daal-Chaawal.jpg') },
            { id: 5, title: 'Paratha', description: 'Buttery Flatbread', Price: '50', image: require('../Images/Pakistani/Parathy.webp') },
          ],
        },
        {
          category: 'Indian',
          dishes: [
            { id: 6, title: 'Butter Chicken', description: 'Creamy Chicken Curry', Price: '650', image: require('../Images/Pakistani/Biryani.png') },
            { id: 7, title: 'Paneer Tikka', description: 'Grilled Paneer Cubes', Price: '550', image: require('../Images/Pakistani/Chicken.jpg') },
            { id: 8, title: 'Masala Dosa', description: 'South Indian Delight', Price: '300', image: require('../Images/Pakistani/Roti.jpg') },
            { id: 9, title: 'Chole Bhature', description: 'Spicy Chickpeas with Fried Bread', Price: '400', image: require('../Images/Pakistani/Daal-Chaawal.jpg') },
            { id: 10, title: 'Samosa', description: 'Crispy Snack with Filling', Price: '50', image: require('../Images/Pakistani/Parathy.webp') },
          ],
        },
        {
          category: 'English',
          dishes: [
            { id: 11, title: 'Fish and Chips', description: 'Classic British Dish', Price: '700', image: require('../Images/Pakistani/Biryani.png') },
            { id: 12, title: 'English Breakfast', description: 'Full English Plate', Price: '800', image: require('../Images/Pakistani/Chicken.jpg') },
            { id: 13, title: 'Shepherd’s Pie', description: 'Minced Meat with Mashed Potato', Price: '750', image: require('../Images/Pakistani/Roti.jpg') },
          ],
        },
        {
          category: 'Chinese',
          dishes: [
            { id: 14, title: 'Chow Mein', description: 'Stir-fried Noodles', Price: '600', image: require('../Images/Pakistani/Daal-Chaawal.jpg') },
            { id: 15, title: 'Sweet and Sour Chicken', description: 'Chinese Favorite', Price: '650', image: require('../Images/Pakistani/Parathy.webp') },
          ],
        },
      ];
      
      


    return (
        <View>
            <View>
                <TextInput
                    Placeholder="Search here...."  //why?
                    placeholderTextColor='#999'
                    style={styles.SBar}
                >
                </TextInput>
            </View>
            {groupedData.map((country, index) => (
                <View style={styles.PMain} key={index}>
                    <Text style={styles.Pakistani}>{country.category}</Text>
                    <FlatList
                        data={country.dishes}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image source={item.image} style={{ width: 100, height: 100 }} />
                                <Text style={styles.itemTitle}>{item.title}</Text>,
                                <Text >{item.description}</Text>,
                                <Text style={styles.itemTitle}>{item.Price}</Text>

                            </View>
                        )}

                    />
                </View>

            ))}

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    SBar: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        marginLeft: 15,
        marginRight: 15
    },
    PMain: {
        paddingVertical: 10,
    },
    Pakistani: {
        fontSize: 20,
        padding: 10
    },
    English: {
        fontSize: 20,
        padding: 10
    },
    Chinese: {
        fontSize: 20,
        padding: 10
    },
    card: {
        width: 140,
        height: 200,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'horizontal'
    },
    itemTitle: {
        fontSize: 20
    }

}) */