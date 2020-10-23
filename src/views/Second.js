import React from 'react'
import '../App.css'
import Table from '../components/Table'

// Styles
const capitalize = {
  textTransform: 'capitalize'
}

class Second extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.state = {
      search: '',
      modal: false,
      editedIndex: -1,
      model: {},
      data: [
        { name: 'Ahmad', job: 'Freelance', address: 'Denpasar' },
        { name: 'Adi', job: 'PNS', address: 'Bandung' },
        { name: 'Bambang', job: 'Swasta', address: 'Surabaya' }
      ],
      header: [
        { key: 'name', label: 'Name' },
        { key: 'job', label: 'Job' },
        { key: 'address', label: 'Address' }
      ],
      action: ['edit', 'delete']
    }
  }

  // Methods Event
  inputModel(model, event) {
    // check if "model" has ".", which is that "model" has child inside
    if (model.includes('.')) {
      let childObject = model.split('.')
      this.setState({
        [childObject[0]]: Object.assign({}, this.state[childObject[0]], {
          [childObject[1]]: event.target.value
        })
      })
    } else {
      this.setState({
        [model]: event.target.value
      })
    }
  }
  onModal() {
    this.setState({
      modal: !this.state.modal,
      editedIndex: -1,
      model: {}
    })
  }
  handleEdit(val) {
    this.editItem(val)
  } 
  editItem(index) {
    const getData = this.state.data[index]
    console.log(getData)
    this.setState({
      model: getData,
      editedIndex: index,
      modal: !this.state.modal
    })
  }
  deleteItem(index) {
    if (window.confirm('Are you sure delete this data?')) {
      let data = this.state.data
      data.splice(index, 1)
      this.setState({
        data: data
      })
    }
  }
  saveItem() {
    if (window.confirm('Are you sure save this data?')) {
      const model = this.state.model
      const data = this.state.data
      if (this.state.editedIndex > -1) {
        Object.assign(data[this.state.editedIndex], model)
      } else {
        data.push(model)
      }
      this.setState({
        data: data
      })
    }
    this.onModal()
  }

  // Methods Computed
  filterData() {
    const dataTable = this.state.data
    return dataTable.filter(data => {
      return (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.job.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.address.toLowerCase().includes(this.state.search.toLowerCase())
      )
    })
  }
  tableRow() {
    if (this.filterData().length > 0) {
      return this.filterData().map((data, index) => {
        const htmlTableData = this.state.header.map((head, hIndex) => {
          return (
            <td key={hIndex}>{data[head.key]}</td>
          )
        })
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            {htmlTableData}
            <td>
              <div className="btn-toolbar">
                <button
                  type="button"
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#modalItem"
                  data-backdrop="static"
                  onClick={this.editItem.bind(this, index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.deleteItem.bind(this, index)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        )
      })
    } else {
      return (
        <tr>
          <td colSpan="5" className="text-center">
            <b>Data Not Found</b>
          </td>
        </tr>
      )
    }
  }
  tableHeader() {
    /* const headerTable = Object.keys(this.state.data[0]) //ambil nama key */
    const headerTable = this.state.header
    return headerTable.map((val, index) => {
      return (
        <th key={index} style={capitalize}>
          {val.label}
        </th>
      )
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Table Data</h1>
          <div className="row">
            <div className="col-md-10">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.inputModel.bind(this, 'search')}
                  placeholder="Search for..."
                />
              </div>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-info btn-block"
                data-toggle="modal"
                data-target="#modalItem"
                data-backdrop="static"
                onClick={this.onModal.bind(this)}
              >
                Add Item
              </button>
            </div>
          </div>
          <div className="table table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  {this.tableHeader()}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.tableRow()}</tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12">
          <Table 
            data={this.state.data}
            header={this.state.header}
            search={this.state.search}
            itemIndex={this.state.editedIndex}
            action={this.state.action}
            onEditItem={this.handleEdit}
          >
            <h1 className="text-center">Table Data With Table Component</h1>
          </Table>
        </div>
        <div className="modal fade" role="dialog" id="modalItem">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Item Form</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={this.inputModel.bind(this, 'model.name')}
                        value={this.state.model.name || ''}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Job"
                        onChange={this.inputModel.bind(this, 'model.job')}
                        value={this.state.model.job || ''}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        onChange={this.inputModel.bind(this, 'model.address')}
                        value={this.state.model.address || ''}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  onClick={this.onModal.bind(this)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.saveItem.bind(this)}
                  data-dismiss={this.state.modal ? 'modal' : ''}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Second
