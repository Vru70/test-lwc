/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-02-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-02-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, api } from 'lwc';
import { sum } from './sum';

export default class UnitTest extends LightningElement {
    @api unitNumber = sum(2, 3);
    handleChange(event) {
        this.unitNumber = event.target.value;
    }
}