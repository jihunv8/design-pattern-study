abstract class MapView {
  protected abstract connectMapServer(): void;
  protected abstract showMapOnScreen(): void;
  protected abstract moveTocurrentLocation(): void;

  initMap() {
    this.connectMapServer();
    this.showMapOnScreen();
    this.moveTocurrentLocation();
  }
}

export class NaverMapView extends MapView {
  protected connectMapServer(): void {
    console.log('네이버 지도 서버에 연결');
  }

  protected showMapOnScreen(): void {
    console.log('네이버 지도를 보여줌');
  }

  protected moveTocurrentLocation(): void {
    console.log('네이버 지도에서 현 좌표로 이동');
  }
}

export class KakaoMapView extends MapView {
  protected connectMapServer(): void {
    console.log('카카오 지도 서버에 연결');
  }

  protected showMapOnScreen(): void {
    console.log('카카오 지도를 보여줌');
  }

  protected moveTocurrentLocation(): void {
    console.log('카카오 지도에서 현 좌표로 이동');
  }
}
