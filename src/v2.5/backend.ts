import { z } from "zod";

export const backend = z.object({
  url_pattern: z.string(),
  encoding: z.enum(["json", "safejson", "fast-json", "xml", "rss", "string", "no-op"]).default("json"),
  input_headers: z.array(z.string()).default([]),
  input_query_strings: z.array(z.string()).default([]),
  sd: z.enum(["static", "dns"]).default("static"),
  sd_scheme: z.string().default("http"),
  method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]).default("GET"),
  extra_config: z.object({}),
});

export default backend;
