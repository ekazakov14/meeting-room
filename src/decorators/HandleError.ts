import Logger from './../models/Logger';

function HandleError(target: any, propertyName: string, descriptor: PropertyDescriptor){ 
  const originalMethod = descriptor.value;

  descriptor.value = async function (...props: any[]) {
    try {
      const result = await originalMethod.apply(this, props);
      return result;
    } catch (e) {
      Logger.write({
        name: `Class "${target.constructor.name}" method "${propertyName}" error`,
        message: e?.message,
        stack: e?.stack,
        type: 'error',
      });
    }
  };
}

export default HandleError;