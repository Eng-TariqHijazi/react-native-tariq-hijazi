// import { StatusBar } from "expo-status-bar";
// import { Alert, Image, StyleSheet, Text, View } from "react-native";

// const Compo = ({title}) =>(
//   <Text style={{fontSize:40}}>{title}</Text>
// );

// export default function App() {
//   return (
//     <View style={{ justifyContent: "center", alignItems: "center" }}>

//       <View style={{flexDirection: "row",marginTop:70,borderColor:"#F0F0F0",borderRadius:15,borderWidth:1,backgroundColor:"#F0F0F0"}}>
//       <View style={{width:180 ,borderWidth:15,borderColor:"#3C67AF",borderRadius:15,backgroundColor:"#3C67AF"}}>
//         <Button title="Next"  color="#3C67AF"  />
//       </View>
//       <View style={{width:180,zIndex:1,borderWidth:15,borderColor:"#F0F0F0",borderRadius:1}}>
//         <Button title="Skip"  color="#F0F0F0" backgroundColor="#F0F0F0"   />
//       </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   new: {
//     width: 204.99,
//     height: 135.59,
//   },
// });



















import { StatusBar } from "expo-status-bar";
import {
  Button,
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

// const Compo = ({title}) =>(
//   <Text style={{fontSize:40}}>{title}</Text>
// );

export default function App() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {/* <Image source={require('./assets/favicon.png')}/>
      <Text>Open up App.js to start working on your app!</Text>
      <Compo title ="Hello "/> */}
      <StatusBar style="auto" />
      <View
        style={{
          width: 320,
          height: 300,
          marginTop: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={[styles.new, { flexDirection: "row-reverse" }]}>
          <Image style={{ width: 115 }} source={require("./assets/12.png")} />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                width: 100,
                height: 53,
                fontSize: 40,
                fontFamily: "Roboto",
                fontWeight: "bold",
                color: "#1B55A0",
              }}
            >
              Chat
            </Text>
            <Text
              style={{
                width: 100,
                height: 53,
                fontSize: 40,
                fontFamily: "Roboto",
                fontWeight: "bold",
                color: "#1B55A0",
              }}
            >
              Docs
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 350,
          height: 250,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontFamily: "Roboto",
            color: "#242424",
            textAlign: "center",
          }}
        >
          Chat Arts application helps you for an online consultation to be
          carried out with a general practitioner via video call. You can after
          the call consult all necessary documents and download.
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            height: 10,
            width: 10,
            borderRadius: 10,
            backgroundColor: "#E8E8E8",
            marginRight: 10,
          }}
        ></Text>
        <Text
          style={{
            height: 10,
            width: 10,
            borderRadius: 10,
            backgroundColor: "#1B55A0",
          }}
        ></Text>
      </View>
      <View style={{ flexDirection: "row-reverse", marginTop: 70 }}>
        <Text
          onPress={() => {}}
          style={{
            width: 190,
            fontSize: 18,
            fontWeight: "Regular",
            fontFamily: "Roboto",
            backgroundColor: "#F0F0F0",
            textAlign: "center",
            color: "#3C67AF",
            padding: 17,
            borderRadius: 25,
            right: -10,
            zIndex: 5,
          }}
        >
          Skip
        </Text>
        <Text
          onPress={() => {}}
          style={{
            width: 190,
            fontSize: 18,
            fontWeight: "Regular",
            fontFamily: "Roboto",
            backgroundColor: "#3C67AF",
            textAlign: "center",
            padding: 17,
            color: "#FFFFFF",
            borderRadius: 25,
            left: -10,
            zIndex: 1,
          }}
        >
          Next
        </Text>
      </View>
      {/* <View style={{flexDirection: "row",marginTop:70,borderColor:"#F0F0F0",borderRadius:15,borderWidth:1,backgroundColor:"#F0F0F0"}}>
      <View style={{width:180 ,borderWidth:15,borderColor:"#3C67AF",borderRadius:15,backgroundColor:"#3C67AF"}}>
        <Button title="Next"  color="#3C67AF"  />
      </View>
      <View style={{width:180,zIndex:1,borderWidth:15,borderColor:"#F0F0F0",borderRadius:1}}>
        <Button title="Skip"  color="#F0F0F0" backgroundColor="#F0F0F0"   />
      </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  new: {
    width: 204.99,
    height: 135.59,
  },
});

