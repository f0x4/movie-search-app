import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import RootStackNavigator from "./src/navigation/RootStackNavigator";
import { store } from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
        </Provider>
    );
}
