import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {
  GetAllMen,
  GetAllWomen,
  GetAllEmployes
} from '../../actions/index'
import {bindActionCreators} from 'redux'

class MenuDashboard extends Component {
  state = {}
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    console.log('handleClick menu evento', e.target)
    console.log(this.props)
    this.props.GetAllMen(this.props.EmpsData.emps)
    switch(e.target.id){
      case 'men':
        console.log('MEN')
        this.props.GetAllMen(this.props.EmpsData.current_state !== undefined ? this.props.EmpsData.current_state : this.props.EmpsData.emps)
        break
      case 'women':
        console.log('WOMEN')
        this.props.GetAllWomen(this.props.EmpsData.current_state !== undefined ? this.props.EmpsData.current_state : this.props.EmpsData.emps)
        break
      case 'all_employees':
        console.log('ALL_EMPLOYEES')
        this.props.GetAllEmployes(this.props.EmpsData.current_state !== undefined ? this.props.EmpsData.current_state : this.props.EmpsData.emps)
    }
  }
  render() {
    const { activeItem } = this.state
    console.log('this.props menu filter', this.props)
    return (
      <Menu>
        <Menu.Item
          name='men'
          active={activeItem === 'men'}
          onClick={this.handleItemClick}
          id={'men'}>
          Men
        </Menu.Item>

        <Menu.Item
          name='women'
          active={activeItem === 'women'}
          onClick={this.handleItemClick}
          id='women'>
          Women
        </Menu.Item>

        <Menu.Item
          name='high_salaries'
          active={activeItem === 'high_salaries'}
          onClick={this.handleItemClick}
          id='high_salaries'>
          High Salaries
        </Menu.Item>

         <Menu.Item
          name='all_employees'
          active={activeItem === 'all_employees'}
          onClick={this.handleItemClick}
          id='all_employees'>
          All Employees
        </Menu.Item>
      </Menu>
    )
  }
}

function mapStateToProps({EmpsData}){
  return {EmpsData}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    GetAllMen,
    GetAllWomen,
    GetAllEmployes
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDashboard)
