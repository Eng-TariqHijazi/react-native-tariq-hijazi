import { StatusBar } from "expo-status-bar";
import {
  Button,
  TouchableHighlight,
  Image,
  StyleSheet,
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
        style={{ flex: 1,height:'100%' }}
      >
        <TouchableWithoutFeedback onPress={onProcesshand}>
          <ScrollView>
            <View style={{}}>
              {/* <Image source={require('./assets/favicon.png')}/> */}
              {/* <Text>Open up App.js to start working on your app!</Text> */}
              {/* <Compo title ="Hello " style={{width:'100%',height:500}} /> */}
              <StatusBar style="auto" />
              <ImageBackground
                resizeMode="cover"
                style={{  width: "100%", height: 200 }}
                source={require("./assets/1.jpeg")}
              ></ImageBackground>
              <View
                style={{
                  // backgroundColor:'#ddd',
                  width: 150,
                  
                  alignItems: "center",
                  justifyContent: "center",
                  top: -70,
                  left: 250,
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100,
                    // position: "relative",
                    borderWidth: 5,
                    borderColor: "#F",
                  }}
                  resizeMode="contain"
                  source={require("./assets/1.jpeg")}
                />
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                  }}
                >
                  Tariq Hijazi
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFF",
                    borderColor: "#1B55A0",
                    borderWidth: 1,
                    borderRadius: 30,
                    padding: 12,
                    left: -220,
                    bottom: 40,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                    }}
                  >
                    Edit Profile
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignItems: "center",
                  // justifyContent: "center",
                  
                }}
              >
                
                <View
                  style={{
                    // position: "absolute",
                    alignItems: "center",
                    justifyContent: "center",
                    // width: '100%',
                    
                  }}
                >
                  <TextInput
                    placeholder="User Name"
                    keyboardType={"email-address"}
                    style={{
                      margin: 10,
                      width: 300,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderColor: "#000",
                      borderWidth: 2,
                      borderRadius: 15,
                      textAlign: "left",
                      paddingHorizontal: 15,
                    }}
                  />
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={{
                      margin: 10,
                      width: 300,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderColor: "#000",
                      borderWidth: 2,
                      borderRadius: 15,
                      textAlign: "left",
                      paddingHorizontal: 15,
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FFF",
                      borderColor: "#1B55A0",
                      borderWidth: 1,
                      borderRadius: 20,
                      padding: 12,

                      right: 100,
                      top: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                      }}
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView>
                <View style={{ width:350,backgroundColor:'#555' ,margin:30 ,}}>
                <ScrollView style={{height:150}} pointerEvents="box-only">
              <Text style={{ fontSize: 35, color: "#FFF",overflow:'scroll' }}>
                  lorem-ipsum.line Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </Text>
                </ScrollView>
            </View>
            </ScrollView>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    
  );
}

// const Compo = ({title}) =>(

// );
const styles = StyleSheet.create({
  // new: {
  //   width: 204.99,
  //   height: 135.59,
  // },
});
