import React from 'react'
import '../App.css'

// Styles
const capitalize = {
  textTransform: 'capitalize'
}

class Second extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Ahmad', job: 'Freelance', address: 'Denpasar' },
        { name: 'Adi', job: 'PNS', address: 'Bandung' },
        { name: 'Bambang', job: 'Swasta', address: 'Surabaya' }
      ]
    }
  }

  //Methods
  tableRow () {
    const dataTable = this.state.data
    return dataTable.map((data, index) => {
      // Cara 2
      const { name, job, address } = data //otomatis langsung identifikasi nama key dari data 
      return (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{name}</td>
          <td>{job}</td>
          <td>{address}</td>
        </tr>
      )
      // // Cara 1
      // return (
      //   <tr key={index}>
      //     <td>{index+1}</td>
      //     <td>{data.name}</td>
      //     <td>{data.job}</td>
      //     <td>{data.address}</td>
      //   </tr>
      // )
    })
  }
  tableHeader () {
    const headerTable = Object.keys(this.state.data[0]) //ambil nama key
    console.log(headerTable)
    return headerTable.map((key, index) => {
      return <th key={index} style={capitalize}>{key}</th>
   })
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Table Data</h1>
          <div className="table table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  {this.tableHeader()}
                  {/* <th>Nama</th>
                  <th>Pekerjaan</th>
                  <th>Alamat</th> */}
                </tr>
              </thead>
              <tbody>
                {this.tableRow()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default Second
