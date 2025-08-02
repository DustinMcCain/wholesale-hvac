import React from 'react';

import { gasSystems } from './data/gasSystems';
import { gasUnits } from './data/gasUnits';
import { acCondenserOnly } from './data/acCondenserOnly';
import { evaporatorCoilOnly } from './data/evaporatorCoilOnly';
import { furnaceOnly } from './data/furnaceOnly';
import { heatPumpOnly } from './data/heatPumpOnly';
import { airHandlerOnly } from './data/airHandlerOnly';
import { electricSystems } from './data/electricSystems';
import { electricUnits } from './data/electricUnits';

import goodmanLogo from './images/goodman-logo.png';

import './styles/grid.css';

const RecommendedSystem = ({ sysType, sysTonnage, fullOrReplace }) => {

  const sysData = { gasSystems, electricSystems, acCondenserOnly, evaporatorCoilOnly, furnaceOnly, heatPumpOnly, airHandlerOnly, gasUnits, electricUnits };

  let { productTitle, productImage, pricingLevels, seers, levelDescriptions, levelFeatureLists, levelTotFinancings, levelTotPrices } = sysData[fullOrReplace] ? sysData[fullOrReplace][sysTonnage] :
    {
      productTitle: 'no data', productImage: 'no data', pricingLevels: ['no data'], seers: ['no data'], levelDescriptions: ['no data'], levelFeatureLists: [['no data']], levelTotFinancings: ['no data'], levelTotPrices: ['no data']
    }

  return (

    <div className="RecommendedSystem">
      <div className="info-grid">
        <div className="cell title">{productTitle}</div>
        <div className="cell product-image">
          <img src={goodmanLogo} alt="Goodman" />
          <img src={productImage} alt={`${productTitle}`} rel="noopener noreferrer" />

        </div>
        <div className="cell pricing-info">

          <div className="pricing-info-box">
            {pricingLevels.map((lvl, i) => (<section key={i} className={`pricing-info-row ${lvl.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="cell level-name">
                <h3 className="pricing-level">{lvl}</h3>
                <p className="seer">SEER2: {seers[i]}</p>
              </div>
              <div className="cell level-info">
                <div className="level-description">{levelDescriptions[i]}</div>
                <ul className="level-features">
                  {/* <!-- level feature list --> */}
                  {
                    levelFeatureLists[i].map(
                      (item, j) => <li key={j}>{item}</li>
                    )
                  }
                </ul>
              </div>
              <div className="cell level-price">
                <div className="price-month">${Math.floor(levelTotPrices[i] / 84)}/month</div>
                <div className="level-financing">{levelTotFinancings[i]}</div>
                <div className='level-tot-price'>${levelTotPrices[i]}</div>
              </div>
            </section>)
            )}
          </div>

        </div>
        <div className="cell brand-logos">
          <img src="images/brand-logos.png" alt="brand logos" />
        </div>

        <div className="mobile-finance-buttons">

          <div className="cell finance-btn1">
            <div className="12-month-button">
              <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=RE468&loamt=" className="apply-button">12 Month <span>Same-As-Cash*</span>
                <aside className="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside></a>
            </div>
          </div>

          <div className="cell finance-btn2">
            <div className="60-month-button">
              <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=ZRE78&loamt=" className="apply-button">0.00%<span>60-Month Loan*</span>
                <aside className="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside></a>
            </div>
          </div>

          <div className="cell finance-btn1">
            <div className="12-month-button">
              <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=69910YRR69&loamt=" className="apply-button">6.99% <span>10-Year Loan*</span>
                <aside className="hover-show">**Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment term is 120 months. 6.99% fixed APR. Minimum loan amounts apply. The first monthly payment will be due 30 days after the loan closes.</aside></a>
            </div>
          </div>

        </div>


        <footer className="cell footer">
          <a href="https://www.bbb.org/us/ut/salt-lake-city/profile/loans/enerbank-usa-1166-22001531#sealclick" rel="noopener noreferrer" target="_blank">
            <img alt="Seal of the Better Business Bureau" src="https://seal-utah.bbb.org/seals/darkgray-seal-200-65-bbb-22001531.png" />
          </a>
          <img alt="Apply: 12 Months, same as cash" style={{ WebkitUserSelect: 'none', margin: 'auto' }} src="https://application.enerbank.com/content/images/MemberFDIC.png" />
          <img alt="Apply: 0.00% 60-month loan" src="https://application.enerbank.com/content/images/e-b-logo.png" />
        </footer>
      </div>
    </div>
  )
}

export default RecommendedSystem;