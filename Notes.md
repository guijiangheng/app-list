## Redux combineReducers API:

combineReducers提供了一个方便的工具函数，能够将多个reducer合并成一个reducer。这个复合的reducer针对一个action得到下一个状态

```js
export combineReducers({
  visibilityFilter,
  todos
});

```

等价于：

```js
export default (state = {}, action) => {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
```

## 在React中使用Redux

可以将Redux应用中的组件分为Presentational和Container Component。Presentional组件感知不到Redux的存在，从props中读取数据，从props接收回调函数。Container Component则侦听store的变化，store改变时重新绘制，同时通过调用dispatch方法修改store。

## React Thunk中间件源代码：

```js
export default ({ dispatch, getState }) => next => action = {
  if (typeof action === 'function')
    return action(dispatch, getState);
  return next(action);
}
```

Redux中所有中间件都遵循如下签名：

```js
const plugin = store => next => action = {};
```

比如一个简易的logger中间件：

```js
const logger = store => next => action = {
  const ret = next(action);
  console.log('next state: ', store.getState());
  return ret;
}
```

applyMiddleware的原理大致如下:

```js
function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice();
  middlewares.reverse();
  let dispatch = store.dispatch;
  middlewares.foreEach(middleware => (dispatch = middleware(store)(dispatch)));
  return { ...store, dispatch };
}
```

代码的逻辑是，将一个符合的dispatch方法替换掉store原来的dispatch方法。

## 跨域访问

*简单请求*：
* Simple Method: GET/POST
* Simple Headers:
  * Accept
  * Accept-Language
  * Content-Language
  * Content-Type

### CORS for Simple request
如果请求是跨域请求，浏览器会自动在请求头中增加Origin字段，服务器会查看Origin字段，如果允许该请求，会在响应中增加Control-Allow-Origin字段。这时候浏览球会充当中间人，如果Control-Allo-Origin允许Originz则请求失败，否则请求成功。
