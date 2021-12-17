import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import { auth } from "../../data/firebase";

export default function DrawerContainer(props: { navigation: any; }) {
  const { navigation } = props;

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch((error: { message: any }) => alert(error.message))
  }
  
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CREATE GROUP"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Create");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SIGN OUT"
          source={require("../../../assets/icons/close.png")}
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
