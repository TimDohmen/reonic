import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, cash, camera } from 'ionicons/icons';
import IonicPayments from './pages/IonicPayments';
import Photos from './pages/Photos';
import IonicGram from './pages/IonicGram';
import Details from './pages/Details';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/payments" component={IonicPayments} exact={true} />
          <Route path="/photos" component={Photos} exact={true} />
          <Route path="/photos/details" component={Details} />
          <Route path="/IonicGram" component={IonicGram} />
          <Route path="/" render={() => <Redirect to="/payments" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="payments" href="/payments">
            <IonIcon icon={cash} />
            <IonLabel>IonicPayments</IonLabel>
          </IonTabButton>
          <IonTabButton tab="photos" href="/photos">
            <IonIcon icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="IonicGram" href="/IonicGram">
            <IonIcon icon={camera} />
            <IonLabel>IonicGram</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
