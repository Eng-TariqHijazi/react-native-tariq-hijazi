import { StatusBar } from "expo-status-bar";
import {
  View,
  FlatList,
  Text,
  useWindowDimensions,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const DATA = [
  {
    id: "1",
    title: "Consultation 05/11/2021",
  },
  {
    id: "2",
    title: "Consultation 06/11/2021",
  },
  {
    id: "3",
    title: "Consultation 07/11/2021",
  },
  {
    id: "4",
    title: "Consultation 08/11/2021",
  },
  {
    id: "5",
    title: "Consultation 09/11/2021",
  },
  {
    id: "6",
    title: "Consultation 05/2/2021",
  },
  {
    id: "7",
    title: "Consultation 05/3/2021",
  },
  {
    id: "8",
    title: "Consultation 05/5/2021",
  },
  {
    id: "9",
    title: "Consultation 04/11/2022",
  },
  {
    id: "10",
    title: "Consultation 05/12/2021",
  },
  {
    id: "11",
    title: "Consultation 05/11/2021",
  },
  {
    id: "12",
    title: "Third Item",
  },
];

export default function App() {
  const Butt = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: width * 0.9,
        }}
      >
        <TouchableOpacity
         style={[styles.touch,{width: width * 0.28,}]}
        >
          <Text style={{ textAlign: "center", color: "#3C67AF" }}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={[styles.touch,{width: width * 0.28,}]}
        >
          <Text style={{ textAlign: "center", color: "#3C67AF" }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={[styles.touch,{width: width * 0.28,}]}
        >
          <Text style={{ textAlign: "center", color: "#3C67AF" }}>
            Download
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const { width, height } = useWindowDimensions();
  const Item = ({ title }) => (
    <View
      style={{
        
        paddingVertical: 20,
        borderBottomColor: "#40404020",
        borderBottomWidth: 1,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600" ,}}>{title}</Text>
      <View>
        <Text style={{ fontSize: 18, paddingVertical: 18 }}>Conclusion</Text>
        <Butt />
      </View>
      <View>
        <Text style={{ fontSize: 18, paddingVertical: 18 }}>
          Certificate of illness{" "}
        </Text>
        <Butt />
      </View>
      <View>
        <Text style={{ fontSize: 18, paddingVertical: 18 }}>
          Medication prescription{" "}
        </Text>
        <Butt />
      </View>
    </View>
  );
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View
      style={{ flexDirection: "column", alignItems: "center", width, height }}
    >
      <View
        style={{
          width: width,
          top: 20,
          borderBottomColor: "#40404020",
          borderBottomWidth: 1,
        }}
      >
        <StatusBar style="auto" />
        <View
          style={{
            flexDirection: "row",
            width: width * 0.52,
            height: height * 0.1,
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginLeft: 40,
            paddingBottom: 10,
          }}
        >
          <Text style={{ color: "#007AFF", fontSize: 15 }}>Back</Text>
          <Text style={{ textAlign: "center", fontSize: 17 }}>Documents</Text>
        </View>
      </View>
      <View>
        <TextInput
          style={{
            top: 40,
            width: width * 0.9,
            paddingVertical: 12,
            borderRadius: 20,
            paddingHorizontal: 50,
            borderColor: "#70707040",
            borderWidth: 1,
          }}
        ></TextInput>
        <Image
          resizeMode="contain"
          style={{ width: 35, height: 30, left: 10 }}
          source={require("./assets/bx_search.png")}
        />
        <Image
          resizeMode="contain"
          style={{
            width: 35,
            height: 30,
            right: 10,
            top: 50,
            position: "absolute",
          }}
          source={require("./assets/filter.png")}
        />
      </View>
      <View>
        <SafeAreaView style={[styles.container, { height: height * 0.72 }]}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>

        {/* //Start Footer */}

        <View
          style={{
            bottom: -20,
            flexDirection: "row",
            backgroundColor: "#161616",
            width,
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{
              width: 35,
              height: 35,
              marginHorizontal: width * 0.08,
              marginVertical: 27,
            }}
            source={require("./assets/homw.png")}
          />
          <Image
            style={{
              width: 35,
              height: 35,
              marginHorizontal: width * 0.09,
              marginVertical: 27,
            }}
            source={require("./assets/chat.png")}
          />
          <Image
            style={{
              width: 35,
              height: 35,
              marginHorizontal: width * 0.09,
              marginVertical: 27,
            }}
            source={require("./assets/doc-blue.png")}
          />
          <Image
            style={{
              width: 35,
              height: 35,
              marginHorizontal: width * 0.09,
              marginVertical: 27,
            }}
            source={require("./assets/login.png")}
          />
        </View>
        {/* //End Footer */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 15,alignItems:'center'
  },
  touch:{
    
      
      backgroundColor: "#F0F0F0",
      borderRadius: 20,
      paddingVertical: 15,
      
    
  }
});
