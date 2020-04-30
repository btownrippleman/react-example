/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


// const App = (props) => (
//   <View>
//     <Text>App1</Text>
//   </View>
// );

AppRegistry.registerComponent(appName, () => App);
export default AppRegistry;