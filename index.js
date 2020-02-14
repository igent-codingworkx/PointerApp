import { Navigation } from 'react-native-navigation';
import Home from './screens/Home';
import Map from './screens/Map';
import Feedback from './screens/Feedback';
import MyEarnings from './screens/MyEarnings';
import Notification from './screens/Notification';
import InviteFriends from './screens/InviteFriends';
import Preferences from './screens/Preferences';
import MapView from './Components/MapOperations/MapView';
import MapEdit from './Components/MapOperations/MapEdit';
import MapDelete from './Components/MapOperations/MapDelete';
import Help from './screens/Help';
import TermServices from './screens/TermServices';
import ReviewsGiven from './Components/Reviews/ReviewsGiven';
import ReviewScreen from './Components/Reviews/ReviewScreen';
import ReviewsReceived from './Components/Reviews/ReviewsReceived';

Navigation.registerComponent(`ReviewsReceived`, () => ReviewsReceived)
Navigation.registerComponent(`ReviewScreen`, () => ReviewScreen)
Navigation.registerComponent(`ReviewsGiven`, () =>ReviewsGiven)
Navigation.registerComponent(`TermServices` , ()=>TermServices)
Navigation.registerComponent(`Help`,()=>Help)
Navigation.registerComponent(`MapDelete`,()=>MapDelete)
Navigation.registerComponent(`MapEdit`,()=>MapEdit)
Navigation.registerComponent(`MapView`,()=>MapView)
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
        

