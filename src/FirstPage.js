import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  View,
  Text,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { updateText } from './actions/index';

const Firstpage = ({sampleText, sampleDispatch}) => {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: '#333333', flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#CC0000'}}>{sampleText}</Text>
        <TextInput style={{backgroundColor: '#EEEEEE', borderRadius: 3, width: '80%'}} onChangeText={(text) => setValue(text)} />
        <Button
          title="Press me"
          onPress={() => sampleDispatch(value)}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    sampleText: state.flowers.text
  }
};

const mapDispatchToProps = (dispatch)  => {
  return {
    sampleDispatch: (text) => dispatch(updateText(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Firstpage)