//importing react hooks
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Capacitor } from '@capacitor/core';

//create a function usePhotoGallery

export function usePhotoGallery() {
    const [photos, setPhotos] = useState < UserPhoto[]> ([]);
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        const fileName = new Date().getTime() + '.jpeg';
        const newPhotos = [
            {
                filepath: fileName,
                webviewPath: photo.webPath,
            },
            ...photos,
        ];

        setPhotos(newPhotos);
    }
    return {
        takePhoto,
        photos,
    };
}

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}
