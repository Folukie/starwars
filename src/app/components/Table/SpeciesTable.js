import Table from '@/app/components/Table/Table'
import React from 'react'
import { formatDate } from '../../helpers/index'
import { useRouter, usePathname } from 'next/navigation'

const SpeciesTable = ({ data }) => {
  const router = useRouter()
  const pathname = usePathname()
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
          name: 'Classification',
          selector: (row) => row.classification,
        },
        {
          name: 'Eye colors',
          selector: (row) => row.eye_colors,
        },
        {
          name: 'Hair Color',
          selector: (row) => row.hair_colors,
        },
        {
          name: 'Height',
          selector: (row) => row.average_height,
        },
        {
          name: 'Created',
          selector: (row) => formatDate(row.created),
        },
      ]}
    />
  )
}

export default SpeciesTable
