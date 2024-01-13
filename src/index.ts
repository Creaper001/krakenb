import type { ZodType, input } from "zod";
import { writeFile } from "fs/promises";

export const krakenb =
  <A extends ZodType>(schema: A) =>
    (data: input<A>) =>
      (file: PathOrFileDescriptor = "krakend.json") =>
        writeFile(file, JSON.stringify(schema.parse(data)));

export default krakenb;
