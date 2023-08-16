import { DomainHandler, PortHandler, ProtocolHandler } from './Handler';

const handler = new ProtocolHandler();
handler.setHandler(new DomainHandler()).setHandler(new PortHandler());

const handlerWithoutDomainHandler = new ProtocolHandler();
handlerWithoutDomainHandler.setHandler(new PortHandler());

const handlers = [handler, handlerWithoutDomainHandler];
const urls = ['https://depv.com:443', 'https://jhjh.com:443', 'http://depv.com:80', 'naver.com', 'google.com: 8080'];

handlers.forEach((handler, i) => {
  console.log(`--------------------handler${i + 1}--------------------`);
  for (const url of urls) {
    handler.run(url);
    console.log();
  }
});
