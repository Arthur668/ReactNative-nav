import React from 'react';
import { View, Button } from 'react-native';



export function ScreenA ({navigation}) {
function openScreen(){
        navigation.navigate('screenB');
}

    return (
    <View style = {{flex:1, backgroundColor:'red', justifyContent:'center'}}>
        <Button 
        title='Ir para a Tela B'
        onPress={openScreen}
        />
    </View>
  );
}