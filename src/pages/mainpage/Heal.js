import React,{useEffect, useState} from 'react'
import Header from '../../components/header/Header'
// import MainSideBar from '../../components/sidebar/SideBar'
import MainSideBar from '../../components/maincomponent/sidebar/SideBar';
import {Route, Switch} from 'react-router-dom'
import Touch from '../../components/maincomponent/touch/Touch';
import MoveImgList from '../../components/maincomponent/mainmoveimg/ImgList';
import Home from '../../components/maincomponent/mainhome/Home'
import axios from 'axios'
import swal from 'sweetalert'





function Heal({isLogin, userinfo, handleLogout}){

  const [moveImgs, setMoveImgs] = useState([])
  const [moveCurrentImgs, setMoveCurrentImgs] = useState({
      title:''
  })
    
    
    const search = ({ title }) => {
      if (moveCurrentImgs.title !== title) {
        
        console.log('title',title)
    
        setMoveCurrentImgs(
          {title})
      }
    }
    
    const filterByImg = (img) => {
        let isTrue = true;
        if (moveCurrentImgs.title) {
         isTrue = isTrue && img.title === moveCurrentImgs.title;
        }
        return isTrue;
      }
    
    
      const handleMoveCardClick = (movecurrentImgs) => {
      
        setMoveCurrentImgs(movecurrentImgs)
            console.log('이미지를 클릭했군요!');
            swal({
              title:"이잉~ 끼모륑!",
              text:"터치 페이지에서 더 즐겁게 감상하세욤!",
              icon:"success",
              dangerMode: true,
            })
          };
    
    
    
          useEffect(() => {
            async function fetchData() {
                try {
                    const resp = await axios.get('https://localhost:4000/healing', {withCredentials: true})
                    const data = resp.data
                    setMoveImgs([...data])
                } catch (error) {
                    console.error(error)
                }
            }
            fetchData()
        }, [])
    
    
    
    
    
  return (
        <div>
            <Header userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout}/>
            <MainSideBar/>
        
        <Switch>
       
      
        {/* <Route path='/heal' exact component={Home} /> */}
  

        <Route exact path='/heal' 
        render={()=><MoveImgList 
            search={search}
            moveCurrentImgs={moveCurrentImgs} 
            moveImgs={moveImgs.filter(filterByImg)}
            handleMoveCardClick={handleMoveCardClick}
            />}
        />


        <Route path='/heal/touch' 
        render={()=> <Touch
        isLogin={isLogin}
        moveImgs={moveCurrentImgs}

        />}/>
       
        </Switch>
        </div>
    )
  }
    
    export default Heal
    