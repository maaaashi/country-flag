import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { Type } from './type'

@customElement('countory-flag')
export class MyElement extends LitElement {
  @property({ type: String }) code: Type = 'BE'

  @property({ type: String })
  type: 'flat' | 'shiny' = 'flat'

  @property({ type: Number })
  size: 16 | 24 | 32 | 48 | 64 = 64

  render() {
    return html`
    <img src="https://flagsapi.com/${this.code}/${this.type}/${this.size}.png" />
    `
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'countory-flag': MyElement
  }
}
