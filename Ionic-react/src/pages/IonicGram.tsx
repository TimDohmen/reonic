import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './IonicGram.css';

const IonicGram: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonicGram</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">IonicGram</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="This will be to display users instagram postings" />
      </IonContent>
    </IonPage>
  );
};

export default IonicGram;
