# eggjs-elasticsearch

eggjs elasticsearch plugin use elasticsearch@8

##  install

```
npm install eggjs-elasticsearch
```

## eggjs plugin config

`plugin.js`


```js
{
  elasticsearch: {
    enable: true,
    package: "eggjs-elasticsearch"
  }
}
```

## plugin config

`config.default.ts` single client


```js
{
 elasticsearch: {
  client: {
    node: "http://localhost:9200"
  }
 }
}

```

`config.default.ts` multi clients

```js
{
 elasticsearch: {
  clients: {
    foo: {
      node: "http://localhost:9200"
    },
    bar: {
      node: "http://localhost:9201"
    }
  }
 }
}

```

more options see  [@elastic/elasticsearch](https://npmjs.org/@elastic/elasticsearch)

## learn how to use elasticsearch client

https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html