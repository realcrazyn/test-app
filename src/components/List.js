import 'antd/dist/antd.css'
import { Card } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const ResidentsList = (props) => {
  const [residents, setResidents] = useState()

  useEffect(() => {
    async function fetchList() {
      const res = await axios.get(
        `https://dispex.org/api/vtest/HousingStock/client`,
        {
          headers: {
            accept: 'text / plain',
            'Content-Type': 'application/json-patch+json',
          },
        }
      )

      setResidents(res.data)
    }
    if (props.currentFlatId !== undefined) {
      fetchList()
    }
  }, [props.currentFlatId])

  if (!residents) {
    return <div>no residents</div>
  }

  return (
    <div style={{ marginTop: '100px' }}>
      <Card size="small" title="Small size card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}
