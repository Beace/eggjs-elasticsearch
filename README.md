# eggjs-elasticsearch

<a href="https://codecov.io/gh/BeAce/eggjs-elasticsearch"><img src="https://img.shields.io/codecov/c/github/Beace/eggjs-elasticsearch?token=zWoIP2u0XD&logoColor=18181B&color=28CF8D"/></a>
<a href="https://www.npmjs.com/package/eggjs-elasticsearch"><img src="https://img.shields.io/npm/v/eggjs-elasticsearch.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="Version"></a>
<a href="https://www.npmjs.com/package/eggjs-elasticsearch"><img src="https://img.shields.io/npm/dm/eggjs-elasticsearch.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="Downloads"></a>


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