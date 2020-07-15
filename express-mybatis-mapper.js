const mybatisMapper = require("mybatis-mapper-myyrakle");

function createMapper(filenames) {
    mybatisMapper.createMapper(filenames);

    return (req, res, next) => {
        req.mybatisMapper = mybatisMapper;
        next();
    };
}

module.exports = createMapper;
