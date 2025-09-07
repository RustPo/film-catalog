import { map } from 'rxjs/operators';
import { ZodSchema } from 'zod';

export function validateWith<T>(schema: ZodSchema<T>) {
  return map((value: unknown) => {
    const res = schema.safeParse(value);
    if (!res.success) {
      throw new Error(`Invalid response: ${res.error.message}`);
    }
    return res.data;
  });
}
