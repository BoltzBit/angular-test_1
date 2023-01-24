import { Photo } from "../components/photo-board/interfaces/photo";

//mock de dados para poder testar
export function buildPhotoList(): Photo[]{
    const photos: Photo[] = [];

    for(let i = 0; i < 8; i++){
        photos.push({
            id: i+1,
            description: '',
            url: ''
        });
    }

    return photos;
}