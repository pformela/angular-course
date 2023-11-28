import { IServer } from './server.model';

export class ServersService {
  private servers: IServer[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
    },
  ];

  public getServers(): IServer[] {
    return this.servers;
  }

  public getServer(id: number): IServer {
    const server: IServer | undefined = this.servers.find((s: IServer) => {
      return s.id === id;
    });

    return server ? server : { id: 0, name: '', status: '' };
  }

  public updateServer(
    id: number,
    serverInfo: { name: string; status: string }
  ): void {
    const server: IServer | undefined = this.servers.find((s: IServer) => {
      return s.id === id;
    });
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
