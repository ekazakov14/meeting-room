import firebase from 'firebase';
import HandleError from '../decorators/HandleError';

type id = string | number;

function BasicModelFactory <P, R>(routeName: string, modifyResult: (props: P) => R | Promise<R>) {
  type ProcessedEntityFromDB = P & {id: id};
  type DBObjectList = {[key: string]: P};

  class BasicModel {
    constructor(protected props: P) {}

    public static readonly routeName = routeName;

    public static readonly modifyResult = modifyResult;

    private self = Object.getPrototypeOf(this).constructor;
    
    @HandleError
    public static async get(id: id): Promise<R | null> {
      const response = await firebase.database().ref(`${this.routeName}/${id}`).once('value');
      const value = await response.val() as P | null;

      if (value) {
        const valueWithId = {
          ...value,
          id,
        };
        return this.modifyResult(valueWithId);
      } else {
        return null;
      }
    }

    @HandleError
    public static async getAll(): Promise<(R | Promise<R>)[]> {
      const response = await firebase.database().ref(this.routeName).once('value');
      const value = await response.val() as DBObjectList | null;

      if (value) {
        const resultArray = this.objectListToArray(value);
        const modified = resultArray.map((item) => this.modifyResult(item));
        return Promise.all(modified);
      } else {
        return [];
      }
    }

    public save(id: id): Promise<id> | Promise<id | null> {
      return id !== undefined ? this.set(id) : this.add();
    }

    protected static objectListToArray(obj: DBObjectList): ProcessedEntityFromDB[] {
      return Object.keys(obj).reduce((result: ProcessedEntityFromDB[], id: string) => {
        const entity: P = obj[id];
        
        return [
          ...result,
          {
            ...entity,
            id,
          },
        ];
      }, []);
    };
  
    @HandleError
    protected async set(id: id): Promise<id> {
      await firebase.database().ref(`${this.self.routeName}/${id}`).set(this.props);
      return id;
    }

    @HandleError
    protected async add(): Promise<string | null> {
      const response = await firebase.database().ref(`${this.self.routeName}`).push(this.props);
      return response.key;
    }
  }

  return BasicModel;
};

export default BasicModelFactory;