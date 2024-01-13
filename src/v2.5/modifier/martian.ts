import { z } from "zod";

export const body = z.object({
  Modifier: z.object({
    scope: z.array(z.string()),
    body: z.string(),
  }),
});

export const cookie = z.object({
  Modifier: z.object({
    scope: z.array(z.string()),
    name: z.string(),
    value: z.string(),
    path: z.string(),
    domain: z.string(),
    expires: z.string(),
    secure: z.boolean().default(false),
    httpOnly: z.boolean().default(false),
    maxAge: z.number().default(0),
  }),
  Filter: z.object({
    scope: z.array(z.string()),
    modifier: z.object({}),
    name: z.string(),
    value: z.unknown(),
    else: z.object({}),
  }),
});

export const url = z.object({
  Modifier: z.object({
    scope: z.array(z.string()),
    scheme: z.string(),
    host: z.string(),
    path: z.string(),
    query: z.string(),
  }),
  Filter: z.object({
    scope: z.array(z.string()),
    modifier: z.object({}),
    scheme: z.string(),
    host: z.string(),
    path: z.string(),
    query: z.string(),
    else: z.object({}),
  }),
  RegexFilter: z.object({
    scope: z.array(z.string()),
    modifier: z.object({}),
    regex: z.string(),
    else: z.object({}),
  }),
});

export const querystring = z.object({
  Modifier: z.object({
    scope: z.array(z.string()),
    name: z.string(),
    value: z.string(),
  }),
  Filter: z.object({
    scope: z.array(z.string()),
    modifier: z.object({}),
    name: z.string(),
    value: z.string(),
    else: z.object({}),
  }),
});

export const header = z.object({
  Copy: z.object({
    scope: z.array(z.string()),
    from: z.string(),
    to: z.string(),
  }),
  Modifier: z.object({
    scope: z.array(z.string()),
    name: z.string(),
    value: z.string(),
  }),
  Id: z.object({
    scope: z.array(z.string()),
  }),
  Append: z.object({
    scope: z.array(z.string()),
    name: z.string(),
    value: z.string(),
  }),
  Blacklist: z.object({
    scope: z.array(z.string()),
    names: z.array(z.string()),
  }),
  Filter: z.object({
    scope: z.array(z.string()),
    modifier: z.object({}),
    name: z.string(),
    value: z.string(),
    else: z.object({}),
  }),
  RegexFilter: z.object({
    scope: z.array(z.string()),
    modifier: z.object({}),
    header: z.string(),
    regex: z.string(),
  }),
});

export const stash = z.object({
  Modifier: z.object({
    scope: z.array(z.string()),
    headerName: z.string(),
  }),
});

export const port = z.object({
  Modifier: z.object({
    scope: z.array(z.string()),
    port: z.number(),
    defaultForScheme: z.boolean(),
    remove: z.boolean(),
  }),
  Filter: z.object({
    scope: z.array(z.string()),
    modifier: z.object({}),
    port: z.number(),
    else: z.object({}),
  }),
});

export const fifo = z.object({
  Group: z.object({
    scope: z.array(z.string()),
    modifiers: z.array(z.object({})),
    aggregateErrors: z.boolean(),
  }),
});

export const priority = z.object({
  Group: z.object({
    scope: z.array(z.string()),
    modifiers: z.array(
      z.object({
        priority: z.number(),
        modifier: z.object({}),
      })
    ),
  }),
});

export const martian = z.object({
  body: body.nullish(),
  cookie: cookie.nullish(),
  url: url.nullish(),
  querystring: querystring.nullish(),
  header: header.nullish(),
  stash: stash.nullish(),
  port: port.nullish(),
  fifo: fifo.nullish(),
  priority: priority.nullish(),
});

export default martian;
