import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'excel__header'
    toHTML() {
        return `
            <input type="text" class="header-input" value="Новая таблица">
            <div class="header-buttons">
                <button class="button-icon">
                    <i class="material-icons">delete</i>
                </button>
                <button class="button-icon">
                    <i class="material-icons">exit_to_app</i>
                </button>
            </div>
        `
    }
}