import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import images from "./constants/images";

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {LinearGradient} from 'expo-linear-gradient';
import theme, { FONTS, COLORS, SIZES } from "./constants/theme";

import searchIcon from './assets/images/searchIcon';
import Icon from './assets/images/searchIcon';

import JamJar from './assets/icons/jam_jar_icon';
import Recipes from './assets/icons/recipes';
import Search from './assets/icons/search';
import BackButton from './assets/icons/back_button';
import BasketIcon from './assets/icons/basket_icon';
import StarIcon from './assets/icons/star_icon';

import { SearchBar } from 'react-native-elements';
import { useFonts, Roboto_700Bold, Roboto_300Light } from '@expo-google-fonts/roboto';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { ScaledSheet, scale } from 'react-native-size-matters';

const bg_images = [require("./assets/images/bg_img1.png"),require("./assets/images/bg_img2.png"),require("./assets/images/fade.png")];
const maxWidth = 600;
const maxHeight = 800;
var widthVal;
var marginTop;
const getFonts = () => Font.loadAsync({
  'Pattaya': require('./assets/fonts/Pattaya-Regular.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
});
const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  const [search, setSearch] = useState('');
  const updateSearch = (text) => {
    console.log(text)
    if (text) {
      setSearch(text);
    }
  }
    return (
    <ImageBackground source={bg_images[0]} style={styles.image}>
    <View style={styles.container}>
        <SafeAreaView style={{alignSelf: "stretch", width: widthVal}}>
          <View style={{marginHorizontal: "5%", marginTop: "10%"}}>
            <View>
              <Text style={{...FONTS.largeTitle,color: COLORS.white, textAlign: "center"}}>Jams, So Good!</Text>
            </View>

            {/* SEARCH BAR */}
            <View style={{marginTop: marginTop}}>
              <SearchBar 
                  placeholder="search..."
                  onChangeText={(text) => updateSearch(text)}
                  value={search}
                  lightTheme={true}
                  style={{color: COLORS.white, ...FONTS.mediumTitle}}
                  containerStyle={{backgroundColor: "rgba(255,255,255,0.5)", borderRadius: scale(40),borderTopWidth:0, borderBottomWidth:0, }}
                  leftIconContainerStyle={{width: scale(50), height: scale(50), fontSize: scale(20), color: COLORS.white}}
                  searchIcon={{size: scale(40), color: COLORS.white}}
                  placeholderTextColor={COLORS.white}
                  inputContainerStyle={{backgroundColor: "rgba(255,255,255,0)"}}
              />
            </View>

            <View>
              <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 80}}>
                <View>
                  <TouchableOpacity 
                    style={{padding: 20,backgroundColor:"rgba(255,255,255,0.5)",borderRadius: 30}}
                    onPress={() => navigation.navigate('RecipesPage')}      
                  >
                    <Recipes width={80} height={80}></Recipes>
                  </TouchableOpacity>
                  <Text style={{...FONTS.iconTitle, color: COLORS.white, textAlign: "center", marginTop: 20}}>Recipes</Text>
                </View>
                
                <View>
                  <TouchableOpacity 
                    style={{padding: 20,backgroundColor:"rgba(255,255,255,0.5)",borderRadius: 30}}
                    onPress={() => navigation.navigate('JamPage')}
                  >
                    <JamJar width={80} height={80} ></JamJar>
                  </TouchableOpacity>
                  <Text style={{...FONTS.iconTitle, color: COLORS.white, textAlign: "center", marginTop: 20}}>Jams</Text>
                </View>
              </View>
            </View>
            
          </View>
        </SafeAreaView>
    </View>
    </ImageBackground>
    );
}

function MenuItem(props) {
  //'./assets/images/jam_icon1.png'
  const starsVar = [];
  for (var i=0; i < props.stars;i++) {
    starsVar.push(
      <StarIcon key={i.toString()}style={{margin: 2}}></StarIcon>
    )
  }

  return (
    <View style={{borderBottomColor:"#C4C4C4", borderBottomWidth: 1, marginTop: 25, paddingBottom: 25}}>
    <TouchableOpacity onPress={() => props.navigation.navigate('ProductPage', {routeType: "recipes"})}>
      <View style={{flexDirection: "row"}}>
        <View>
          <Image source={props.image} style={{width: scale(120), height: scale(120)}}></Image>
          <View width={40} height={40} style={{backgroundColor:COLORS.secondary, borderRadius: 40, justifyContent: "center", alignItems:"center",position:"absolute", bottom:10, right:-4}}>
            <Text style={{ ...FONTS.iconTitle, color: "#fff", textAlign: "center"}}>+</Text>
          </View>
        </View>

        <View style={{justifyContent: "center", marginLeft: 20}}>
          <Text style={{fontSize: 25, marginBottom: 5}}>{props.title}</Text>
          <View style={{flexDirection: "row"}}>
            {starsVar}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>
  );
}

const jamdata = [
  {
    key: '1',
    name: "Strawberry",
    img: require("./assets/images/jam_icon1.png"),
    type: "jellies",
    stars: 4
  },
  {
    key: '2',
    name: "Blueberry",
    img: require("./assets/images/jam_icon4.png"),
    type: "fruitjams",
    stars: 3
  },
  {
    key: '3',
    name: "Rasberry",
    img: require("./assets/images/jam_icon2.png"),
    type: "chutneys",
    stars: 4
  },
  {
    key: '4',
    name: "Strawberry",
    img: require("./assets/images/jam_icon2.png"),
    type: "jellies",
    stars: 2
  },
]

var typeT = "jellies";



function RecipesScreen({navigation}) {
  const menuOptions1 = {unselected:styles.leftBox,selected:styles.leftBox};
  const menuOptions2 = {unselected:{...FONTS.text300}, selected:{...FONTS.text}};
  const menuOptions3 = {unselected:styles.jamPageLeftBoxUnselected, selected: styles.jamPageLeftBoxSelected};
  var selectedMenu = {one:"unselected",two:"unselected",three:"unselected"};

  const [typeTT, setTT] = useState(jamdata);
  const [menuOptions, setMenuOptions] = useState(
    {one:{a:menuOptions1.unselected,b:menuOptions2.unselected,c:menuOptions3.unselected},
    two:{a:menuOptions1.unselected,b:menuOptions2.unselected,c:menuOptions3.unselected},
    three:{a:menuOptions1.unselected,b:menuOptions2.unselected,c:menuOptions3.unselected}
  });

  function redrawMenu() {
    const newData = [];
    for (var i=0;i<jamdata.length;i++) {
      if (jamdata[i].type == typeT) {
        newData.push(jamdata[i]);
      }
    }
    setTT(newData);

    setMenuOptions({
      one:{a:menuOptions1[selectedMenu.one],b:menuOptions2[selectedMenu.one],c:menuOptions3[selectedMenu.one]},
    two:{a:menuOptions1[selectedMenu.two],b:menuOptions2[selectedMenu.two],c:menuOptions3[selectedMenu.two]},
    three:{a:menuOptions1[selectedMenu.three],b:menuOptions2[selectedMenu.three],c:menuOptions3[selectedMenu.three]},
    });
  }
  return(
    <View style={styles.container}>
        <SafeAreaView style={{alignSelf: "stretch", width: SIZES.width}}>
          <View style={{marginTop: scale(40), flex: 1}}>
            
            {/* top bar */}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{justifyContent: "center", alignItems:"center"}}>
                <BackButton width={40} height={40} style={{marginLeft: 40}}></BackButton>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={{backgroundColor: COLORS.primary, padding: 25, borderTopLeftRadius: 60, borderBottomLeftRadius:60}}>
                  <BasketIcon width={30} height={30}>
                  </BasketIcon>
                </View>
                
                <View width={40} height={40} style={{backgroundColor:COLORS.secondary, borderRadius: 40, justifyContent: "center", alignItems:"center",position:"absolute", top:50, left:-10}}>
                  <Text style={{ ...FONTS.iconTitle, color: "#fff", textAlign: "center"}}>2</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/*Left menu */}
            <View style={{ flexDirection: "row",paddingBottom:120, flexGrow: 1}} >
              {/* left menu */}
              <View>

              <View style={[styles.jamPageLeftBox, menuOptions.one.c]}>
                <TouchableOpacity onPress={() => {typeT="jellies";selectedMenu={one:"selected",two:"unselected",three:"unselected"};redrawMenu();}} >
                <View style={styles.leftBox}><Text style={menuOptions.one.b}>jellies</Text></View>
                </TouchableOpacity>
              </View>

              <View style={[styles.jamPageLeftBox, menuOptions.two.c]}>
                <TouchableOpacity onPress={() => {typeT="fruitjams";selectedMenu={one:"unselected",two:"selected",three:"unselected"};redrawMenu();}}>
                <View style={menuOptions.two.a}><Text style={menuOptions.two.b}>fruit jams</Text></View>
                </TouchableOpacity>
              </View>

              <View style={[styles.jamPageLeftBox, menuOptions.three.c]}>
                <TouchableOpacity onPress={() => {typeT="chutneys";selectedMenu={one:"unselected",two:"unselected",three:"selected"};redrawMenu();}}>
                <View style={menuOptions.three.a}><Text style={menuOptions.three.b}>chutneys</Text></View>
                </TouchableOpacity>
              </View>

              </View>

                
                {/* right menu */}
                <View style={{marginLeft: scale(10), marginTop: 40, flexGrow: 1}}>
                  <Text style={{...FONTS.title2, color: COLORS.primary}}>All that jam!</Text>
                  {/*scrollable bit*/}
                  <ScrollView style={{height: "100%"}}>
                    {typeTT.map((item)=>{
                        return (
                        <MenuItem title={item.name} image={item.img} navigation={navigation} stars={item.stars}></MenuItem>
                        )
                    })}
                  </ScrollView>
                </View>
              </View>

          </View>
          <View style={{height: 80, position: 'absolute', bottom: 0, width: "100%", justifyContent:"space-between", flex: 1, flexDirection:"row"}}>
              <View style={{backgroundColor: COLORS.primary,borderTopRightRadius: 100,right: 80, height: 80, padding: 100}} />
              <Recipes width={40} height={40} style={{position:'absolute', left: 15, top: 25}}></Recipes>
          </View>
      </SafeAreaView>
    </View>

  );
}

function ProductScreen({route, navigation}) {
  const {routeType} = route.params;
  return (
    
    <View style={styles.container}>
     
        <SafeAreaView style={{alignSelf: "stretch", width: SIZES.width}}>
        

      
        <ImageBackground source={bg_images[1]} style={{flex: 1, position: "absolute",top:0,width:"100%",
    resizeMode: "contain",
    justifyContent: "center", height: "90%", left: 0}}>      
      </ImageBackground>

      <ImageBackground source={bg_images[2]} style={{flex: 1, position: "absolute",bottom:-400,width:"100%",
    resizeMode: "contain",
    justifyContent: "center", height: "90%"}}>      
      </ImageBackground>
    

          <View style={{marginTop: scale(40), flex: 1}}>
            
            {/* top bar */}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{justifyContent: "center", alignItems:"center"}}>
                <BackButton width={40} height={40} style={{marginLeft: 40}}></BackButton>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={{backgroundColor: COLORS.primary, padding: 25, borderTopLeftRadius: 60, borderBottomLeftRadius:60}}>
                  <BasketIcon width={30} height={30}>
                  </BasketIcon>
                </View>
                
                <View width={40} height={40} style={{backgroundColor:COLORS.secondary, borderRadius: 40, justifyContent: "center", alignItems:"center",position:"absolute", top:50, left:-10}}>
                  <Text style={{ ...FONTS.iconTitle, color: "#fff"}}>2</Text>
                </View>
              </TouchableOpacity>
            </View>

         
          </View>

          <View style={{backgroundColor: "white", height: "40%", position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 20}}>
            <View style={{ marginTop: 25, width:"100%"}}>
              <Text style={{...FONTS.text300, textAlign: "right"}}>£3.20</Text>
            </View>

            <View style={{alignItems: "center",flexDirection: "row",justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", justifyContent:"space-around", width: 100}}>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                </View>

                <View style={{ flex: 1}}>
                  <Text style={{...FONTS.title2, color: COLORS.primary, textAlign: "right"}}>Strawberry Jam</Text>
                </View>
            </View>

            <View style={{position: "absolute", marginTop: 125, right: 0, width: 300, marginRight: 20}}>
              <Text style={{...FONTS.text300, textAlign: "right"}}>Deliciously sweet jam made with 100% organic strawberries</Text>
            </View>
          </View>

          
        
          <View style={{height: 80, position: 'absolute', bottom: 0, width: "100%", justifyContent:"space-between", flex: 1, flexDirection:"row"}}>
              <View style={{backgroundColor: COLORS.primary,borderTopRightRadius: 100,right: 80, height: 80, padding: 100}} />
              <Recipes width={40} height={40} style={{position:'absolute', left: 15, top: 25}}></Recipes>

              <View style={{backgroundColor: COLORS.secondary, right: 0, width: 300, borderTopLeftRadius: 100, padding: 100}}>
                
              </View>
              
              <Text style={{ ...FONTS.iconTitle2, color: "#fff", position:'absolute', right: scale(15), top: scale(25)}}>Add to basket</Text>
             
          </View>
          
      </SafeAreaView>
      
    </View>
    
  );
  
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  let [fontsLoaded2] = useFonts({Roboto_700Bold, Roboto_300Light});

  widthVal = (SIZES.width < maxWidth) ? SIZES.width : maxWidth;
  marginTop = (SIZES.height < maxHeight) ? "30%" : "50%";
  if (SIZES.height < 500) {
    marginTop = "10%";
  }

  if (fontsLoaded && fontsLoaded2){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="HomePage" component={HomeScreen} />
          <Stack.Screen name="RecipesPage" component={RecipesScreen} />
          <Stack.Screen name="JamPage" component={RecipesScreen} />
          <Stack.Screen name="ProductPage" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = ScaledSheet.create({
  jamPageLeftBox: {
    width: scale(80), 
    marginTop: scale(60)
  },
  jamPageLeftBoxUnselected: {
    borderRightColor: COLORS.secondary, 
    borderRightWidth: 0,
  },
  jamPageLeftBoxSelected: {
    borderRightColor: COLORS.secondary, 
    borderRightWidth: scale(4),
  },
  leftBox: {
    height: scale(100), 
    width: scale(100), 
    transform: [{rotate:"-90deg"}],
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row", 
    justifyContent: "center"
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  },
  centerRow: {
    flex: 1, 
    flexDirection: "row", 
  }
});
