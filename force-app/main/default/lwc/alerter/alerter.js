import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';

const THEMES=[{label: "default", value: "default"},
                {label: "shade", value: "shade"},
                {label: "inverse", value: "inverse"},
                {label: "alt-inverse", value: "alt-inverse"},
                {label: "success", value: "success"},
                {label: "info", value: "info"},
                {label: "warning", value: "warning"},
                {label: "error", value: "error"},
                {label: "offline", value: "offline"},
            ];

const VARIANTS=[{label: "header", value: "header"},
                {label: "headerless", value: "headerless"}
            ];

export default class Alerter extends LightningElement {
    themes=THEMES;
    theme='default';
    variants=VARIANTS;
    variant='header';

    async showAlert() {
        await LightningAlert.open({
            message: 'Here is the alert that will be shown to the user',
            theme: this.theme,
            label: 'Alerted',
            variant: this.variant
        });
    }

    themeChanged(event) {
        this.theme=event.target.value;
    }

    variantChanged(event) {
        this.variant=event.target.value;
    }
}