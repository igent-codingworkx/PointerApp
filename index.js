import { Navigation } from 'react-native-navigation';
import Home from './screens/Home';
import Map from './screens/Map';
import Feedback from './screens/Feedback';
import MyEarnings from './screens/MyEarnings';
import Notification from './screens/Notification';
import InviteFriends from './screens/InviteFriends';
import Preferences from './screens/Preferences';
Navigation.registerComponent(`Preferences`,()=>Preferences)
Navigation.registerComponent(`InviteFriends`,()=>InviteFriends)
Navigation.registerComponent(`Notification`,()=>Notification)
Navigation.registerComponent(`MyEarnings`,()=>MyEarnings)
Navigation.registerComponent(`Home`, () => Home)
Navigation.registerComponent(`Map`,() =>Map)
Navigation.registerComponent(`Feedback`,()=>Feedback)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root:{
      stack: {
        id: 'stackMain',
        children: [
          {
            component: {
              name: "Home"
            },
            
          },
        
        ]
      }
    }
		
      
	});
});
        

