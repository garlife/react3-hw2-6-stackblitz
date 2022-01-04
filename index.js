import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Statistic, Col, Row } from 'antd';

let n = 5;

ReactDOM.render(
  <div>
    <Row gutter={20}>
      <Col>
        <Statistic title="Константа n" value={n} />
      </Col>
      <Col>
        <Statistic title="Сумма натуральных чисел" value={(n * (n + 1)) / 2} />
      </Col>
    </Row>
  </div>,
  document.getElementById('container')
);
