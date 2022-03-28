import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigation/RootStackNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <RootStackNavigator />
        </NavigationContainer>
    );
}
