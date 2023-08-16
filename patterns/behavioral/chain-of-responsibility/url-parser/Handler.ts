abstract class Handler {
  protected nextHandler: Handler | null = null;

  protected abstract process(url: string): void;

  setHandler(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  run(url: string): void {
    this.process(url);

    if (this.nextHandler) {
      this.nextHandler.run(url);
    }
  }
}

export default Handler;

export class ProtocolHandler extends Handler {
  protected process(url: string): void {
    const endIndex = url.indexOf('://');

    if (endIndex !== -1) console.log('Protocol: ', url.slice(0, endIndex));
    else console.log('No Protocol');
  }
}

export class DomainHandler extends Handler {
  protected process(url: string): void {
    const startIndex = url.indexOf('://');
    const endIndex = url.lastIndexOf(':');
    const domain = startIndex !== -1 ? url.slice(startIndex + 3, endIndex) : url.slice(0, endIndex);

    console.log('Domain: ', domain);
  }
}

export class PortHandler extends Handler {
  protected process(url: string): void {
    const startIndex = url.lastIndexOf(':');

    if (startIndex !== -1) console.log('Port: ', url.slice(startIndex + 1));
    else console.log('No Port');
  }
}
