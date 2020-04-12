import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';
import Spinner from '../Spinner';
import {getAdditionalData} from '../../utils/request-utils';

export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null,
      type: props.type,
      total: null,
    };
  }

  async componentDidMount() {
    const data = await getAdditionalData({type: this.state.type});
    const content = {
      series: data.map(item => item.count),
      options: {
        chart: {
          type: 'pie',
        },
        labels: data.map(item => item.name),
      },
    };
    const total = data.reduce((sum, item) => item.count + sum, 0)
    setTimeout(() => this.setState({content, total}), 1000);
  }

  render() {
    const {content} = this.state;

    if (content) {
      return (
        <div className="piechart-wrapper">
          <h2>Во всем мире c 1945 года было осуществлено {this.state.total} ядерных испытания</h2>
          <div id="chart">
            <ReactApexChart options={content.options} series={content.series} type="donut" width={800} />
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}