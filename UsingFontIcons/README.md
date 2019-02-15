# Using font icons
When dealing with images, we need to think about supporting different screen densities
and resolutions. For that, we will have to create different versions of the same image and
will need to change the size and the name so that React Native uses the correct image for
the given resolution. While this works fine, we will have to spend time maintaining all the
images. In addition, the size of our app will increase because we need to bundle all those
images.
We already have solved that problem on the Web by using fonts or SVGs, and it's a pretty
good solution. In this recipe, we will use fonts to render icons and solve the problem of
screen density.
For this recipe, we will use a third-party library to help us render the icons. The name of
this library is react-native-vector-icons by Joel Arvidsson. We will also learn how to
install other libraries using npm .
# Getting ready
We need to create an empty app using the React Native CLI, we are going to name it
FontIcons .
#How to do it...
Font icons can be used using the following steps:
1. The first step is to install the third-party library using npm ; this is a very simple
step: just open your terminal and at the root of the project run the following
command:
``` 
$ npm install react-native-vector-icons --save
```
By running this command, the code will be downloaded from the npm
repositories. A few popular fonts will be downloaded as well, for
example, Font Awesome, Evil Icons, Material Icons, and a few others.
2. Once the previous command is complete, we need to install the library for iOS
(Xcode) and Android. The easiest way to do this is by using the React Native CLI.
Just run the following command:
```
$ react-native link
```
This command will install the fonts for iOS and Android; this means
there's no need to copy and paste the font files to the android folder or
use Xcode to import the files. Remember previous recipes for using
custom fonts? Everything is automatic now!
3. Let's open the index.ios.js and index.android.js files and add the
following code to bootstrap our app:
```
import React from 'react';
import MainApp from './src/MainApp';
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('FontIcons', () => MainApp);
```
4. Now let's create an src folder and a MainApp.js file inside it. We are going to
render several icons in this component. First, we need to import the dependencies
for this class:
``` 
import React, { Component } from 'react';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {
StyleSheet,
View,
}
from 'react-native';
```

We need to import each set of icons. In this case, we are importing Evil
and FontAwesome icons. We will be able to use any of the icons
available in each set, and we can import all the sets that we need. At the
time of writing, we can use the following sets out of the box:
- Entypo by Daniel Bruce (411 icons)
- EvilIcons by Alexander Madyankin and Roman Shamin (v1.8.0, 70
icons)
- FontAwesome by Dave Gandy (v4.7.0, 675 icons)
- Foundation by ZURB, Inc. (v3.0, 283 icons)
- Ionicons by Ben Sperry (v3.0.0, 859 icons)
- MaterialIcons by Google, Inc. (v3.0.1, 932 icons)
- Octicons by Github, Inc. (v4.4.0, 172 icons)
- Zocial by Sam Collins (v1.0, 100 icons)
- SimpleLineIcons by Sabbir and Contributors (v2.4.1, 189 icons)
5. Once we have imported the dependencies and the sets of icons, we can create the
component that will only render a few icons for each set:
```
const MainApp = () => (
<View style={styles.content}>
<View style={styles.row}>
<EvilIcon style={styles.icon} name="user" size={50}
color="#e67e22" />
<EvilIcon style={styles.icon} name="search" size={50}
color="#e67e22" />
<EvilIcon style={styles.icon} name="trophy" size={50}
color="#e67e22" />
<EvilIcon style={styles.icon} name="location" size={50}
color="#e67e22" />
<EvilIcon style={styles.icon} name="gear" size={50}
color="#e67e22" />
</View>
<View style={styles.row}>
<FAIcon style={styles.icon} name="briefcase" size={40}
color="#c0392b" />
<FAIcon style={styles.icon} name="calendar" size={40}
color="#c0392b" />
<FAIcon style={styles.icon} name="camera-retro" size={40}
color="#c0392b" />
<FAIcon style={styles.icon} name="globe" size={40}
color="#c0392b" />
<FAIcon style={styles.icon} name="print" size={40}
color="#c0392b" />
</View>
</View>
);
const styles = StyleSheet.create({
// Defined on step 6
});
export default MainApp;
```
This is a very simple component; we are only rendering five icons for
each set. I recommend opening the documentation for each set (you can
just Google the name of the set) and seeing the available icons. Then, all
that is required is to define the name property with the icon's name that
we want to render, we can also define size and styles .
6. If we try to run the project as it is, we should be able to see the icons; however,
let's add some styles to the containers to arrange the icons horizontally:
```
const styles = StyleSheet.create({
content: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
row: {
flexDirection: 'row',
},
icon: {
margin: 10,
},
});
```
All we need to do is use flexbox to center the content and then set the
direction to row to horizontally render each row. Additionally, we are
adding 10 pixels of margin:
