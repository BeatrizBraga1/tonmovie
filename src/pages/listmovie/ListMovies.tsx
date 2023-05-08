import { StyleSheet, View} from 'react-native';

//components
import Navbar from '../../components/navbar/Navbar';
import MoviesRow from '../../components/moviesrow/MoviesRow';

//navigation
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

type ListMoviesScreenNavigationProp = StackNavigationProp<ParamListBase, 'ListMovie'>;

interface ListMoviesProps {
  navigation: ListMoviesScreenNavigationProp;
}


export default function ListMovies({ navigation }: ListMoviesProps) {
  return (
    <View style={styles.container}>
        <Navbar navigation={navigation}/>
        <MoviesRow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});