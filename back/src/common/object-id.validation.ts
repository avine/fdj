import { registerDecorator } from 'class-validator';
import { Types } from 'mongoose';

export function IsValidObjectId() {
  return function(object: unknown, propertyName: string) {
    registerDecorator({
      name: 'isValidObjectId',
      target: object.constructor,
      propertyName: propertyName,
      validator: {
        validate(value: string) {
          return Types.ObjectId.isValid(value);
        },
      },
    });
  };
}
