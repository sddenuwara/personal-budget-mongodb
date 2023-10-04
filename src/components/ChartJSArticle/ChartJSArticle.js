import React from "react";
import { Chart as ChartJS, PieController, ArcElement, Tooltip, Legend} from "chart.js";

class ChartJSArticle extends React.Component {

    constructor() {
        super();
        this.chartRef = React.createRef();
        this.state = {
            chartData: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: []
                    }
                ]
            }
        }
    }

    componentDidMount() {
        ChartJS.register(PieController, ArcElement, Tooltip, Legend);
    }

    componentDidUpdate() {
        if (this.state.chartData.labels.length === 0) {
            this.setState({ chartData: this.props.budget });
        }
        
        const chartInstance = this.chartInstance;
        if (chartInstance) {
            chartInstance.destroy();
        }

        this.chartInstance = new ChartJS(this.chartRef.current, {
            type: "pie",
            data: this.state.chartData
        })

    }

    render() {
        return (
            <canvas ref={this.chartRef} />
        );
    }
}

export default ChartJSArticle;
