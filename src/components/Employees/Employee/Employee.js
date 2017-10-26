// @flow

import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

type Props = {
  person: {
    id: number,
    firstName: string,
    lastName: string,
    departmentId: number,
  },
  change: Function,
};

class Employee extends Component<Props> {
  constructor(props) {
    super(props);

    this.store = {
      firstName: '',
      lastName: '',
      departmentId: 0,
    };
  }

  render() {
    return (
      <tr>
        <td
          contentEditable
          onBlur={() => this.props.change(this.props.person.id, this.store)}
          ref={firstName => (this.store.firstName = firstName)}
        >
          {this.props.person.firstName}
        </td>
        <td
          contentEditable
          onBlur={() => this.props.change(this.props.person.id, this.store)}
          ref={lastName => (this.store.lastName = lastName)}
        >
          {this.props.person.lastName}
        </td>
        <td
          contentEditable
          onBlur={() => this.props.change(this.props.person.id, this.store)}
          ref={departmentId => (this.store.departmentId = departmentId)}
        >
          {this.props.person.departmentId}
        </td>
        <td>
          <Button floating className="red" waves="light" onClick={() => {}}>
            <Icon>mode_edit</Icon>
          </Button>
        </td>
      </tr>
    );
  }
}

export default Employee;
