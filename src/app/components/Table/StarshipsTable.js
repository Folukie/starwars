import Table from '@/app/components/Table/Table'
import React from 'react'
import { useRouter } from 'next/navigation'

const StarshipsTable = ({ data }) => {
  const router = useRouter()
  return (
    <Table
      data={data}
      onRowClicked={(row) => router.push('/pages/item')}
      columns={[
        {
          name: 'Name',
          selector: (row) => row.name,
        },
        {
          name: 'Model',
          selector: (row) => row.model,
        },
        {
          name: 'Class',
          selector: (row) => row.starship_class,
        },
        {
          name: 'Passenger',
          selector: (row) => row.passengers,
        },
        {
          name: 'Length',
          selector: (row) => row.length,
        },
        {
          name: 'Consumable',
          selector: (row) => row.consumables,
        },
      ]}
    />
  )
}

export default StarshipsTable
