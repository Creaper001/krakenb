import { z } from "zod";

export const async_agent = z.object({
  name: z.string(),
  encoding: z.enum(["json", "safejson", "xml", "rss", "string", "no-op"]).default("json"),
  connection: z.object({
    max_retries: z.number().default(0),
    health_interval: z.string().default("1s"),
    backoff_strategy: z.enum(["linear", "linear-jitter", "exponential", "exponential-jitter", "fallback"]).default("fallback"),
  }),
  consumer: z.object({
    timeout: z.string().nullish(),
    topic: z.string(),
    workers: z.number().default(1),
    max_rate: z.number().default(0),
  }),
});

export const plugin = z.object({
  pattern: z.string(),
  folder: z.string(),
});

export const krakend = z.object({
  version: z.number().default(3),
  host: z.array(z.string()),
  debug_endpoint: z.boolean().default(false),
  echo_endpoint: z.boolean().default(false),
  sequential_start: z.boolean().default(false),
  async_agent: async_agent.nullish(),
  name: z.string(),
  port: z.number().min(0).max(65535).default(8080),
  listen_ip: z.string().default("0.0.0.0"),
  timeout: z.string().default("2s"),
  cache_ttl: z.string().default("0s"),
  output_encoding: z.enum(["json", "fast-json", "json-collection", "xml", "negotiate", "string", "no-op"]).default("json"),
  read_timeout: z.string().default("0s"),
  read_header_timeout: z.string().default("0s"),
  write_timeout: z.string().default("0s"),
  idle_timeout: z.string().default("0s"),
  dialer_timeout: z.string().default("0s"),
  dialer_keep_alive: z.string().default("15s"),
  dialer_fallback_delay: z.string().default("300ms"),
  disable_compression: z.boolean().default(false),
  disable_keep_alives: z.boolean().default(false),
  max_idle_connections: z.number().default(0),
  max_idle_connections_per_host: z.number().default(250),
  idle_connection_timeout: z.string().default("0s"),
  response_header_timeout: z.string().default("0s"),
  expect_continue_timeout: z.string().default("0s"),
  disable_rest: z.boolean().default(false),
  client_tls: z.any().nullish(),
  tls: z.any().nullish(),
  plugin: plugin.nullish(),
  endpoints: z.array(z.object({})),
  extra_config: z.object({}).nullish(),
  use_h2c: z.boolean().default(false),
});

export default krakend;
