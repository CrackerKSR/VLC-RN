/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {VLCPlayer, VlCPlayerView} from 'react-native-vlc-media-player';
import Orientation from 'react-native-orientation';
import RNFS from 'react-native-fs'
import Video from 'react-native-video';
// import YouTube from 'react-native-youtube';

const log = console.log;

// log(RNFS.DownloadDirectoryPath+'/sample1.mkv')


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const ref = React.createRef();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const url = "https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4"
  // const url = "https://www.w3schools.com/html/mov_bbb.mp4"
  // const url = RNFS.DownloadDirectoryPath+'/sample1.mkv'
  // const url = 'https://www.youtube.com/watch?v=dl__vgkLxZQ'
  const url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4'
  // const url = 'https://youtu.be/XT3DkR1aQoY?list=RDMZyZ1VsuMp8'
  // const url = 'https://www.youtube.com/embed/XT3DkR1aQoY?list=RDMZyZ1VsuMp8'
  // const url = 'file:///'+RNFS.DownloadDirectoryPath + '/' + 'sample1.mkv'

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
    {/* <VlCPlayerView autoplay={true} url={'file://'+url}  Orientation={Orientation} showTitle={true} title="Big Buck Bunny" showBack={true} onLeftPress={()=>{}} /> */}
    {/* <VLCPlayer autoplay={true} url={url} Orientation={Orientation} showTitle={true} title="Sample" showBack={true} onLeftPress={()=>{}} /> */}
    <Video source={{uri: url}}   // Can be a URL or a local file.
       ref={ref}                                      // Store reference
       onBuffer={()=>{}}                // Callback when remote video is buffering
       onError={()=>{}}               // Callback when video cannot be loaded
       style={{
        flex:1,
        // position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height:200,
        // width:150
       }} 
    />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
