import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';

export default function Home() {
    return (        
        <View style={styles.container}>
            <Text>Home page</Text>
            <Button 
                title = "go to about page"
                onPress= {
                    ()=>{
                        navigation.navigate('About')
                    }
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
