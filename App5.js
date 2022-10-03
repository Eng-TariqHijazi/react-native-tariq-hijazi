import { View,Text ,TouchableOpacity} from "react-native";
import React, { useState } from "react";

export default function App(){
    const [count , setCount]= useState(5)
    function dec(){
        setCount(pre=>pre-1)
    };
    function inc(){
        setCount(pre=>pre+1)
    };
    return(
        <View >
        <View style={{justifyContent:'center',alignItems:'center' ,height:800}}>
            <TouchableOpacity onPress={dec}><Text style={{fontSize:20,width:100,height:100}}> - </Text></TouchableOpacity>
            <Text style={{fontSize:20,width:100,height:100}}>{count}</Text>
            <TouchableOpacity onPress={inc}><Text style={{fontSize:20,width:100,height:100}}> + </Text></TouchableOpacity>
            
        </View>
        </View>

    );
    }
    // Start useState
// export default function App(){
//     const [count , setCount]= useState(5)
//     function dec(){
//         setCount(pre=>pre-1)
//     };
//     function inc(){
//         setCount(pre=>pre+1)
//     };
//     return(
//         <View >
//         <View style={{justifyContent:'center',alignItems:'center' ,height:800}}>
//             <TouchableOpacity onPress={dec}><Text style={{fontSize:20,width:100,height:100}}> - </Text></TouchableOpacity>
//             <Text style={{fontSize:20,width:100,height:100}}>{count}</Text>
//             <TouchableOpacity onPress={inc}><Text style={{fontSize:20,width:100,height:100}}> + </Text></TouchableOpacity>
            
//         </View>
//         </View>

//     );
//     }

        // End useState