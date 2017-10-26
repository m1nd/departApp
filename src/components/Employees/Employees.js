// @flow

import React, { Component } from 'react';
import { Table } from 'react-materialize';

import Employee from './Employee/Employee';
import { EMPLOYEES_URL } from '../../constants';
import { getData, setData } from '../../api';

type Props = {};

type State = {
  data: Array<{
    id: number,
    firstName: string,
    lastName: string,
    departmentId: number,
  }>,
};

class Employees extends Component<Props, State> {
  // eslint-disable-next-line
  state = {
    data: [],
  };

  changeEmplpyeeHandler(id: number, employee: Object) {
    const data = {
      id,
      firstName: employee.firstName.textContent,
      lastName: employee.lastName.textContent,
      departmentId: parseInt(employee.departmentId.textContent, 10),
    };
    setData(`${EMPLOYEES_URL}${id}`, data);
  }

  componentDidMount() {
    getData(EMPLOYEES_URL).then(items => this.setState({ data: items }));
  }

  render() {
    return (
      <Table centered>
        <thead>
          <tr>
            <th data-field="firstName">First Name</th>
            <th data-field="lastName">Last Name</th>
            <th data-field="departmentId">Department ID</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.length > 0
            ? this.state.data.map((employee, index) => {
                return (
                  <Employee
                    person={employee}
                    key={index}
                    change={this.changeEmplpyeeHandler}
                  />
                );
              })
            : ''}
        </tbody>
      </Table>
    );
  }
}

export default Employees;
