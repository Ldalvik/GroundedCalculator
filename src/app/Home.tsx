import React from 'react';
function App() {


  const categoryButton = (name: string) => {
    return (
      <div className="small-8 medium-4 large-4 btn-section">
        <button className="button btn">{name}</button>
      </div>
    )
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x grid-padding-y align-center">
        <div className="large-8 medium-10 small-12">
          <div className="card page-card">
            <div className="card-section">

              <h1 className="title-header text-center">Grounded API</h1>
              <div className="divider" />

              <div className="grid-x align-center">
                {categoryButton("Creatures")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
