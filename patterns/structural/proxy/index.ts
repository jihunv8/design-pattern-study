import { ProxyThumbnail } from './Thumbnail';
import type { Thumbnail } from './Thumbnail';

const thumbnails: Thumbnail[] = [];

thumbnails.push(new ProxyThumbnail('어벤져스', 'avengers.mp4'));
thumbnails.push(new ProxyThumbnail('내부자들', 'nabuza.mp4'));
thumbnails.push(new ProxyThumbnail('업', 'up.mp4'));
thumbnails.push(new ProxyThumbnail('반지의제왕', 'lordoftherings.mp4'));
thumbnails.push(new ProxyThumbnail('라이언일병구하기', 'savelion.mp4'));

thumbnails.forEach((thumbnail) => thumbnail.showTitle());

thumbnails.forEach((thumbnail) => thumbnail.showPreview());
