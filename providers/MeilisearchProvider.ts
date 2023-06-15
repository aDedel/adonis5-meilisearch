import { ApplicationContract } from "@ioc:Adonis/Core/Application";
import { MeiliSearch } from "meilisearch";

const defaultHost = "http://127.0.0.1:7700";

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
*/
export default class MeiliSearchProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    const client = this.createConnection();

    // Register meilisearch client
    this.app.container.singleton("Adonis/Addons/MeiliSearch", () => client);
  }

  public async boot() {
    // App boot
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // App is shutting down
  }

  /**
   * Create meilisearch connection
   */
  private createConnection(): MeiliSearch {
    // Register bindings
    const Env = this.app.container.resolveBinding("Adonis/Core/Env");
    const host = Env.get("MEILISEARCH_HOST") || defaultHost;
    const apiKey = Env.get("MEILISEARCH_API_KEY");
    const options = Env.get("MEILISEARCH_OPTIONS");
    const config = options ? JSON.parse(options) : {};

    return new MeiliSearch({ ...config, host, apiKey });
  }
}
