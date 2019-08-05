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
      ],
      search: ''
    }
  }

  //Methods Event
  onSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  // Methods Computed
  filterData () {
    const dataTable = this.state.data
    return dataTable.filter(data => {
      return data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
              data.job.toLowerCase().includes(this.state.search.toLowerCase()) ||
              data.address.toLowerCase().includes(this.state.search.toLowerCase())
    })
  }
  tableRow () {
    if (this.filterData().length > 0) {
      return this.filterData().map((data, index) => {
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
    } else {
      return (
        <tr>
          <td colSpan="4" className="text-center"><b>Data Not Found</b></td>
        </tr>
      )
    }
  }
  tableHeader () { // Dynamic Header Table berdasarkan jumlah data dari table
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
          <div className="form-group">
            <input
              type="text" className="form-control"
              onChange={this.onSearch.bind(this)}
              placeholder="Search for..."
            />
          </div>
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
