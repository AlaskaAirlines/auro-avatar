import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-avatar';

describe('auro-avatar', () => {
  it('auro-avatar is accessible', async () => {
    const el = await fixture(html`
    <auro-avatar type="lg" code="psp"></auro-avatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-avatar is more accessible', async () => {
    const el = await fixture(html`
    <auro-avatar code="psp" type="md" ariaVisible alt="this is a stock image of Palm Springs"></auro-avatar>
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
      <auro-avatar type="sm" code="mke"></auro-avatar>
    `);

    const root = el.shadowRoot;
    const img = root.querySelector('img');

    await expect(img.src).to.equal("https://resource.alaskaair.net/-/media/Images/common-assets/destinations/180x180/mke");
  });


  it('sets auro-avatar with default fallback when using invalid airport code', async () => {
    const el = await fixture(html`
      <auro-avatar code="invalid"></auro-avatar>
    `);

    const root = el.shadowRoot;
    const img = root.querySelector('img');

    await expect(img.src).to.equal("https://resource.alaskaair.net/-/media/Images/common-assets/destinations/800x800/partner");
  });

  it('sets tail image', async () => {
    const el = await fixture(html`
      <auro-avatar type="md" tail="JL">
        <span slot="display">Japan Airlines</span>
      </auro-avatar>
    `);

    const root = el.shadowRoot;
    const icon = root.querySelector('auro-icon').getAttribute('name');

    await expect(icon).to.equal("tail-JL");
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
