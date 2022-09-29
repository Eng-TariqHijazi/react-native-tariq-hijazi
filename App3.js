import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
  useWindowDimensions,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Fourth Item",
  },
  {
    id: "5",
    title: "five Item",
  },
  {
    id: "6",
    title: "sex Item",
  },
  {
    id: "7",
    title: "seven Item",
  },
  {
    id: "8",
    title: "eight Item",
  },
  {
    id: "9",
    title: "nine Item",
  },
  {
    id: "10",
    title: "ten Item",
  },
  {
    id: "11",
    title: "11 Item",
  },
  {
    id: "12",
    title: " 12 Item",
  },
];

export default function App() {
  const Hed = () => {
    return (
      <View>
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={require("./assets/1.jpeg")}
            />
            <Text
              style={{
                fontSize: 26,
                fontWeight: "400",
                marginLeft: 20,
                marginTop: 4,
              }}
            >
              Hi ,Tariq !
            </Text>
          </View>
          <Image
            style={{ width: 25, height: 25, marginTop: 10 }}
            source={require("./assets/bell.png")}
          />
        </View>
        <View
          style={{
            borderRadius: 12,
            marginTop: 40,
            backgroundColor: "#F0F0F0",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "500",
              marginTop: 4,
              textAlign: "center",
            }}
          >
            Let's start
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            CONSULTATION
          </Text>
          <TouchableOpacity
            style={{
              width: 170,
              backgroundColor: "#3C67AF",
              borderColor: "#3C67AE",
              borderWidth: 1,
              borderRadius: 15,
              padding: 12,
              marginVertical: 20,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 18, color: "#FFF" }}>
              Start
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: height * 0.08,
            width: width * 0.9,
            marginVertical: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "400" }}>
            Last Documents
          </Text>
          <View style={{ flexDirection: "row", top: 2 }}>
            <Text style={{ fontSize: 18 }}>View all</Text>
            <Image
              style={{ width: 20, height: 20, left: 3, top: 4 }}
              source={require("./assets/arow.png")}
            />
          </View>
        </View>
      </View>
    );
  };
  const [modalVisible, setModalVisible] = useState(true);
  const { width, height } = useWindowDimensions();
  const Item = ({ title }) => (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            backgroundColor: "#CCD5E3",
            justifyContent: "center",
            alignItems: "center",
            width: width * 0.8,
            top: height * 0.2,
            height: height * 0.5,
            left: width * 0.1,
          }}
        >
          <Text
            style={{ fontSize: 26, fontWeight: "400", textAlign: "center" }}
          >
            Hello World!{" \n"} Welcome{" \n"}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: "400",
                textAlign: "center",
                borderWidth: 2,
                borderColor: "#F0F0F0",
                width: width * 0.4,
                borderRadius: 15,
                paddingVertical: 10,
                backgroundColor: "#3C67AF",
              }}
            >
              Close Tab
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Pressable
        style={[styles.item, { width: width * 0.9 }]}
        onPress={() => setModalVisible(true)}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginLeft: 8,
              marginTop: 5,
            }}
            source={require("./assets/document.png")}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image
          style={{ width: 30, height: 30, marginTop: 5 }}
          source={require("./assets/dowload.png")}
        />
      </Pressable>
    </View>
  );
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    // <ScrollView >
    <View
      style={{
        height: height,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          height: height * 1,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <StatusBar style="auto" />
        {/* //Start header */}
        {/* <View
        style={{
          width: width * 0.9,
          marginTop: 50,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100 }}
            source={require("./assets/1.jpeg")}
          />
          <Text
            style={{
              fontSize: 26,
              fontWeight: "400",
              marginLeft: 20,
              marginTop: 4,
            }}
          >
            Hi ,Tariq !
          </Text>
        </View>
        <Image
          style={{ width: 25, height: 25, marginTop: 10 }}
          source={require("./assets/bell.png")}
        />
      </View>
      <View
        style={{
          borderRadius: 12,
          marginTop: 40,
          backgroundColor: "#F0F0F0",
          width: width * 0.9,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            marginTop: 4,
            textAlign: "center",
          }}
        >
          Let's start
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          CONSULTATION
        </Text>
        <TouchableOpacity
          style={{
            width: 170,
            backgroundColor: "#3C67AF",
            borderColor: "#3C67AE",
            borderWidth: 1,
            borderRadius: 15,
            padding: 12,
            marginVertical: 20,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 18, color: "#FFF" }}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          // height: height * 0.08,
          width: width * 0.9,
          marginVertical: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "400" }}>Last Documents</Text>
        <View style={{ flexDirection: "row", top: 2 }}>
          <Text style={{ fontSize: 18 }}>View all</Text>
          <Image
            style={{ width: 20, height: 20, left: 3, top: 4 }}
            source={require("./assets/arow.png")}
          />
        </View>
      </View> */}
        {/* //End header */}

        {/* //Start list */}

        <SafeAreaView
          style={[
            styles.container,
            { width: width * 0.9, height: height * 0.88 },
          ]}
        >
          <FlatList
            ListHeaderComponent={<Hed />}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
        {/* //End list */}

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
              marginHorizontal: width * 0.09,
              marginVertical: 27,
            }}
            source={require("./assets/house-black-silhouette-without-door.png")}
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
            source={require("./assets/doccc.png")}
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
    // height: '88%',
  },
  item: {
    padding: 10,
    marginVertical: 10,
    // marginHorizontal: 12,
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    marginLeft: 10,
  },
});
