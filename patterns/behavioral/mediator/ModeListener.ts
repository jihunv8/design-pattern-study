import ModeSwitch from './ModeSwitch';

export interface ModeListener {
  onModeChange(mode: ModeSwitch.Mode): void;
}

export class ListView implements ModeListener {
  onModeChange(mode: ModeSwitch.Mode): void {
    console.log(mode === ModeSwitch.Mode.LIST ? '리스트 보여줌' : '리스트 숨김');
  }
}

export class GalleryView implements ModeListener {
  onModeChange(mode: ModeSwitch.Mode): void {
    console.log(mode === ModeSwitch.Mode.GALLERY ? '갤러리 보여줌' : '갤러리 숨김');
  }
}

export class DataDownloader implements ModeListener {
  onModeChange(mode: ModeSwitch.Mode): void {
    console.log((mode === ModeSwitch.Mode.LIST ? '리스트' : '갤러리') + ' 데이터 다운로드');
  }
}
