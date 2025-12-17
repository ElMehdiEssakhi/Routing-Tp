import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native'; 
import AuthProvider, { AuthContext } from "./context/AuthContext"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AppBar from './screens/AppBar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppDrawer from "./navigation/AppDrawer"; 
import LoginScreen from "./screens/LoginScreen"; 
import { useContext } from "react"; 
 
const Stack = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator(); 

 
function RootNavigator() { 
 const { user } = useContext(AuthContext); 
 
 return user ? <AppDrawer /> : <LoginScreen />; 
} 
 
// --- Navigation par pile --- 
function HomeStack() { 
  return ( 
    <Stack.Navigator  screenOptions={{ headerShown: false }}> 
      <Stack.Screen  name="Accueil"  component={HomeScreen}  options={{ 
        headerStyle: { backgroundColor: '#007AFF' },    headerTintColor: '#fff',    headerTitleStyle: { 
        fontWeight: 'bold' }, 
          }} 
        /> 
      <Stack.Screen  name="Details"  component={DetailsScreen}  options={{ title: 'Mes Détails Personnalisés' }} />  
    </Stack.Navigator> 
  ); 
} 
 
// --- Navigation par onglets --- 
export default function App() { 
   return ( 
   <AuthProvider> 
     <NavigationContainer> 
       <RootNavigator /> 
     </NavigationContainer> 
   </AuthProvider> 
 );
  return ( 
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#000000ff' }}>
        <NavigationContainer> 
            <AppBar />
          <Tab.Navigator  
              screenOptions={{ 
                headerShown: false,          // cacher le header 
                tabBarActiveTintColor: 'blue', // couleur de l’onglet actif 
                tabBarInactiveTintColor: 'gray', // couleur de l’onglet inactif 
                tabBarStyle: {backgroundColor: '#fff',borderTopWidth: 1,borderTopColor: '#e0e0e0',}, // style de la barre 
                tabBarLabelStyle: { fontSize: 14 }, // style du texte 
              }} 
              > 
                <Tab.Screen  name="Maison"  component={HomeStack}  options={{ tabBarIcon: ({ color, size 
                    }) => (<Ionicons name="home" size={size} color={color} />),}}/>  
                <Tab.Screen name="Paramètres" component={SettingsScreen} options={{ tabBarIcon: ({ color,size
                    }) => (<Ionicons name="settings" size={size} color={color} />), }}  /> 
          </Tab.Navigator> 
        </NavigationContainer> 
       </SafeAreaView>
    </SafeAreaProvider>
  ); 
} 