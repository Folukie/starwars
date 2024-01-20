/* eslint-disable @next/next/no-img-element */
import React from 'react'
import DashboardLayout from '@/app/components/Layout/DashboardLayout'
import CardItem from '@/app/components/Card/CardItem'

const Item = () => {
  return (
    <DashboardLayout goBackHref>
      <div className=" mt-20 space-y-16">
        <CardItem
          title={'Death Star'}
          sub1Item={' DS-1 Orbital Battle Station'}
          sub2Item={'22'}
          sub3Item={' Dior, Kingley, Jamal'}
          sub1={'Mode,'}
          sub2={'Passengers'}
          sub3={'Pilots'}
          image={'/images/starship.png'}
        />
      </div>
    </DashboardLayout>
  )
}

export default Item
