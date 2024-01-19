//import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp, CounterWithCustomHook } from './01-useState';
// import { SimpleForm, FormWithCustomHook } from './02-useEffect';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize, MemoHook, CallbackHook } from './06-memos/';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
//import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  // <>
  //   <HooksApp/>
  //   <CounterApp/>
  //   <CounterWithCustomHook/>
  //   <SimpleForm/>
  //   <FormWithCustomHook/>
  //   <MultipleCustomHooks/>
  //   <FocusScreen/>
  //   <Layout/>
  //   <Memorize/>
  //   <MemoHook/>
  //   <CallbackHook/>
  //   <Padre/>
  //   <TodoApp/>
  // </>
  // </React.StrictMode>,
  
  <BrowserRouter>
     <MainApp/>  
  </BrowserRouter>
)
