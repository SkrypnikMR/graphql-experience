import { NotFoundException } from '@nestjs/common';

export function NotFoundDecorator(message: string) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    console.log(target);

    descriptor.value = async function (...args: any[]) {
      const result = await originalMethod.apply(this, args);
      if (!result) {
        throw new NotFoundException(message);
      }
      return result;
    };
  };
}
