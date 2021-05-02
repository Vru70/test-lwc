/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 05-02-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   05-02-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class WireCPR extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    get currentPageRef() {
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2) : '';
    }
}