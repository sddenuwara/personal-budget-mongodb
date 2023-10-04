import React from "react";
import * as d3 from "d3";

class D3JSArticle extends React.Component {

    

    constructor() {
        super();
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

    componentDidUpdate() {
        if (this.state.chartData.labels.length === 0) {
            this.setState({ chartData: this.props.budget });
        }
        this.created3js();
    }
    
    

    created3js = () => {

        var width = 360;
        var height = 360;
        var margin = 60;
        var radius = Math.min(width, height) / 2 - margin;
        var svg = null;

        d3.select("#d3js").selectAll("*").remove();

        this.svg = d3.select("#d3js")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr(
                "transform",
                "translate(" + width / 2 + "," + height / 2 + ")"
            );
        var chartData = [];
        for (var i = 0; i < this.state.chartData.labels.length; i++) {
            chartData.push({
                label: this.state.chartData.labels[i],
                value: this.state.chartData.datasets[0].data[i],
            });
        }

        var color = d3.scaleOrdinal()
            .domain(chartData)
            .range(this.state.chartData.datasets[0].backgroundColor);

        var pie = d3.pie()
            .value(function(d) {return d.value; });

        var data_ready = pie(chartData);

        var arc = d3.arc()
            .innerRadius(radius * 0.5)
            .outerRadius(radius * 0.8);

        var outerArc = d3.arc()
            .innerRadius(radius * 0.9)
            .outerRadius(radius * 0.9);

        this.svg
            .selectAll('allSlices')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(60)
                .outerRadius(radius)
            )
            .attr('fill', function(d){ return(color(d.data.label)) })
            .attr("stroke", "white")
            .style("stroke-width", "2px")
            .style("opacity", 0.7);

        this.svg
            .selectAll('allPolylines')
            .data(data_ready)
            .enter()
            .append('polyline')
            .attr("stroke", "black")
            .style("fill", "none")
            .attr("stroke-width", 1)
            .attr('points', function(d) {
                var posA = arc.centroid(d);
                var posB = outerArc.centroid(d);
                var posC = outerArc.centroid(d);
                var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
                posC[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
                return [posA, posB, posC];
            });

        this.svg
            .selectAll('allLabels')
            .data(data_ready)
            .enter()
            .append('text')
            .text( function(d) { return d.data.label } )
            .attr('transform', function(d) {
                var pos = outerArc.centroid(d);
                var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
                pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
                console.log(this.radius);

                return 'translate(' + pos + ')';
            })
            .style('text-anchor', function(d) {
                var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
                return (midangle < Math.PI ? 'start' : 'end');
            });
    }

    render() {
        return (
            <figure id="d3js"></figure>
        );
    }
}

export default D3JSArticle;
