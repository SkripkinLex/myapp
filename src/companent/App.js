import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeesList } from "../asyncActions/employees";
import { decrAction, incrAction, resetAction } from "../store/countReducer";
import { addEmplAction, remLastEmplAction, remEmplByIdAction } from "../store/emplReducer";
import { addNewGoodAction, decrCountAction, incrCountAction } from "../store/goodReducer";


function App() {
  const count = useSelector(store => store.count.count)
  const empl = useSelector(store => store.empl.empl)
  const goods = useSelector(store => store.goods.goods)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmployeesList()) 
  },[])

  return (
    <div>
      <h2>Счетчик</h2>
      {count}
      <div>
        <button onClick={() => dispatch(incrAction(+prompt()))}>Инкремент</button>
        <button onClick={() => dispatch(decrAction(+prompt()))}>Декремент</button>
        <button onClick={() => dispatch(resetAction())}>Reset</button>
      </div>
      <div>
        <h2>Сотрудники</h2>
        {empl.map(elem => 
          <div onDoubleClick={() => dispatch(remEmplByIdAction(elem.id))}>
            {elem.name}
          </div>
        )}
        <div>
          <button onClick={() => dispatch(addEmplAction(prompt()))}>Добавить сотрудника</button>
          <button onClick={() => dispatch(remLastEmplAction())}>Удалить последнего сотрудника</button>
        </div>
        <div>
          <button onClick={() => dispatch(fetchEmployeesList())}>Добавить список сотрудников(ASYNC)</button>
        </div>
      </div>
      <div>
        <h2>Корзина</h2>
        {goods.map(elem => 
          <div style={{display: 'flex', alignItems: 'center', width: '150px', justifyContent: 'space-around'}}>
            <p>{elem.name}</p>
            <button onClick={() => dispatch(decrCountAction(elem.id))}>-</button>
            <p>{elem.count}</p>
            <button onClick={() => dispatch(incrCountAction(elem.id))}>+</button>
          </div>
        )}
        {/* Подсчет итогового количества товаров */}
        <h2>{goods.reduce((sum, value) => sum + value.count, 0)}</h2>
        <div>
          <button onClick={() => dispatch(addNewGoodAction(prompt()))}>Добавить товар в корзину</button>
        </div>
      </div>
    </div>
  )
}

export default App;
