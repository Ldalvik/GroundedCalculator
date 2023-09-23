import React, { useState } from 'react';
import Grounded from './groundedapi/Grounded';
import WEAPONS from "./groundedapi/data/weapons.json"
import { Creature, HeadArmorPiece, LegArmorPiece, Mutation, SortByType, ChestArmorPiece, Weapon } from './groundedapi/Types';
import { IArmor, IArmorData, IWeaponStats } from './groundedapi/Interfaces';

function CalculatorPage() {


  // quick snippets to generate types
  // let o: any = []
  // Object.keys(WEAPONS).forEach((weapon) => {
  //   o.push(WEAPONS[weapon as Weapon]["Code Name"])
  // })

  // let uniqueChars: any = [];
  // o.forEach((c: any) => {
  //   if (!uniqueChars.includes(c)) {
  //     uniqueChars.push(c);
  //   }
  // });

  // const oa = uniqueChars.map((key: any) =>`| "${key}"`)

  // console.log(oa.join(' '))

  const [currentCreature, setCurrentCreature] = useState("Mosquito")
  const armorPieces: IArmor = {
    head: { name: HeadArmorPiece.GAS_MASK },
    chest: { name: ChestArmorPiece.NONE },
    legs: { name: LegArmorPiece.NONE },
  }

  const weaponList = () => {
    const calc = new Grounded(currentCreature as Creature)
      //.addMutation(Mutation.CHOPPER, 2)   
      //.setArmor(armorPieces)
      .setWeaponFilter({ level: 6 })
      .sort(SortByType.HIGHEST_DPS)

    const weapons: IWeaponStats[] = calc.getWeaponList()
    return weapons.map(weapon => {
      return (
        <tr key={weapon.name}>
          <td>{weapon.name}</td>
          <td>{weapon.bestUpgrade}</td>
          <td>{weapon.damagePerSecond.toFixed(2)}</td>
          <td>{weapon.resMulti.toFixed(5)}</td>
          <td>{weapon.timeToKill.toFixed(2)}</td>
          <td>{weapon.staminaToKill.toFixed(2)}</td>
          <td>{Math.ceil(weapon.hitsToKill)}</td>
          <td>{weapon.damageToStaminaRatio.toFixed(2)}</td>
        </tr>
      )
    })
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x grid-padding-y align-center">
        <div className="large-10 medium-10 small-12">
          <div className="card page-card">
            <div className="card-section">

              <h2 className="title-header text-center">Grounded Calculator</h2>
              <p>This calculator was made using datamined information and formulas from SeanP's <a href="">spreadsheet</a> for Grounded.</p>
              <div className="divider" />

              <div className="grid-x align-center"> 
                <table className="unstriped calculator-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Best Upgrade</th>
                      <th>DPS</th>
                      <th>Res Multi</th>
                      <th>TTK</th>
                      <th>Stamina TK</th>
                      <th>Hits TK</th>
                      <th>Damage/Stamina ratio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weaponList()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CalculatorPage;
