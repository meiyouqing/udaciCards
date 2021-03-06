import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, VirtualizedList,StyleSheet,  Platform } from 'react-native'
import { addDeck } from '../utils/api'
import { white, black } from '../utils/colors'
import styles from '../styles'

class AddDeck extends Component {
    state = {
        input:''
    }
    add = () => {
        const { input } = this.state
        if(!input) return

        addDeck(input)
            .then(() => {
                this.props.navigation.navigate('DeckView', {deck: {title: input, questions:[] }})
                this.setState({input: ''})
            })        
    }
    handleChangeText = (input) =>{
        this.setState({input})
    }
    render(){
        return (
            <View>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>What is the title</Text>
                    <Text style={styles.title}>of your new</Text>
                    <Text style={styles.title}>deck?</Text>
                </View>
                <TextInput style={styles.input} value={this.state.input} placeholder="Deck Title" onChangeText={this.handleChangeText} />
                <View style={styles.container}>
                    <TouchableOpacity style={styles.submitBtn} onPress={this.add}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default AddDeck