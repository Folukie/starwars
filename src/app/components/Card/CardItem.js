/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CardItem = ({
  title,
  sub1Item,
  sub2Item,
  sub3Item,
  sub1,
  sub2,
  sub3,
  image,
}) => {
  return (
    <div className="md:flex md:space-x-6">
      <img src={image} alt="film icon" />
      <div>
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="font-bold text-sm">
          {sub1}: {sub1Item}
        </p>
        <p className="font-bold text-sm">
          {sub2}: {sub2Item}
        </p>
        <p className="font-bold text-sm">
          {sub3}: {sub3Item}
        </p>
      </div>
    </div>
  )
}

export default CardItem
