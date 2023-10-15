import React from "react";

import axios from "axios";
import ChartJSArticle from "../../components/ChartJSArticle/ChartJSArticle";
import D3JSArticle from "../../components/D3JSArticle/D3JSArticle";

class HomePage extends React.Component {   

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

    getBudget = () => {
        axios.get('http://localhost:3000/api/budget/fetch')
        .then(response => {
            this.setState({ chartData: response.data });
            console.log(response.data);
        })
    };

    componentDidMount() {
        this.getBudget();
    }

    render() {
        return (
            <main className="center" id="main">
                <div itemScope itemType="http://schema.org/article" className="page-area" role="feed">
                        <article className="h-entry">
                            <h1 itemProp="headline" className="p-name">Stay on track</h1>
                            <p itemProp="articleBody" className="e-content">
                                Do you know where you are spending your money? If you really stop to track it down,
                                you would get surprised! Proper budget management depends on real data... and this
                                app will help you with that!
                            </p>
                        </article>
                        <article className="h-entry">
                            <h1 itemProp="headline" className="p-name">Alerts</h1>
                            <p itemProp="articleBody" className="e-content">
                                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                            </p>
                        </article>
                        <article className="h-entry">
                            <h1 itemProp="headline" className="p-name">Results</h1>
                            <p itemProp="articleBody" className="e-content">
                                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                                Also, they to live happier lives... since they expend without guilt or fear... 
                                because they know it is all good and accounted for.
                            </p>
                        </article>
                        <article className="h-entry">
                            <h1 itemProp="headline" className="p-name">Free</h1>
                            <p itemProp="articleBody" className="e-content">
                                This app is free!!! And you are the only one holding your data!
                            </p>
                        </article>
                        <article className="h-entry">
                            <h1 itemProp="headline" className="p-name">Stay on track</h1>
                            <p itemProp="articleBody" className="e-content">
                                Do you know where you are spending your money? If you really stop to track it down,
                                you would get surprised! Proper budget management depends on real data... and this
                                app will help you with that!
                            </p>
                        </article>
                        <article className="h-entry">
                            <h1 itemProp="headline" className="p-name">Alerts</h1>
                            <p itemProp="articleBody" className="e-content">
                                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                            </p>
                        </article>
                        <article className="h-entry">
                            <h1 itemProp="headline" className="p-name">Results</h1>
                            <p itemProp="articleBody" className="e-content">
                                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                                Also, they to live happier lives... since they expend without guilt or fear... 
                                because they know it is all good and accounted for.
                            </p>
                        </article>
                        <article className="h-entry">
                            <h1 itemProp="headline" className="p-name">Chart</h1>
                            <p itemProp="articleBody" className="e-content">
                                <ChartJSArticle budget = {this.state.chartData}/>
                            </p>
                        </article>
                        <article className="h-entry">
                            <h1 itemProp="headline" className="p-name">Chart</h1>
                            <D3JSArticle budget={this.state.chartData}/>
                        </article>
    
                </div>
    
            </main>
      );    
    
    }
}   

export default HomePage;
