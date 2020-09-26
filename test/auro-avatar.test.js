import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-avatar.js';

describe('auro-avatar', () => {
  it('auro-avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-avatar code="mke"></auro-avatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-avatar custom element is defined', async () => {
    const el = await !!customElements.get("auro-avatar");

    await expect(el).to.be.true;
  });

  it('sets auro-avatar to any image', async () => {
    const el = await fixture(html`
      <auro-avatar img="https://bit.ly/365FNTh"></auro-avatar>
    `);

    const root = el.shadowRoot;
    const img = root.querySelector('img');

    await expect(img.src).to.equal("https://bit.ly/365FNTh");
  });

  it('sets auro-avatar alt text', async () => {
    const el = await fixture(html`
      <auro-avatar img="https://bit.ly/3jaGMoE" alt="this is an image"></auro-avatar>
    `);

    const root = el.shadowRoot;
    const img = root.querySelector('img');

    await expect(img.alt).to.equal("this is an image");
  });

  it('sets auro-avatar with airport code image', async () => {
    const el = await fixture(html`
      <auro-avatar code="mke"></auro-avatar>
    `);

    const root = el.shadowRoot;
    const img = root.querySelector('img');

    await expect(img.src).to.equal("https://resource.alaskaair.net/-/media/images/pages/serve-manage/mke");
  });

  it('sets auro-avatar with icon', async () => {
    const el = await fixture(html`
      <auro-avatar>
        <auro-icon category="interface" name="location-stroke"></auro-icon>
      </auro-avatar>
    `);

    const root = el.shadowRoot;
    const div = root.querySelector('div');

    await expect(div.className).to.equal("slot");
  });

  it('sets auro-avatar to aria-hidden="false"', async () => {
    const el = await fixture(html`
      <auro-avatar img="https://bit.ly/3jaGMoE" ariaVisible></auro-avatar>
    `);

    const root = el.shadowRoot;
    const img = root.querySelector('img');

    await expect(img.ariaHidden).to.equal("false");
  });
});
