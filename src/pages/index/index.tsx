import { useState, useEffect, useReducer, useMemo, useRef } from 'react';
import { View, Text, Button, Input } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import QUIcon from "@components/QUIcon";
import { useSelector, useDispatch } from 'react-redux';
import counter from '../../reducers/counter';
import "./index.scss";

const Index = () => {

  const buyState: any = useSelector(state => state.counter)
  console.log(buyState)
  const dispatch = useDispatch()

  const [count, setCount] = useState(0);
  const [state, dispatch2] = useReducer(counter, {num: 0});
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, []);
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };

  const [ count2, setCount2 ] = useState(0)
  const [val, setValue] = useState('')
  const expensive = useMemo(() => {
    let sum = 0
    for (let i = 0; i < count2 * 10; i++) {
      sum += i
    }
    return sum
  }, [ count2 ])

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <View className="text">You clicked {count} times</View>
      <QUIcon icon="icon-bangzhu" />
      <AtButton type="primary" onClick={() => setCount(count + 1)}>按钮</AtButton>
      <View>{state.num}</View>
      <button onClick={() => dispatch2({type: 'MINUS'})}>-</button>
      <button onClick={() => dispatch2({type: 'RESET', payload: 2})}>reset</button>
      <button onClick={() => dispatch2({type: 'ADD'})}>+</button>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <Text>You clicked {expensive}times</Text>
      <Button onClick={() => setCount2(count2 + 1)}>
        Click me
      </Button>
      <Input value={val} onChange={event => setValue(event.detail.value)} />
      <Text>{buyState.num}</Text>
      <Button className='add_btn' onClick={() => dispatch({type: 'ADD'})}>+</Button>
      <Button className='dec_btn' onClick={() => dispatch({type: 'RESET', payload: 2})}>-</Button>
      <Button className='dec_btn' onClick={() => dispatch({type: 'MINUS'})}>async</Button>
    </View>
  );
};

export default Index;
