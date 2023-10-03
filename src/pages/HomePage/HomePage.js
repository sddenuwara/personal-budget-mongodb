import React from "react";

function HomePage() {
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
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </p>
                </article>

        </div>

    </main>
  );
}

export default HomePage;
