import { Injectable } from "@angular/core";
import { ToastEntity } from "../toast-alert.component";

@Injectable() export class ToastsService {

    constructor() {}

    toasts: ToastEntity[] = []

    public getToasts(): ToastEntity[] {
        return this.toasts
    }

    public createToast(toast: ToastEntity): ToastEntity[] {
        this.toasts.push(toast);
        return this.getToasts()
    }

    public closeToast(index: number): ToastEntity[] {
        this.toasts.splice(index, 1);
        return this.getToasts()
    }
}