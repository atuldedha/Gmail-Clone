import React,{useEffect}  from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Mail from './Mail'
import EmailList from './EmailList';
import SendMail from './SendMail';
import {selectSendMessageIsOpen} from './features/mailSlice'
import {useSelector} from 'react-redux'
import { login, selectUser } from './features/userSlice';
import Login from './Login'
import {useDispatch} from 'react-redux';
import { auth } from './firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    
    auth.onAuthStateChanged((user) => {
      if(user){

        dispatch(login({
          displayName : user.displayName,
          email: user.email,
          photoUrl: user.photoUrl
        }))

      }
    })

  }, [])

  return (
    <div className="app">

      <Router >

        {!user ? (

          <Login />

        ) : (

          <>

            <Header /> 

            <div className="app__body">

              <Sidebar />

              <Switch>

                <Route path = "/mail" >
              
                  <Mail />
              
                </Route>

                <Route path = "/" >

                  <EmailList />
              
                </Route>
              </Switch>
            </div>

            {sendMessageIsOpen && <SendMail />}

          </>

        )}

      </Router>
      
    </div>
  );
}

export default App;
