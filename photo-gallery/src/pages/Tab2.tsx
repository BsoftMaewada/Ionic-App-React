import {
  IonContent,
  IonFabButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  // added
  IonGrid,
  IonRow,
  IonFab,
  IonCol,
  IonImg,
  IonActionSheet,
} from "@ionic/react";
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
//importing floating action buttons
import { camera, trash, close } from 'ionicons/icons';

//import hooks from usePhotoGallery
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  // get access to the takePhoto method
  const { takePhoto, photos } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Grid component so each photos are added nicely to the gallery */}
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => {
              <IonCol size='6' key={index}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            })}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
