import * as React from 'react';
import { View, StyleSheet, Button, useWindowDimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { constant } from '../utils/constants';

export default function Clip() {
  const video = React.useRef<any>(null);
  const [status, setStatus] = React.useState<any>({});
  const width = useWindowDimensions().width

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 10,
      overflow: 'hidden',
    },
    video: {
      alignSelf: 'center',
      width: width - constant.mainPadding * 2 ,
      // height: 200,
      aspectRatio: '16/9'
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

