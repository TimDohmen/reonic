import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './IonicPayments.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Payments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ionic Payments</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="This will be used to display users paypal information" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
