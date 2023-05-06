import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

//components
import Navbar from '../../components/navbar/Navbar';
import MovieDetails from '../../components/moviedetails/MovieDetails';
import Filter from '../../components/filter/Filter';



export default function App() {
  return (
    <View style={styles.container}>
        <Navbar />
        <MovieDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});