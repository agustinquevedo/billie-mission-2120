import React, { useState } from 'react';
import companies from './endpoint/companies';
import Navbar from './components/Navbar';
import CompanyRow from './components/CompanyRow';
import Modal from './components/Modal';

function App() {
  const companiesList = companies

  const [ company, setCompany ] = useState(companiesList)
  const [ showModal, setShowModal ] = useState(false)
  const [ currentCompany, setCurrentCompany ] = useState({
    id: null,
    name: '',
    date_of_first_purchase: '',
    budget: null,
    budget_spent: null
  })

  // Select company to edit.
  const editRow = (company) => {
    setShowModal(true);
    setCurrentCompany({
      id: company.id,
      name: company.name,
      date_of_first_purchase: company.date_of_first_purchase,
      budget: company.budget,
      budget_spent: company.budget_spent
    })
  }

  // Update company.
  const updateCompany = (id, updatedCompany) => {
    document.getElementById('save-button').classList.add('is-loading')
    setCompany(company.map((company) => (company.id === id ? updatedCompany : company)))
    window.setTimeout(() => {
      document.getElementById('save-button').classList.remove('is-loading');
      document.getElementById('saved-notification').classList.remove('is-hidden')
    }, 300); 
  }

  // Currency format to DE.
  const currencyFormat = (number) => {
    return (
      new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR'}).format(number)
    )
  }

  return (
    <div className="section">
      <Navbar />
      <div className="container is-max-desktop">
        <h1 className="title">Companies list</h1>
        { 
          showModal ? (
            <Modal 
              currentCompany={currentCompany} 
              updateCompany={updateCompany}
              setShowModal={setShowModal}
            />
          ) : 
          (<div></div>)
        }
        <CompanyRow company={company} editRow={editRow} currencyFormat={currencyFormat} />
      </div>
    </div>
  );
}

export default App;
