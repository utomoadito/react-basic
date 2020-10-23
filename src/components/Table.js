import React from 'react'

// Styles
const capitalize = {
  textTransform: 'capitalize'
}

class Table extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }

 // Methods Computed
  filterData() {
    const dataTable = this.state.data
    return dataTable.filter(data => {
      return (
        data.name.toLowerCase().includes(this.props.search.toLowerCase()) ||
        data.job.toLowerCase().includes(this.props.search.toLowerCase()) ||
        data.address.toLowerCase().includes(this.props.search.toLowerCase())
      )
    })
  }
  tableRow() {
    if (this.filterData().length > 0) {
      return this.filterData().map((data, index) => {
        const htmlTableContent = this.props.header.map((head, hIndex) => {
          return (
            <td key={hIndex}>{data[head.key]}</td>
          )
        })
        const htmlTableAction = this.props.action.map((act, actIndex) => {
          let actionButton = []
          if (act === 'edit') {
            actionButton.push(
              <div key={actIndex}>
                <button
                  type="button"
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#modalItem"
                  data-backdrop="static"
                  onClick={this.props.onEditItem.bind(this, index)}
                >
                  Edit
                </button>
              </div>
            )
          }
          return actionButton
        })
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            {htmlTableContent}
            {this.props.action.length > 0 ? (
              <td>
                <div className="btn-toolbar">
                  {htmlTableAction}
                </div>
              </td>
            ) : false}
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
    const headerTable = this.props.header
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
      <div>
        {this.props.children}
        <div className="table table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>No</th>
                {this.tableHeader()}
                {this.props.action.length > 0 ? (<th>Action</th>) : false}
              </tr>
            </thead>
            <tbody>{this.tableRow()}</tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Table
