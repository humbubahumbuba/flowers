import * as Yup from 'yup';
import parsePhoneNumber from 'libphonenumber-js';

declare module 'yup' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  interface StringSchema extends Yup.StringSchema {
    phone(): StringSchema;
  }
}

Yup.addMethod(Yup.string, 'phone', function (errorMessage) {
  return this.test('phone', errorMessage, function (value) {
    const { path, createError } = this;

    if (typeof value !== 'string') {
      return createError({ path, message: 'Not a valid type' });
    }

    const parsedPhoneNumber = parsePhoneNumber(String(value));

    if (!parsedPhoneNumber) {
      return createError({ path, message: errorMessage });
    }

    return (
      parsedPhoneNumber.isValid() ||
      createError({ path, message: errorMessage })
    );
  });
});
