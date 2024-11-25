import React from 'react';
import { Header } from '../../components/header/header';
import { Controls } from '../../components/controls/controls';
import { ButtonNext } from '../../components/button/button-next/button-next';
import { ButtonPrev } from '../../components/button/button-prev/button-prev';
import './Solution.css';
import { RadioForm } from '../../components/radio-form/radio-form';


export function Solution(){
  return (
    <div>
      <div className='wrap'>
        <div className='solution-header'>
          <Header>
              <span>Решение</span>
          </Header>
        </div>
        <h2>Программный рекомендательный интеграционный модуль «Гурубокс»</h2>
        <div >
            <img className='solut-img' src='../../img/solution.png' alt='схема'></img>
        </div>
        <p className='solution-motiv'>Создайте сами себе цифрового наставника</p>
        <RadioForm/>
        <Controls>
            {/* <ButtonPrev/> */}
            {/* <ButtonNext/> */}
        </Controls>
      </div>
      <div className='solution-half-bg'/>
      <img src='../../img/small-circle.png'className='small-circle' alt='круг'/>
      <img src='../../img/circle-bg.svg'className='circle' alt='круг на фоне'/>
      <div className='half-circle'/>

    </div>
  )
}
