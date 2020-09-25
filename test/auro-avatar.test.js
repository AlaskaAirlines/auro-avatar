import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-avatar.js';

describe('auro-avatar', () => {
  it('sets the CSS class on auro-avatar > div element', async () => {
    const el = await fixture(html`
      <auro-avatar cssclass="testClass"></auro-avatar>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-avatar cssclass="testClass"></auro-avatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-avatar custom element is defined', async () => {
    const el = await !!customElements.get("auro-avatar");

    await expect(el).to.be.true;
  });
});
