import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ButtonProps } from 'react-native';

interface ButttonProps {
  title: string
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feliz dia do Programador!</Text>
      <StatusBar style="auto" backgroundColor='red'/>
      <Button title='Send 1'/>
    </View>
  );
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24
  }
});
