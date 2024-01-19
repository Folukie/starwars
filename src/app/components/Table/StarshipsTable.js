import Table from '@/app/components/Table/Table'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const StarshipsTable = ({ data }) => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <Table
      data={data}
      onRowClicked={(row) => router.push(`${pathname}/${row.episode_id}`)}
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
