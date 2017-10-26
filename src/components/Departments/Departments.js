// @flow

import React, { Component } from 'react';
import { Table } from 'react-materialize';

import Department from './Department/Department';
import { DEPARTMENTS_URL } from '../../constants';
import { getData, setData } from '../../api';

type Props = {};

type State = {
  data: Array<{ id: number, name: string }>,
};

class Departments extends Component<Props, State> {
  // eslint-disable-next-line
  state = {
    data: [],
  };

  changeDepartmentHandler(department: Object) {
    const id = parseInt(department.id.textContent, 10);
    const data = {
      id,
      name: department.name.textContent,
    };
    setData(`${DEPARTMENTS_URL}${id}`, data);
  }

  componentDidMount() {
    getData(DEPARTMENTS_URL).then(items => this.setState({ data: items }));
  }

  render() {
    return (
      <Table centered>
        <thead>
          <tr>
            <th data-field="id">ID</th>
            <th data-field="name">Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.length > 0
            ? this.state.data.map((department, index) => {
                return (
                  <Department
                    deps={department}
                    key={index}
                    change={this.changeDepartmentHandler}
                  />
                );
              })
            : ''}
        </tbody>
      </Table>
    );
  }
}

export default Departments;
