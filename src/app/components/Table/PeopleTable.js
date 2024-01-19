import Table from '@/app/components/Table/Table'
import React from 'react'
import { formatDate, formatBirthYear } from '../../helpers/index'
import { useRouter, usePathname } from 'next/navigation'

const PeopleTable = ({ data }) => {
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
          name: 'Birth year',
          selector: (row) => formatBirthYear(row.birth_year),
        },
        {
          name: 'Gender',
          selector: (row) => row.gender,
        },
        {
          name: 'Hair Color',
          selector: (row) => row.hair_color,
        },
        {
          name: 'Height',
          selector: (row) => row.height,
        },
        {
          name: 'Created',
          selector: (row) => formatDate(row.created),
        },
      ]}
    />
  )
}

export default PeopleTable
