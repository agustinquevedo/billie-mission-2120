import React from 'react';

const CompanyRow = (props) => (
    
    props.company.map((company) => (
        
        <div className="box is-clickable" key={company.id} onClick={() => {props.editRow(company)}}>
            <div className="columns">
                <div className="column">
                    <div>
                        <p className="heading">Company</p>
                        <p>{company.name}</p>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <p className="heading">First purchase date</p>
                        <p>{company.date_of_first_purchase}</p>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <p className="heading">Total budget</p>
                        <p>{props.currencyFormat(company.budget)}</p>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <p className="heading">Budget spent</p>
                        <p>{props.currencyFormat(company.budget_spent)}</p>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <p className="heading">Budget left</p>
                        <p>{props.currencyFormat(company.budget - company.budget_spent)}</p>
                    </div>
                </div>
            </div>
        </div>
    ))
)

export default CompanyRow;