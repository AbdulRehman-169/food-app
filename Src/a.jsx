import { View, Text } from 'react-native'
import React from 'react'

const a = () => {
    const biryani = require('../Images/Pakistani/Biryani.png');
        const Daal_Chawal = require('../Images/Pakistani/Daal-Chawaal.jpg');
        const Roti = require('../Images/Pakistani/Roti.jpg');
        const Chicken = require('../Images/Pakistani/Chicken.jpg');
       const data =[
            {id:1, title: 'Biryani', image:biryani},   
            {id:2, title: 'Daal Chawal', image:Daal_Chawal},   
            {id:3, title: 'Roti', image:Roti},   
            {id:4, title: 'Chicken', image:Chicken},   
        ]
    
        const Card = ({title, image}) => {
            <View style={styles.card}>
            <Image source={image} style={styles.image} />,
            <Text>{title} style={styles.title}</Text> 
            </View>
        }
  return (
<View  style={styles.container}>
        <View>
            <TextInput
                Placeholder = "Search here...."  //why?
                placeholderTextColor='#999'
                style = {styles.SBar}
                >
            </TextInput>
        </View>
        <View>
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
            <Card title={item.title}
            Image = {item.image}
            />
        }
      />
    </View> 
    </View>
  )
}

  )
}

export default a
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
      },
      card: {
        width: 140,
        height: 160,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
      },
      image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginBottom: 10,
        resizeMode: 'cover',
      },
      title: {
        fontSize: 16,
        fontWeight: '600',
      },
})