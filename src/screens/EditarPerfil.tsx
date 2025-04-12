import { View, Text, SafeAreaView, TouchableOpacity, GestureResponderEvent, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { TextInput } from "react-native-paper";
const EditarPerfil = ({ navigation}) => {
    const [nome, setNome] = React.useState("Jonathan");
    const [email,setEmail] = React.useState("jonathan@gmail.com")

    const [selectedImage, setSelectedImage] = React.useState(require("../../assets/user.jpg")); // Default image
   
    const handleImageSelection = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);
        if (!result.canceled) {
            setSelectedImage({ uri: result.assets[0].uri });
        }
    }

  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFAFA" , paddingHorizontal: 22}}>
        <View style={{marginHorizontal: 12, flexDirection: "row", justifyContent: "center"}}>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={{position: "absolute", left: 0}}>

                <MaterialIcons name="keyboard-arrow-left" size={24} color="#000" />
            </TouchableOpacity>

            <Text style={{fontSize: 20, fontWeight: "bold"}}>Editar Perfil</Text>
        </View>
        <ScrollView>
            <View style={{alignItems: "center",marginVertical: 22}}>
                <TouchableOpacity 
                onPress={handleImageSelection}>

                    <Image
                    source={selectedImage}

    
                    />

                    <View style={{position: "absolute", bottom: 0, right: 10, zIndex: 9999}}>
                        <MaterialIcons name="photo-camera" size={32} color="#000"/>

                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "column",marginBottom: 22}}>
                <Text >Nome</Text>
                <View style={{height: 44, width: "100%", borderColor: "#000080", borderWidth: 1, borderRadius: 4, marginVertical: 6, justifyContent: "center", paddingLeft: 8}}>
                    <TextInput
                    value={nome}
                    onChangeText={value=>setNome(value)}
                    editable={true}
                    />
                </View>
                <View style={{ flexDirection: "column",marginBottom: 22}}>
                    <Text >Email</Text>
                    <View style={{height: 44, width: "100%", borderColor: "#000080", borderWidth: 1, borderRadius: 4, marginVertical: 6, justifyContent: "center", paddingLeft: 8}}>
                        <TextInput
                        value={email}
                        onChangeText={value=>setEmail(value)}
                        editable={true}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>

   </SafeAreaView>
  );
}
export default EditarPerfil;
