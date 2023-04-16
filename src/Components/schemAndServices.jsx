import React from "react";
import styled from "styled-components";

const SchemAndServices = () => {
  return (
    <Container className="full-scheme-page">
      
      <div className="scheme">
        <div>
          <div className="scheme-desc">
            <h5>
              Purchase of Small Farm Implements for e.g. Manual and Bullock
              Drawn Implements
            </h5>
            <div>
              <p>
                <span>
                  Manual Bullock Drawn Implement System of Agriculture
                  Department
                </span>
              </p>
            </div>
            <button>Apply</button>
          </div>
        </div>
        <div className="image-container">
          <img src="images/scheme1.jpg"></img>
        </div>
      </div>

      <hr></hr>


     


      <div className="scheme">
        <div>
          <div className="scheme-desc">
            <h5>
            Development of Potato, Vegetable And Spices- 2022-23
            </h5>
            <div>
              <p>
                <span>
                Development of Potato, Vegetable and Spices
                </span>
              </p>
            </div>
            <button>Apply</button>
          </div>
        </div>
        <div className="image-container">
          <img src="images/potato.jpg"></img>
        </div>
      </div>

      <hr></hr>


      <div className="scheme">
        <div>
          <div className="scheme-desc">
            <h5>
            Subsidy for Execution of Shallow Tubewells or Borewells on Farm Lands
            </h5>
            <div>
              <p>
                <span>
                DBT on Jalanidhi (Shallow tube & Borewell) scheme of Agriculture
            Department Apply
                </span>
              </p>
            </div>
            <button>Apply</button>
          </div>
        </div>
        <div className="image-container">
          <img src="images/tubewell.jpg"></img>
        </div>
      </div>

      <hr></hr>


      <div className="scheme">
        <div>
          <div className="scheme-desc">
            <h5>
            Subsidy for Installation of Solar Pumps on Farm Lands
            </h5>
            <div>
              <p>
                <span>
                Soura Jalanidhi Scheme of Agriculture Department
                </span>
              </p>
            </div>
            <button>Apply</button>
          </div>
        </div>
        <div className="image-container">
          <img src="images/solar-panel.jpg"></img>
        </div>
      </div>


      <hr></hr>

      <div className="scheme">
        <div>
          <div className="scheme-desc">
            <h5>
            Subsidy for Procurement of Farm Machinery and Implements
            </h5>
            <div>
              <p>
                <span>
                DBT on Farm Mechanization Scheme of Agriculture Department
                </span>
              </p>
            </div>
            <button>Apply</button>
          </div>
        </div>
        <div className="image-container">
          <img src="images/tractor.jpg"></img>
        </div>
      </div>

     

     
    </Container>
  );
};

export default SchemAndServices;

const Container = styled.div`
  padding: 1.5rem;
  box-shadow: 0 0 2px;
  margin: 1rem 0;
  border-radius: 8px;
  margin-left: 250px;
  margin-right: 250px;

  .scheme {
    /* background-color: lightblue; */
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: darkgreen;
      border-color: white;
      color: white;
      padding: 4px 10px;
      border-radius: 5px;
    }

    .image-container{
      /* width: 50px; */
      display: flex;
      align-items: center;
      background-color: pink;
      
      img{
        width: 100px;
        border-radius: 10px;
      }
    }
  }
`


