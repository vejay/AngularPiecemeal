import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    id = 0;

    constructor() {
    }

    incrementId() {
        this.id = this.id + 1;
    }
    
    getNextId() {
       this.incrementId();
       return this.id;
    }
}