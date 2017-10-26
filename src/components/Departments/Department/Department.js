// @flow

import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

type Props = {
  deps: { id: number, name: string },
  change: Function,
};

class Department extends Component<Props> {
  constructor(props) {
    super(props);

    this.store = {
      id: 0,
      name: '',
    };
  }

  render() {
    return (
      <tr>
        <td
          contentEditable
          onBlur={() => this.props.change(this.store)}
          ref={id => (this.store.id = id)}
        >
          {this.props.deps.id}
        </td>
        <td
          contentEditable
          onBlur={() => this.props.change(this.store)}
          ref={name => (this.store.name = name)}
        >
          {this.props.deps.name}
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

export default Department;
