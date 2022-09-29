import { StatusBar } from "expo-status-bar";
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function App() {
  const onProcesshand = () => {
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "web" ? "padding" : "height"}
      style={{ flex: 1, height: "100%" }}
    >
      <TouchableWithoutFeedback onPress={onProcesshand}>
        <ScrollView>
          <View>
            {/* <Image source={require('./assets/favicon.png')}/> */}
            {/* <Text>Open up App.js to start working on your app!</Text> */}
            {/* <Compo title ="Hello " style={{width:'100%',height:500}} /> */}
            <StatusBar style="auto" />
            <ImageBackground
              resizeMode="cover"
              style={{ height: 200 }}
              source={require("./assets/1.jpeg")}
            ></ImageBackground>
            <View
              style={{
                width: 150,
                top: -60,
                left: 20,
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  borderWidth: 5,
                }}
                resizeMode="contain"
                source={require("./assets/1.jpeg")}
              />
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                Tariq Hijazi
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F0F0F0",
                  borderColor: "#1B55A0",
                  borderWidth: 1,
                  borderRadius: 30,
                  padding: 12,
                  left: 220,
                  bottom: 50,
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                  }}
                >
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center" }}>
              <View
                style={{ width: 350, backgroundColor: "#CCD5E3", height: 200 }}
              >
                <ScrollView>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#000",
                      textAlign: "center",
                      padding: 20,
                    }}
                  >
                    lorem-ipsum.line Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum
                  </Text>
                </ScrollView>
              </View>
              <View style={{ alignItems: "center", height: 300 }}>
                <TextInput
                  placeholder="User Name"
                  keyboardType={"email-address"}
                  style={{
                    marginTop: 20,
                    width: 300,
                    height: 50,
                    borderColor: "#000",
                    borderWidth: 1,
                    borderRadius: 15,
                    textAlign: "left",
                    paddingHorizontal: 15,
                  }}
                />
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  style={{
                    marginTop: 20,
                    width: 300,
                    height: 50,
                    borderColor: "#000",
                    borderWidth: 1,
                    borderRadius: 15,
                    textAlign: "left",
                    paddingHorizontal: 15,
                  }}
                />
                <TouchableOpacity
                  style={{
                    borderColor: "#1B55A0",
                    borderWidth: 1,
                    borderRadius: 20,
                    padding: 12,
                    left: 100,
                    top: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                    }}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
