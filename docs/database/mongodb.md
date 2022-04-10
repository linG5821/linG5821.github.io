
## 错误汇总

1. mongo shell 查询语句报错

    ```shell
    2020-04-16T00:12:06.450+0800 E QUERY    [js] Error: listDatabases failed:{
      "operationTime" : Timestamp(1586967122, 1),
      "ok" : 0,
      "errmsg" : "not master and slaveOk=false",
      "code" : 13435,
      "codeName" : "NotMasterNoSlaveOk",
      "$gleStats" : {
        "lastOpTime" : Timestamp(0, 0),
        "electionId" : ObjectId("000000000000000000000000")
      },
      "lastCommittedOpTime" : Timestamp(1586967122, 1),
      "$configServerState" : {
        "opTime" : {
          "ts" : Timestamp(1586967122, 2),
          "t" : NumberLong(1)
        }
      },
      "$clusterTime" : {
        "clusterTime" : Timestamp(1586967122, 2),
        "signature" : {
          "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
          "keyId" : NumberLong(0)
        }
      }
    } :
    _getErrorWithCode@src/mongo/shell/utils.js:25:13
    Mongo.prototype.getDBs@src/mongo/shell/mongo.js:139:1
    shellHelper.show@src/mongo/shell/utils.js:882:13
    shellHelper@src/mongo/shell/utils.js:766:15
    @(shellhelp2):1:1

    解决方式: rs.slaveOk()
    ```
