export interface DataBaseInterface {
  connect(url: string): string;
  save(data: unknown): string;
}

type Item = {
  itemName: string;
};

export class DataBase implements DataBaseInterface {
  private url = "";

  connect(url: string): string {
    this.url = url;
    return `connection successfully at ${url}`;
  }

  save(item: Item): string {
    return `saved: ${Object.entries(item)}`;
  }
}
