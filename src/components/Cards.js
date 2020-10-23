import React from 'react';
import '../style.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>코로나19 종식을 위해 Febreath와 함께</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='코로나19 종식을 위해 여러분의 목소리를 녹음해 주세요'
              label='녹음'
              path='/record'
            />
            <CardItem
              src='images/img-13.jpg'
              text='CXR (chest X-ray)로 코로나19를 진단 할 수 있습니다'
              label='진단'
              path='/test'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='Resnet / Densnet / InceptionResnet model의 결과를 비교해 볼 수 있습니다'
              label='Models'
              path='/models'
            />
            <CardItem
              src='images/img-11.jpg'
              text='폐브리즈는 전국에 있는 모든 선별진료소의 위치를 제공합니다'
              label='선별진료소'
              path='/screening'
            />
            <CardItem
              src='images/img-6.jpg'
              text='서울시 코로나19 확진자 현황 데이터를 활용 발표자료'
              label='시각화 프로젝트'
              path='/visualization'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;