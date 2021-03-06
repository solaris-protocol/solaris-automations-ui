import { EventEmitter as Emitter } from 'eventemitter3';

// Market

export class MarketUpdateEvent {
  static type = 'MarketUpdate';
  ids: Set<string>;
  constructor(ids: Set<string>) {
    this.ids = ids;
  }
}

// Price

export class PriceUpdateEvent {
  static type = 'PriceUpdate';
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

// Cache

export class CacheUpdateEvent {
  static type = 'CacheUpdate';
  id: string;
  parser: any;
  isNew: boolean;
  constructor(id: string, isNew: boolean, parser: any) {
    this.id = id;
    this.parser = parser;
    this.isNew = isNew;
  }
}

export class CacheDeleteEvent {
  static type = 'CacheUpdate';
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export class CacheClearEvent {
  static type = 'CacheDelete';
}

export class EventEmitter {
  private emitter = new Emitter();

  // Market

  onMarket(callback: (args: MarketUpdateEvent) => void) {
    this.emitter.on(MarketUpdateEvent.type, callback);

    return () => this.emitter.removeListener(MarketUpdateEvent.type, callback);
  }

  raiseMarketUpdated(ids: Set<string>): void {
    this.emitter.emit(MarketUpdateEvent.type, new MarketUpdateEvent(ids));
  }

  // Price

  onPrice(callback: (args: PriceUpdateEvent) => void) {
    this.emitter.on(PriceUpdateEvent.type, callback);

    return () => this.emitter.removeListener(PriceUpdateEvent.type, callback);
  }

  raisePriceUpdated(id: string): void {
    this.emitter.emit(PriceUpdateEvent.type, new PriceUpdateEvent(id));
  }

  // Cache

  onCache(callback: (args: CacheUpdateEvent) => void) {
    this.emitter.on(CacheUpdateEvent.type, callback);

    return () => this.emitter.removeListener(CacheUpdateEvent.type, callback);
  }

  raiseCacheUpdated(id: string, isNew: boolean, parser: any): void {
    this.emitter.emit(CacheUpdateEvent.type, new CacheUpdateEvent(id, isNew, parser));
  }

  raiseCacheDeleted(id: string): void {
    this.emitter.emit(CacheDeleteEvent.type, new CacheDeleteEvent(id));
  }

  raiseCacheCleared(): void {
    this.emitter.emit(CacheClearEvent.type, new CacheClearEvent());
  }
}
