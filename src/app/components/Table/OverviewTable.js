import Table from '@/app/components/Table/Table'
import TableSkeleton from '@/app/components/Table/TableSkeleton'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const OverviewTable = ({ data }) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Table
      data={data}
      onRowClicked={(row) => router.push(`${pathname}/${row.episode_id}`)}
      columns={[
        {
          name: 'Film Title',
          selector: (row) => row.title,
        },
        {
          name: 'Release Date',
          selector: (row) => row.release_date,
        },
        {
          name: 'Director',
          selector: (row) => row.director,
        },
        {
          name: 'Producer',
          selector: (row) => row.producer,
        },
        {
          name: 'Episode ID',
          selector: (row) => row.episode_id,
        },
        {
          name: 'Character',
          selector: (row) => row.characters[0],
        },
      ]}
    />
  )
}

export default OverviewTable
