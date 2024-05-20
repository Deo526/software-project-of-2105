# 后端API列表
# 

### 1. 登录
* 地址：<http://8.130.122.31:8000/user/login/>
* 类型：POST
* 输入参数：
    * username：用户名
    * password：密码
* 返回结果：
    * message：是否登录成功
    * status：200(success) / 400(fail)
  
### 2. 注册
* 地址：<http://8.130.122.31:8000/user/register/>
* 类型：POST
* 输入参数：
    * username：用户名
    * email：邮箱
    * password：密码
    * confirm：确认密码
* 返回结果：
    * 用户信息（用户名和邮箱）
    * status：201(success) / 400(fail)
  
### 3. 获取随机文物
* 地址：<http://8.130.122.31:8000/artifact/getRandom/>
* 类型：POST
* 输入参数：
    * number：返回的文物数量
* 返回结果：
    * 随机文物列表
    * status：200(success) / 400(fail)
  
### 4. 模糊搜索文物
* 地址：<http://8.130.122.31:8000/artifact/search/>
* 类型：POST
* 输入参数：
    * prompt：描述
    * number：数量
* 返回结果：
    * 文物列表
    * status：200(success) / 400(fail)

### 5. 根据文物的材质和年代进行推荐
* 地址：<http://8.130.122.31:8000/artifact/recommend/>
* 类型：POST
* 输入参数：
    * id：当前文物的id
    * number：需要的数量
* 返回结果：
    * 文物列表
    * status：200(success) / 400(fail)

### 5. 获取文物详情信息
* 地址：<http://8.130.122.31:8000/artifact/getDetail/>
* 类型：POST
* 输入参数：
    * id：当前文物的id
* 返回结果：
    * 查询的文物
    * status：200(success) / 400(fail)