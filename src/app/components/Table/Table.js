'use client'

import { Checkbox } from '@mui/material'
import React from 'react'
import DataTable from 'react-data-table-component'
import styled from 'styled-components'

const rowTheme = {
  header: {
    borderColor: 'transparent',
    backgroundColor: '#1C065A',
    fontSize: '0.825rem',
    fontColor: 'white',
    fontColorActive: 'rgba(255, 255, 255, 0.85)',
  },
  rows: {
    // spaced allows the following properties
    spacing: 'spaced',
    spacingBorderRadius: '0.25rem',
    spacingMargin: '.5rem',
    fontColor: '#1C065A',
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: 'white',
    height: '52px',
    fontSize: '0.825rem',
    stripedColor: ' #F5F4F7',
  },
  cells: {
    cellPadding: '48px',
  },
  footer: {
    separatorStyle: 'none',
  },
  headCells: {
    pointerEvent: 'none',
  },
}

const SampleStyle = styled.div`
  background-color: rgb(248, 247, 252);
  border-radius: 0.25rem;
  padding: 1.5rem 2rem;
`

const Table = (props, { onRowClicked }) => {
  const ExpandableRow = ({ data }) => {
    return (
      <SampleStyle>
        {React.cloneElement(props.expandableRowsComponent, { data })}
      </SampleStyle>
    )
  }
  const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate }

  return (
    <DataTable
      {...props}
      customTheme={{ ...rowTheme, ...(props.customTheme || {}) }}
      expandableRowsComponent={<ExpandableRow />}
      selectableRowsComponentProps={selectProps}
      selectableRowsComponent={Checkbox}
      onSelectedRowsChange={onRowClicked}
      noHeader
      responsive
      striped
      pagination
      selectableRows
      selectableRowsSingle
    />
  )
}

export default Table
