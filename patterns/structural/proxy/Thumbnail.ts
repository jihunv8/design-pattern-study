export interface Thumbnail {
  showTitle(): void;
  showPreview(): void;
}

export class RealThumbnail implements Thumbnail {
  private title: string;
  private movie: string;

  constructor(title: string, movieUrl: string) {
    this.title = title;
    console.log(`${movieUrl}의 동영상 불러오는중...`);
    this.movie = `${movieUrl}의 동영상`;
  }

  showTitle(): void {
    console.log(`제목: ${this.title}`);
  }

  showPreview(): void {
    console.log(this.movie);
  }
}

export class ProxyThumbnail implements Thumbnail {
  private title: string;
  private movieUrl: string;
  private realThumbnail: RealThumbnail | null = null;

  constructor(title: string, movieUrl: string) {
    this.title = title;
    this.movieUrl = movieUrl;
  }

  showTitle(): void {
    console.log(`제목: ${this.title}`);
  }

  showPreview(): void {
    if (!this.realThumbnail) this.realThumbnail = new RealThumbnail(this.title, this.movieUrl);
    this.realThumbnail.showPreview();
  }
}
