import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
           <Card imgUrl="https://cdn.picpng.com/orange/pic-orange-25731.png" cardTitle="Orange" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pear"/>
           <Card imgUrl="https://media.istockphoto.com/photos/isolated-pink-guava-fruits-picture-id1221000031" cardTitle="Guava" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Apple"/>
           <Card  imgUrl="https://www.mango.org/wp-content/uploads/2017/11/houney-variety.jpg"  cardTitle="Mango" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pineapple"/>
        </div>
      </div>
    </section>
  )
}
export default CardSection