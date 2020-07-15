# express-mybatis-mapper

![](https://img.shields.io/badge/language-Javascript-red) ![](https://img.shields.io/badge/version-1.0.1-brightgreen) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/myyrakle/express-mybatis-mapper/blob/master/LICENSE)

mybatis-mapper express middleware

##

It can be installed as follows:

```
npm install --save express-mybatis-mapper
```

##

Middleware registration is as follows.  
Pass the path of mybatis files to be registered as an array.

```
const express = require("express");
const app = express();
......
const mybatis = require("express-mybatis-mapper");
app.use(mybatis(["./example.xml", "./example2.xml"]));
......
```

##

After that, you will have a mybatisMapper field in your request object.  
If you pass mybatis namespace, id, and context object in order to the getStatement method, the query text is generated and returned.

```
...
router.get("/", (req, res, next)=>{
    ...
    //generate query text
    const query = req.mybatisMapper.getStatement("example", "SELECT.001", {foo:"bar"});
    ...
});
...
```
