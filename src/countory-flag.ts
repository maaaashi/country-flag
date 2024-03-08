import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import type { Type } from './type'

@customElement('countory-flag')
export class MyElement extends LitElement {
  @property({ type: String }) code: Type = 'JP'

  @property({ type: String })
  type: 'flat' | 'shiny' = 'flat'

  @property({ type: Number })
  size: 16 | 24 | 32 | 48 | 64 = 64

  render() {
    return html`
    <img src="https://flagsapi.com/${this.code}/${this.type}/${this.size}.png" />
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'countory-flag': MyElement
  }
}
